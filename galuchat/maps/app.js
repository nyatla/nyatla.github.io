"use strict";

const datasets = window.GaluchatMapDatasets;
const datasetById = new Map(datasets.map((dataset) => [dataset.id, dataset]));
const defaultDatasetId = "jp-2026-mlit-go-jp-n03-adm";
const formerDatasetIds = {
  "jp-admin-n03-2026": "jp-2026-mlit-go-jp-n03-adm",
  "jp-estat-r2ka-2020": "jp-2020-e-stat-go-jp-a002005212020-stat-small-area",
  "tw-admin-nlsc-village-2026": "tw-2026-maps-nlsc-gov-tw-village-adm",
  "uk-admin-ons-lad-2025": "gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc",
  "us-admin-census-county-2025": "us-2025-census-gov-tl-county-adm2",
  "world-geoboundaries-cgaz": "world-2024-geoboundaries-org-cgaz-adm",
};
const select = document.querySelector("#dataset-select");
const description = document.querySelector("#dataset-description");
const dataArea = document.querySelector("#data-area");
const credit = document.querySelector("#source-credit");
const approval = document.querySelector("#approval");
const caveat = document.querySelector("#data-caveat");
const licenseLink = document.querySelector("#license-link");
const dataSpecLink = document.querySelector("#data-spec-link");
const noticeLink = document.querySelector("#notice-link");
const shell = document.querySelector("#map-shell");
const placeName = document.querySelector("#place-name");
const runtimeState = document.querySelector("#runtime-state");
const zoomLabel = document.querySelector("#zoom-label");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomInButton = document.querySelector("#zoom-in");
const homeButton = document.querySelector("#home");
const retryButton = document.querySelector("#retry");
const sampleLocations = document.querySelector("#sample-locations");
const githubDocsRoot = "https://github.com/nyatla/nyatla.github.io/blob/master/galuchat";

let activeMap = null;
let activeSource = null;
let loadVersion = 0;
let loadController = null;
let phase = "loading";

for (const dataset of datasets) {
  const option = document.createElement("option");
  option.value = dataset.id;
  select.append(option);
}
select.addEventListener("change", () => openDataset(select.value, true));
window.addEventListener("popstate", () => openDataset(datasetFromUrl(), false));
window.addEventListener("machml:localechange", updateLocale);
zoomOutButton.addEventListener("click", () => activeMap?.zoomOut());
zoomInButton.addEventListener("click", () => activeMap?.zoomIn());
homeButton.addEventListener("click", () => {
  if (activeMap && activeSource) moveTo(datasetById.get(select.value).center);
});
retryButton.addEventListener("click", () => openDataset(select.value, false));

select.value = datasetFromUrl();
updateLocale();
openDataset(datasetFromUrl(), false);

function localeIndex() {
  return GaluchatLocale.locale === "ja" ? 0 : 1;
}

function localized(pair) {
  return pair[localeIndex()];
}

function datasetFromUrl() {
  const requested = new URL(location.href).searchParams.get("dataset");
  const id = formerDatasetIds[requested] ?? requested;
  return datasetById.has(id) ? id : defaultDatasetId;
}

function updateLocale() {
  const index = localeIndex();
  for (const option of select.options) {
    option.textContent = datasetById.get(option.value).title[index];
  }
  renderDatasetInfo(datasetById.get(select.value || defaultDatasetId));
  renderStatus();
  updateZoom();
}

function renderDatasetInfo(dataset) {
  description.textContent = localized(dataset.description);
  dataArea.textContent = localized(dataset.area);
  credit.textContent = localized(dataset.credit);
  for (const [label, url] of dataset.creditLinks ?? []) {
    credit.append(" ");
    const link = document.createElement("a");
    link.textContent = label;
    link.href = url;
    credit.append(link);
    credit.append(".");
  }
  approval.hidden = !dataset.approval;
  approval.textContent = dataset.approval ? localized(dataset.approval) : "";
  caveat.hidden = !dataset.caveat;
  caveat.textContent = dataset.caveat ? localized(dataset.caveat) : "";
  licenseLink.textContent = dataset.license[localeIndex()];
  licenseLink.href = dataset.license[2];
  dataSpecLink.href = githubDocsRoot + "/data/" + dataset.id + "/data-spec.md";
  noticeLink.href = githubDocsRoot + "/data/" + dataset.id + "/NOTICE.md";
}

function datasetAssetUrl(dataset, filename) {
  return new URL("../data/" + dataset.id + "/" + filename, location.href);
}

async function openDataset(id, updateUrl) {
  const dataset = datasetById.get(id) ?? datasetById.get(defaultDatasetId);
  select.value = dataset.id;
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set("dataset", dataset.id);
    history.pushState(null, "", url);
  }
  const version = ++loadVersion;
  loadController?.abort();
  const controller = new AbortController();
  loadController = controller;
  activeMap?.dispose();
  activeMap = null;
  activeSource = null;
  shell.replaceChildren();
  sampleLocations.replaceChildren();
  retryButton.hidden = true;
  setEnabled(false);
  phase = "loading";
  renderDatasetInfo(dataset);
  renderStatus();
  updateZoom();

  try {
    const manifestUrl = datasetAssetUrl(dataset, "manifest.json");
    const manifest = await fetchJson(manifestUrl, controller.signal);
    if (manifest.type !== "galuchat-gis-dataset-subset" || manifest.id !== dataset.id) {
      throw new Error("unexpected dataset manifest: " + manifestUrl);
    }
    const maps = manifest.files?.maps;
    const wordbooks = manifest.files?.wordbooks;
    if (!Array.isArray(maps) || maps.length === 0 || !Array.isArray(wordbooks) || wordbooks.length === 0) {
      throw new Error("dataset files are missing: " + dataset.id);
    }
    const sortedMaps = [...maps].sort((a, b) => b.unitInv - a.unitInv);
    const wordbook = wordbooks.find((item) => item.default) ?? wordbooks[0];
    const [mapReaders, wordbookBytes] = await Promise.all([
      Promise.all(sortedMaps.map(async (entry) => [
        String(entry.unitInv),
        Galuchat.GaluchatWGSMapSet3Reader.fromUint8Array(
          await fetchBytes(new URL(entry.path, manifestUrl), controller.signal),
        ),
      ])),
      fetchBytes(new URL(wordbook.path, manifestUrl), controller.signal),
    ]);
    if (version !== loadVersion) return;

    const displayReaders = Object.fromEntries(mapReaders);
    const levels = sortedMaps.flatMap((entry) => [1, 2, 4].map((scale) => ({
      id: scale === 1 ? String(entry.unitInv) : String(entry.unitInv) + " / " + scale,
      mapset: String(entry.unitInv),
      scale,
    })));
    const source = new Galuchat.MultiZoomMapSource({
      displayReaders,
      resolverReader: displayReaders[String(sortedMaps[0].unitInv)],
      wordbookReader: Galuchat.GaluchatGisWordBookReader.fromUint8Array(wordbookBytes),
      levels,
      padding: dataset.padding ?? 160,
    });
    source.setZoomLevelIndex(dataset.initialLevelIndex);
    const map = new Galuchat.GaluchatInteractiveMap(shell, source, {
      center: source.snapCenter(dataset.center, dataset.initialLevelIndex),
      maxWidth: 640,
      maxHeight: 480,
      controls: { status: false },
    });
    activeSource = source;
    activeMap = map;
    map.addEventListener("placechange", (event) => {
      if (version !== loadVersion) return;
      placeName.classList.remove("error");
      placeName.textContent = event.detail.name;
    });
    map.addEventListener("maprender", updateZoom);
    map.addEventListener("zoomchange", updateZoom);
    map.canvas.addEventListener("wheel", (event) => map.zoomByWheel(event), { passive: false });
    renderSamples(dataset);
    map.render();
    setEnabled(true);
    phase = "ready";
    renderStatus();
    updateZoom();
  } catch (error) {
    if (version !== loadVersion || error.name === "AbortError") return;
    activeMap?.dispose();
    activeMap = null;
    activeSource = null;
    shell.replaceChildren();
    setEnabled(false);
    phase = "error";
    retryButton.hidden = false;
    renderStatus();
    updateZoom();
    console.error(error);
  }
}

function renderSamples(dataset) {
  const label = document.createElement("span");
  label.textContent = localeIndex() === 0 ? "移動先:" : "Jump to:";
  sampleLocations.append(label);
  for (const [name, lon, lat] of dataset.samples) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = name;
    button.addEventListener("click", () => moveTo({ lon, lat }));
    sampleLocations.append(button);
  }
}

function moveTo(center) {
  if (!activeMap || !activeSource) return;
  const dataset = datasetById.get(select.value);
  activeSource.setZoomLevelIndex(dataset.initialLevelIndex);
  activeMap.setView({
    center: activeSource.snapCenter(center, dataset.initialLevelIndex),
    selectedCode: null,
  });
}

function setEnabled(enabled) {
  zoomOutButton.disabled = !enabled;
  zoomInButton.disabled = !enabled;
  homeButton.disabled = !enabled;
  for (const button of sampleLocations.querySelectorAll("button")) button.disabled = !enabled;
}

function renderStatus() {
  const japanese = localeIndex() === 0;
  runtimeState.hidden = phase === "ready";
  runtimeState.classList.toggle("error", phase === "error");
  placeName.classList.toggle("error", phase === "error");
  if (phase === "loading") {
    runtimeState.textContent = japanese ? "データを読み込み中" : "Loading data";
    placeName.textContent = japanese ? "地図データを読み込んでいます…" : "Loading map data…";
  } else if (phase === "error") {
    runtimeState.textContent = japanese ? "読み込みエラー" : "Load error";
    placeName.textContent = japanese ? "データを読み込めませんでした。再試行してください。" : "Could not load the data. Please retry.";
  } else {
    runtimeState.textContent = "";
    placeName.textContent = activeMap?.currentPlace?.name || (japanese ? "地図をクリックして区域を選択" : "Click the map to select a region");
  }
  if (sampleLocations.firstElementChild?.tagName === "SPAN") {
    sampleLocations.firstElementChild.textContent = japanese ? "移動先:" : "Jump to:";
  }
}

function updateZoom() {
  if (!activeMap || !activeSource) {
    zoomLabel.textContent = localeIndex() === 0 ? "解像度を準備中" : "Preparing resolutions";
    return;
  }
  zoomInButton.disabled = !activeMap.canZoomIn();
  zoomOutButton.disabled = !activeMap.canZoomOut();
  const unitInv = Math.round(activeSource.unitInvX / activeSource.currentPixelScale);
  const label = activeSource.currentLevel.id;
  zoomLabel.textContent = localeIndex() === 0
    ? "表示: " + label + " · 約" + unitInv + " px/度"
    : "Display: " + label + " · approximately " + unitInv + " px/degree";
}

async function fetchJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error("failed to fetch " + url + ": " + response.status);
  return response.json();
}

async function fetchBytes(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error("failed to fetch " + url + ": " + response.status);
  return new Uint8Array(await response.arrayBuffer());
}
