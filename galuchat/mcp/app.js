"use strict";

const STORAGE_KEY = "galuchat-reverse-geocoding-history-v3";
const DATA_ROOT = "../data";
const GITHUB_DOCS_ROOT = "https://github.com/nyatla/nyatla.github.io/blob/master/galuchat";
const mapConfigById = new Map(window.GaluchatMapDatasets.map((config) => [config.id, config]));
const localize = (ja, en) => GaluchatLocale.locale === "ja" ? ja : en;
const datasetTitle = (id) => GaluchatLocale.locale === "ja"
  ? datasets[id].title
  : mapConfigById.get(id)?.title[1] ?? datasets[id].title;
const SYSTEM_LIMITS = Object.freeze({
  positionsPerRequest: 10000,
  codesPerRequest: 10000,
  codeMapCellsPerRequest: 10000,
});

const datasets = {
  "jp-2026-mlit-go-jp-n03-adm": {
    manifestUrl: `${DATA_ROOT}/jp-2026-mlit-go-jp-n03-adm/manifest.json`,
    title: "日本行政区域（国土数値情報 N03 / 2026）",
    description: "国土数値情報N03をGaluchat用に加工した行政区域データ",
    area: { west: 122.9326, south: 20.4227, east: 153.9868, north: 45.5573 },
    codemaps: ["place-name-utf8"],
    samples: [
      { label: "津田沼駅", lon: 140.0206, lat: 35.6911 },
      { label: "東京駅", lon: 139.7671, lat: 35.6812 },
      { label: "京都駅", lon: 135.7588, lat: 34.9858 },
    ],
    license: {
      name: "CC BY 4.0",
      url: "https://creativecommons.org/licenses/by/4.0/",
      sourceName: "国土数値情報 行政区域データ N03-2026",
      sourceUrl: "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html",
      attribution: "「国土数値情報（行政区域データ）」（国土交通省）をもとにGaluchat用に加工して作成",
      approval: "測量法に基づく国土地理院長承認（使用）R 8JHs 319",
      noticeUrl: `${DATA_ROOT}/jp-2026-mlit-go-jp-n03-adm/NOTICE.md`,
    },
    maps: [],
  },
  "jp-2020-e-stat-go-jp-a002005212020-stat-small-area": {
    manifestUrl: `${DATA_ROOT}/jp-2020-e-stat-go-jp-a002005212020-stat-small-area/manifest.json`,
    title: "e-Stat 令和2年国勢調査 町丁・字等境界",
    description: "e-Statの町丁・字等境界をGaluchat用に加工した境界データ",
    area: { west: 122.9338, south: 20.425, east: 153.9829, north: 45.5231 },
    codemaps: ["place-name-utf8"],
    samples: [
      { label: "津田沼駅", lon: 140.0206, lat: 35.6911 },
      { label: "東京駅", lon: 139.7671, lat: 35.6812 },
      { label: "京都駅", lon: 135.7588, lat: 34.9858 },
    ],
    license: {
      name: "政府標準利用規約2.0（CC BY 4.0互換）",
      url: "https://www.e-stat.go.jp/terms-of-use",
      sourceName: "令和2年国勢調査 町丁・字等境界データ",
      sourceUrl: "https://www.e-stat.go.jp/gis/statmap-search?page=1&type=2&aggregateUnitForBoundary=A&toukeiCode=00200521&toukeiYear=2020&serveyId=A002005212020&coordsys=1&format=shape&datum=2011",
      attribution: "「令和2年国勢調査 町丁・字等境界データ」（総務省統計局、e-Stat）をGaluchat用に加工して作成",
      noticeUrl: `${DATA_ROOT}/jp-2020-e-stat-go-jp-a002005212020-stat-small-area/NOTICE.md`,
    },
    maps: [],
  },
  "tw-2026-maps-nlsc-gov-tw-village-adm": {
    manifestUrl: `${DATA_ROOT}/tw-2026-maps-nlsc-gov-tw-village-adm/manifest.json`,
    title: "台湾 村里界（NLSC / 2026）",
    description: "內政部國土測繪中心の村里界圖をGaluchat用に加工した行政区域データ",
    area: { west: 114.3593, south: 10.3713, east: 124.5613, north: 26.3854 },
    codemaps: ["place-name-utf8"],
    samples: [
      { label: "台北101", lon: 121.5645, lat: 25.0339 },
      { label: "台中駅", lon: 120.6853, lat: 24.1368 },
      { label: "高雄駅", lon: 120.3027, lat: 22.6398 },
    ],
    license: {
      name: "政府資料開放授權條款－第1版",
      url: "https://data.gov.tw/license",
      sourceName: "內政部國土測繪中心 村里界圖(TWD97經緯度)",
      sourceUrl: "https://data.gov.tw/dataset/7438",
      attribution: "內政部國土測繪中心 2026 村里界圖(TWD97經緯度)（2026-08-17版）。此開放資料依政府資料開放授權條款第1版進行公眾釋出。",
      noticeUrl: `${DATA_ROOT}/tw-2026-maps-nlsc-gov-tw-village-adm/NOTICE.md`,
    },
    maps: [],
  },
  "gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc": {
    manifestUrl: `${DATA_ROOT}/gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc/manifest.json`,
    title: "英国 Local Authority Districts（ONS / 2025）",
    description: "ONS Local Authority Districts (December 2025) UK BFCをGaluchat用に加工した行政区域データ",
    area: { west: -8.65, south: 49.8647, east: 1.7638, north: 60.8609 },
    codemaps: ["place-name-utf8"],
    samples: [
      { label: "London", lon: -0.1276, lat: 51.5072 },
      { label: "Edinburgh", lon: -3.1883, lat: 55.9533 },
      { label: "Cardiff", lon: -3.1791, lat: 51.4816 },
      { label: "Belfast", lon: -5.9301, lat: 54.5973 },
    ],
    license: {
      name: "Open Government Licence v3.0",
      url: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
      sourceName: "ONS Local Authority Districts (December 2025) Boundaries UK BFC",
      sourceUrl: "https://www.data.gov.uk/dataset/aa5a9ccf-fbea-43cb-81cc-fdc04d89f128/local-authority-districts-december-2025-boundaries-uk-bfc",
      attribution: "Source: Office for National Statistics licensed under the Open Government Licence v.3.0. Contains OS data © Crown copyright and database right 2026.",
      noticeUrl: `${DATA_ROOT}/gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc/NOTICE.md`,
    },
    maps: [],
  },
  "us-2025-census-gov-tl-county-adm2": {
    manifestUrl: `${DATA_ROOT}/us-2025-census-gov-tl-county-adm2/manifest.json`,
    title: "米国 County and Equivalent Entities（Census TIGER/Line / 2025）",
    description: "U.S. Census Bureau 2025 TIGER/Line County and Equivalent EntitiesをGaluchat用に加工した行政区域データ",
    area: { west: -179.2311, south: 18.8655, east: 179.8598, north: 71.4399 },
    codemaps: ["place-name-utf8"],
    samples: [
      { label: "New York", lon: -74.006, lat: 40.7128 },
      { label: "Los Angeles", lon: -118.2437, lat: 34.0522 },
      { label: "Chicago", lon: -87.6298, lat: 41.8781 },
      { label: "New Orleans", lon: -90.0715, lat: 29.9511 },
      { label: "Honolulu", lon: -157.8583, lat: 21.3069 },
    ],
    license: {
      name: "U.S. Census Bureau TIGER/Line terms",
      url: "https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2025.html",
      sourceName: "U.S. Census Bureau 2025 TIGER/Line County and Equivalent Entities",
      sourceUrl: "https://www2.census.gov/geo/tiger/TIGER2025/COUNTY/tl_2025_us_county.zip",
      attribution: "Source: U.S. Census Bureau, 2025 TIGER/Line® Shapefiles, County and Equivalent Entities. Derived and processed by the Galuchat project; not endorsed by the U.S. Census Bureau.",
      noticeUrl: `${DATA_ROOT}/us-2025-census-gov-tl-county-adm2/NOTICE.md`,
    },
    maps: [],
  },
  "world-2024-geoboundaries-org-cgaz-adm": {
    manifestUrl: `${DATA_ROOT}/world-2024-geoboundaries-org-cgaz-adm/manifest.json`,
    title: "世界行政区域（geoBoundaries CGAZ）",
    description: "geoBoundaries CGAZの利用可能な最詳細行政区域をGaluchat用に加工した世界行政区域データ",
    area: { west: -180, south: -89.999, east: 180.001, north: 83.617 },
    codemaps: ["place-name-utf8"],
    samples: [
      { label: "Paris", lon: 2.3522, lat: 48.8566 },
      { label: "New York", lon: -74.006, lat: 40.7128 },
      { label: "Tokyo", lon: 139.6917, lat: 35.6895 },
    ],
    license: {
      name: "CC BY 4.0",
      url: "https://creativecommons.org/licenses/by/4.0/",
      sourceName: "geoBoundaries CGAZ best-available administrative areas",
      sourceUrl: "https://www.geoboundaries.org/globalDownloads.html",
      attribution: "Contains information from geoBoundaries, produced by the William & Mary geoLab and the geoBoundaries community, licensed under CC BY 4.0. Adapted for Galuchat.",
      noticeUrl: `${DATA_ROOT}/world-2024-geoboundaries-org-cgaz-adm/NOTICE.md`,
    },
    maps: [],
  },
};

// The map page owns the published dataset list. Keep the reverse-geocoder's
// existing detailed metadata, and add the remaining datasets from that list.
const additionalDatasetDetails = {
  "jp-2024-mlit-go-jp-n03-adm": {
    area: { west: 122.9326, south: 20.4227, east: 153.9868, north: 45.5573 },
    sourceName: "国土数値情報 行政区域データ N03-2024",
    sourceUrl: "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2024.html",
  },
  "jp-2025-mlit-go-jp-n03-adm": {
    area: { west: 122.9326, south: 20.4227, east: 153.9868, north: 45.5573 },
    sourceName: "国土数値情報 行政区域データ N03-2025",
    sourceUrl: "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2025.html",
  },
  "jp-2026-nyatla-jp-estat-coastline": {
    area: { west: 122.9326, south: 20.4227, east: 153.9868, north: 45.5573 },
    sourceName: "国土数値情報 行政区域データ N03-2026",
    sourceUrl: "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html",
    attribution: "国土交通省の行政区域データと総務省統計局・e-Statの町丁・字等境界データをGaluchat用に加工・統合。利用条件と承認表示の適用範囲はNOTICEを参照してください。",
  },
  "us-2025-census-gov-tl-state-adm1": {
    area: { west: -179.2311, south: 18.8655, east: 179.8598, north: 71.4399 },
    sourceName: "U.S. Census Bureau 2025 TIGER/Line State and Equivalent Entities",
    sourceUrl: "https://www2.census.gov/geo/tiger/TIGER2025/STATE/tl_2025_us_state.zip",
  },
  "ca-2021-statcan-gc-ca-csd-cbf-stat-csd": {
    area: { west: -141.0181, south: 41.6813, east: -52.6193, north: 83.1372 },
    sourceName: "Statistics Canada 2021 Census Subdivision Cartographic Boundary File",
    sourceUrl: "https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21",
  },
  "au-2021-abs-gov-au-sal-stat-sal": {
    area: { west: 96.817, south: -43.7405, east: 167.9981, north: -9.1421 },
    sourceName: "ABS ASGS Edition 3 Suburbs and Localities 2021",
    sourceUrl: "https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files",
  },
  "de-2026-gdz-bkg-bund-de-vg250-adm": {
    area: { west: 5.8663, south: 47.2701, east: 15.0419, north: 55.0589 },
    sourceName: "BKG Verwaltungsgebiete 1:250 000 VG250",
    sourceUrl: "https://gdz.bkg.bund.de/index.php/default/open-data/verwaltungsgebiete-1-250-000-stand-01-01-vg250-01-01.html",
    attribution: "© BKG 2026 dl-de/by-2-0, Datenquellen: https://sgx.geodatenzentrum.de/web_public/gdz/datenquellen/datenquellen_vg_nuts.pdf. Derived and processed by Galuchat. Not endorsed by BKG.",
  },
  "fr-2026-cartes-gouv-fr-admin-express-cog-adm": {
    area: { west: -61.8098, south: -21.3896, east: 55.8368, north: 51.0893 },
    sourceName: "IGN ADMIN EXPRESS COG 4.0 (2026-01-01)",
    sourceUrl: "https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS",
    attribution: "Source: IGN, ADMIN EXPRESS COG 4.0, edition 2026-01-01. Derived and processed by Galuchat. Not endorsed by IGN or INSEE.",
  },
  "nl-2026-cbs-nl-wijkbuurtkaart-adm": {
    area: { west: 3.3079, south: 50.7504, east: 7.2276, north: 53.5765 },
    sourceName: "CBS・Kadaster Wijk- en Buurtkaart 2026 (Gemeenten)",
    sourceUrl: "https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/wijk-en-buurtkaart-2026",
  },
  "nl-2026-cbs-nl-wijkbuurtkaart-stat-buurt": {
    area: { west: 3.3079, south: 50.7504, east: 7.2276, north: 53.5765 },
    sourceName: "CBS・Kadaster Wijk- en Buurtkaart 2026 (Buurten)",
    sourceUrl: "https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/wijk-en-buurtkaart-2026",
  },
};

for (const config of window.GaluchatMapDatasets) {
  if (datasets[config.id]) continue;
  const detail = additionalDatasetDetails[config.id];
  if (!detail) throw new Error(`reverse-geocoding metadata is missing: ${config.id}`);
  datasets[config.id] = {
    manifestUrl: `${DATA_ROOT}/${config.id}/manifest.json`,
    title: config.title[0],
    description: config.description[0],
    area: detail.area,
    codemaps: ["place-name-utf8"],
    samples: config.samples.map(([label, lon, lat]) => ({ label, lon, lat })),
    license: {
      name: config.license[0],
      url: config.license[2],
      sourceName: detail.sourceName,
      sourceUrl: detail.sourceUrl,
      attribution: detail.attribution ?? config.credit[0],
      ...(config.approval ? { approval: config.approval[0] } : {}),
      noticeUrl: `${DATA_ROOT}/${config.id}/NOTICE.md`,
    },
    maps: [],
  };
}
for (const [id, dataset] of Object.entries(datasets)) dataset.id = id;

const form = document.querySelector("#geocode-form");
const coordinateList = document.querySelector("#coordinate-list");
const coordinateListHeader = document.querySelector("#coordinate-list-header");
const coordinateRowTemplate = coordinateList.firstElementChild.cloneNode(true);
const addCoordinateButton = document.querySelector("#add-coordinate");
const pasteCoordinatesButton = document.querySelector("#paste-coordinates");
const coordinatePastePanel = document.querySelector("#coordinate-paste-panel");
const coordinatePasteInput = document.querySelector("#coordinate-paste-input");
const applyCoordinatePasteButton = document.querySelector("#apply-coordinate-paste");
const cancelCoordinatePasteButton = document.querySelector("#cancel-coordinate-paste");
const clearCoordinatesButton = document.querySelector("#clear-coordinates");
const coordinateCount = document.querySelector("#coordinate-count");
const coordinateError = document.querySelector("#coordinate-error");
const coordinateNotice = document.querySelector("#coordinate-notice");
const samplePoints = document.querySelector(".sample-points");
const datasetSelect = document.querySelector("#dataset");
const mapSelect = document.querySelector("#map");
const mapMeta = document.querySelector("#map-meta");
const licenseLink = document.querySelector("#license-link");
const sourceLink = document.querySelector("#source-link");
const attribution = document.querySelector("#attribution");
const approval = document.querySelector("#approval");
const dataSpecLink = document.querySelector("#data-spec-link");
const noticeLink = document.querySelector("#notice-link");
const codemapList = document.querySelector("#codemap-list");
const submitButton = document.querySelector("#submit-button");
const timeline = document.querySelector("#timeline");
const emptyState = document.querySelector("#empty-state");
const historyCount = document.querySelector("#history-count");
const downloadJsonButton = document.querySelector("#download-json");
const downloadCsvButton = document.querySelector("#download-csv");
const clearHistoryButton = document.querySelector("#clear-history");
const toast = document.querySelector("#toast");
const loadPanel = document.querySelector("#load-panel");
const loadProgressText = document.querySelector("#load-progress-text");
const loadResource = document.querySelector("#load-resource");
const loadProgressBar = document.querySelector("#load-progress-bar");
const webMcpStatus = document.querySelector("#webmcp-status");

let history = loadHistory();
let toastTimer = null;
let busyState = null;
let isInitialized = false;
const loadedResources = new Set();
const mapReaders = new Map();
const wordbookReaders = new Map();
const geocoders = new Map();

initialize().catch((error) => {
  coordinateError.textContent = localize("データ一覧を読み込めませんでした。ページを再読み込みしてください。", "Could not load the dataset list. Reload this page.");
  setWebMcpStatus("WebMCP ERROR", "is-error", localize("データ一覧を読み込めないためWebMCPを利用できません", "WebMCP is unavailable because the dataset list could not be loaded"));
  console.error(error);
});

async function initialize() {
  submitButton.disabled = true;
  refreshCoordinateRows();
  await loadDatasetManifests();
  for (const [id, dataset] of Object.entries(datasets)) {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = datasetTitle(id);
    datasetSelect.append(option);
  }

  datasetSelect.value = "jp-2026-mlit-go-jp-n03-adm";
  updateMapOptions("unit-inv-10000");

  renderHistory();
  isInitialized = true;
  refreshCoordinateRows();
  registerWebMcpTools();
  updateLocale();
}

window.addEventListener("machml:localechange", updateLocale);

function updateLocale() {
  clearHistoryButton.title = localize("検索結果を消去", "Clear search results");
  for (const option of datasetSelect.options) option.textContent = datasetTitle(option.value);
  refreshCoordinateRows();
  renderHistory();
  if (isInitialized) {
    updateMapOptions(mapSelect.value);
  }
  if (busyState !== null) setBusy(busyState);
  refreshWebMcpStatus();
}

async function loadDatasetManifests() {
  await Promise.all(Object.entries(datasets).map(async ([datasetId, dataset]) => {
    const response = await fetch(dataset.manifestUrl);
    if (!response.ok) throw new Error(`manifest load failed: ${response.status} ${dataset.manifestUrl}`);
    const manifest = await response.json();
    if (manifest.type !== "galuchat-gis-dataset-subset" || manifest.id !== datasetId) {
      throw new Error(`unexpected dataset manifest: ${dataset.manifestUrl}`);
    }
    const baseUrl = new URL(".", response.url);
    const mapRecord = manifest.files.maps.reduce((highest, record) =>
      !highest || record.unitInv > highest.unitInv ? record : highest, null);
    if (!mapRecord || !Number.isInteger(mapRecord.unitInv) || mapRecord.unitInv <= 0) {
      throw new Error(`valid map is missing from subset manifest: ${datasetId}`);
    }
    const resolution = 1 / mapRecord.unitInv;
    dataset.maps = [{
      id: mapRecord.id,
      label: `1/${mapRecord.unitInv}度`,
      resolution: { lon: resolution, lat: resolution },
      note: `緯度方向 約${Math.round(111000 / mapRecord.unitInv)} m/px`,
      size: mapRecord.size,
      url: new URL(mapRecord.path, baseUrl).href,
    }];
    const wordbook = manifest.files.wordbooks.find((record) => record.default)
      ?? manifest.files.wordbooks[0];
    if (!wordbook) throw new Error(`wordbook is missing from subset manifest: ${datasetId}`);
    dataset.wordbook = {
      size: wordbook.size,
      url: new URL(wordbook.path, baseUrl).href,
    };
    if (manifest.files.notice) {
      dataset.license.noticeUrl = new URL(manifest.files.notice.path, baseUrl).href;
    }
  }));
}

datasetSelect.addEventListener("change", () => updateMapOptions());
mapSelect.addEventListener("change", updateMapMeta);

coordinateList.addEventListener("input", (event) => {
  if (!event.target.matches(".longitude-input, .latitude-input")) return;
  event.target.classList.remove("is-invalid");
  event.target.closest("[data-coordinate-row]").querySelector(".coordinate-row-error").textContent = "";
  coordinateError.textContent = "";
  coordinateNotice.textContent = "";
  refreshCoordinateRows();
});

coordinateList.addEventListener("change", (event) => {
  if (!event.target.matches(".longitude-input, .latitude-input")) return;
  const value = Number(event.target.value);
  if (Number.isFinite(value)) event.target.value = formatCoordinateInput(value);
});

coordinateList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-coordinate");
  if (removeButton === null) return;
  removeButton.closest("[data-coordinate-row]").remove();
  coordinateError.textContent = "";
  coordinateNotice.textContent = "";
  refreshCoordinateRows();
});

addCoordinateButton.addEventListener("click", () => {
  if (coordinateRows().length >= SYSTEM_LIMITS.positionsPerRequest) return;
  const row = appendCoordinateRow();
  refreshCoordinateRows();
  row.querySelector(".longitude-input").focus();
});

pasteCoordinatesButton.addEventListener("click", () => {
  const willOpen = coordinatePastePanel.hidden;
  coordinatePastePanel.hidden = !willOpen;
  pasteCoordinatesButton.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) coordinatePasteInput.focus();
});

cancelCoordinatePasteButton.addEventListener("click", closeCoordinatePastePanel);

clearCoordinatesButton.addEventListener("click", () => {
  setCoordinateRows([]);
  coordinatePasteInput.value = "";
  closeCoordinatePastePanel();
  coordinateError.textContent = "";
  coordinateNotice.textContent = "";
  addCoordinateButton.focus();
});

applyCoordinatePasteButton.addEventListener("click", () => {
  try {
    const positions = parseCoordinatePaste(coordinatePasteInput.value);
    appendCoordinatePositions(positions);
    coordinatePasteInput.value = "";
    coordinateError.textContent = "";
    updateDuplicateNotice(readValidCoordinateRows());
    closeCoordinatePastePanel();
    showToast(localize(`${positions.length}地点を追加しました`, `Added ${positions.length} point(s)`));
  } catch (error) {
    coordinateError.textContent = error instanceof Error ? error.message : String(error);
  }
});

samplePoints.addEventListener("click", (event) => {
  const sampleButton = event.target.closest("[data-sample-lon][data-sample-lat]");
  if (sampleButton === null) return;
  try {
    appendCoordinatePositions([{
      lon: Number(sampleButton.dataset.sampleLon),
      lat: Number(sampleButton.dataset.sampleLat),
    }]);
    coordinateError.textContent = "";
    updateDuplicateNotice(readValidCoordinateRows());
    showToast(localize(`${sampleButton.textContent}を追加しました`, `Added ${sampleButton.textContent}`));
  } catch (error) {
    coordinateError.textContent = error instanceof Error ? error.message : String(error);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const positions = readCoordinateRows();
  if (positions === null) return;

  coordinateError.textContent = "";
  updateDuplicateNotice(positions);
  const datasetId = datasetSelect.value;
  const mapId = mapSelect.value;
  let operation = "loading";

  try {
    setBusy("loading");
    const geocoder = await ensureResourcesLoaded(datasetId, mapId);
    operation = "resolving";
    setBusy("resolving");
    const map = selectedMap(datasetId, mapId);
    const execution = reverseGeocodePositions(geocoder, positions);
    const entry = createSearchHistoryEntry({
      positions,
      datasetId,
      map,
      codemaps: datasets[datasetId].codemaps,
      ...execution,
    });
    prependHistoryEntry(entry);
    showToast(positions.length === 1
      ? localize("検索結果を追加しました", "Search result added")
      : localize(`${positions.length}地点の検索結果を追加しました`, `Added results for ${positions.length} points`));
  } catch (error) {
    coordinateError.textContent = operation === "loading"
      ? localize("地図データを読み込めませんでした。通信状態を確認して、もう一度お試しください。", "Could not load map data. Check your connection and try again.")
      : localize("検索中にエラーが発生しました。入力内容を確認して、もう一度お試しください。", "The search failed. Check your input and try again.");
    console.error(error);
  } finally {
    loadPanel.hidden = true;
    setBusy(null);
  }
});

function coordinateRows() {
  return [...coordinateList.querySelectorAll("[data-coordinate-row]")];
}

function coordinateRowFields(row) {
  return {
    longitude: row.querySelector(".longitude-input"),
    latitude: row.querySelector(".latitude-input"),
    error: row.querySelector(".coordinate-row-error"),
  };
}

function coordinateRowValue(row) {
  const fields = coordinateRowFields(row);
  const lonText = fields.longitude.value.trim();
  const latText = fields.latitude.value.trim();
  return {
    fields,
    lonText,
    latText,
    lon: Number(lonText),
    lat: Number(latText),
  };
}

function isEmptyCoordinateRow(row) {
  const { lonText, latText } = coordinateRowValue(row);
  return lonText === "" && latText === "";
}

function appendCoordinateRow(position = { lon: "", lat: "" }) {
  const row = coordinateRowTemplate.cloneNode(true);
  const fields = coordinateRowFields(row);
  fields.longitude.value = formatCoordinateInput(position.lon);
  fields.latitude.value = formatCoordinateInput(position.lat);
  clearCoordinateRowError(row);
  coordinateList.append(row);
  return row;
}

function setCoordinateRows(positions) {
  coordinateList.replaceChildren();
  for (const position of positions.slice(0, SYSTEM_LIMITS.positionsPerRequest)) appendCoordinateRow(position);
  refreshCoordinateRows();
}

function appendCoordinatePositions(positions) {
  const rows = coordinateRows();
  const emptyRows = rows.filter(isEmptyCoordinateRow);
  const occupiedCount = rows.length - emptyRows.length;
  const availableCount = SYSTEM_LIMITS.positionsPerRequest - occupiedCount;
  if (positions.length > availableCount) {
    throw new Error(localize(`追加できる座標は残り${availableCount}地点です。`, `You can add ${availableCount} more point(s).`));
  }

  positions.forEach((position, index) => {
    const row = emptyRows[index] ?? appendCoordinateRow();
    const fields = coordinateRowFields(row);
    fields.longitude.value = formatCoordinateInput(position.lon);
    fields.latitude.value = formatCoordinateInput(position.lat);
    clearCoordinateRowError(row);
  });
  refreshCoordinateRows();
}

function readValidCoordinateRows() {
  return coordinateRows().flatMap((row) => {
    const { lonText, latText, lon, lat } = coordinateRowValue(row);
    const isValid = lonText !== "" && latText !== ""
      && Number.isFinite(lon) && lon >= -180 && lon <= 180
      && Number.isFinite(lat) && lat >= -90 && lat <= 90;
    return isValid ? [{ lon, lat }] : [];
  });
}

function refreshCoordinateRows() {
  const rows = coordinateRows();
  const hasRows = rows.length > 0;
  coordinateList.hidden = !hasRows;
  coordinateListHeader.hidden = !hasRows;
  const enteredCount = rows.filter((row) => !isEmptyCoordinateRow(row)).length;
  rows.forEach((row, index) => {
    const displayIndex = index + 1;
    const fields = coordinateRowFields(row);
    row.querySelector(".coordinate-index").textContent = String(displayIndex).padStart(2, "0");
    fields.longitude.setAttribute("aria-label", localize(`${displayIndex}地点目の経度`, `Longitude of point ${displayIndex}`));
    fields.latitude.setAttribute("aria-label", localize(`${displayIndex}地点目の緯度`, `Latitude of point ${displayIndex}`));
    const removeButton = row.querySelector(".remove-coordinate");
    removeButton.disabled = busyState !== null;
    removeButton.setAttribute("aria-label", localize(`${displayIndex}地点目を削除`, `Remove point ${displayIndex}`));
    removeButton.title = localize("この地点を削除", "Remove this point");
  });
  coordinateCount.textContent = localize(`${enteredCount} / ${SYSTEM_LIMITS.positionsPerRequest}地点`, `${enteredCount} / ${SYSTEM_LIMITS.positionsPerRequest} points`);
  addCoordinateButton.disabled = rows.length >= SYSTEM_LIMITS.positionsPerRequest || busyState !== null;
  clearCoordinatesButton.disabled = rows.length === 0 || busyState !== null;
  if (busyState === null) {
    updateSubmitLabel(enteredCount);
    submitButton.disabled = !isInitialized || enteredCount === 0;
  }
}

function readCoordinateRows() {
  if (coordinateRows().length === 0) {
    coordinateError.textContent = localize("検索する座標を追加してください。", "Add coordinates to search.");
    return null;
  }
  const positions = [];
  let hasError = false;
  for (const [index, row] of coordinateRows().entries()) {
    clearCoordinateRowError(row);
    const { fields, lonText, latText, lon, lat } = coordinateRowValue(row);
    let message = "";
    if (lonText === "" || !Number.isFinite(lon) || lon < -180 || lon > 180) {
      fields.longitude.classList.add("is-invalid");
      message = localize("経度は−180〜180の数値で入力してください。", "Enter a longitude between −180 and 180.");
    }
    if (latText === "" || !Number.isFinite(lat) || lat < -90 || lat > 90) {
      fields.latitude.classList.add("is-invalid");
      message = message === ""
        ? localize("緯度は−90〜90の数値で入力してください。", "Enter a latitude between −90 and 90.")
        : localize("経度は−180〜180、緯度は−90〜90の数値で入力してください。", "Enter a longitude between −180 and 180 and a latitude between −90 and 90.");
    }
    if (message !== "") {
      fields.error.textContent = localize(`${index + 1}地点目：${message}`, `Point ${index + 1}: ${message}`);
      hasError = true;
    } else {
      const position = { lon: roundCoordinate(lon), lat: roundCoordinate(lat) };
      fields.longitude.value = formatCoordinateInput(position.lon);
      fields.latitude.value = formatCoordinateInput(position.lat);
      positions.push(position);
    }
  }
  coordinateError.textContent = hasError ? localize("入力内容を確認してください。", "Check your input.") : "";
  coordinateNotice.textContent = "";
  return hasError ? null : positions;
}

function clearCoordinateRowError(row) {
  const fields = coordinateRowFields(row);
  fields.longitude.classList.remove("is-invalid");
  fields.latitude.classList.remove("is-invalid");
  fields.error.textContent = "";
}

function parseCoordinatePaste(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) throw new Error(localize("貼り付ける座標を入力してください。", "Enter coordinates to paste."));
  if (lines.length > SYSTEM_LIMITS.positionsPerRequest) {
    throw new Error(localize(`入力できる座標は最大${SYSTEM_LIMITS.positionsPerRequest}地点です（現在${lines.length}行）。`, `You can enter up to ${SYSTEM_LIMITS.positionsPerRequest} points (${lines.length} lines entered).`));
  }
  return lines.map((line, index) => {
    const parts = line.split(/[\s,，;；]+/).filter(Boolean);
    if (parts.length !== 2) throw new Error(localize(`${index + 1}行目を「経度, 緯度」の形式で入力してください。`, `Enter line ${index + 1} as "longitude, latitude".`));
    const lon = Number(parts[0]);
    const lat = Number(parts[1]);
    if (!Number.isFinite(lon) || lon < -180 || lon > 180) {
      throw new Error(localize(`${index + 1}行目の経度は−180〜180の数値で入力してください。`, `Longitude on line ${index + 1} must be between −180 and 180.`));
    }
    if (!Number.isFinite(lat) || lat < -90 || lat > 90) {
      throw new Error(localize(`${index + 1}行目の緯度は−90〜90の数値で入力してください。`, `Latitude on line ${index + 1} must be between −90 and 90.`));
    }
    return { lon: roundCoordinate(lon), lat: roundCoordinate(lat) };
  });
}

function updateDuplicateNotice(positions) {
  const unique = new Set(positions.map((position) => `${position.lon}\u0000${position.lat}`));
  const duplicateCount = positions.length - unique.size;
  coordinateNotice.textContent = duplicateCount === 0
    ? ""
    : localize(`同じ座標が${duplicateCount}件あります。そのまま検索します。`, `${duplicateCount} coordinates are duplicates. They will still be searched.`);
}

function closeCoordinatePastePanel() {
  coordinatePastePanel.hidden = true;
  pasteCoordinatesButton.setAttribute("aria-expanded", "false");
}

downloadJsonButton.addEventListener("click", () => {
  downloadFile(
    `galuchat-geocoding-${dateStamp()}.json`,
    JSON.stringify({ exported_at: new Date().toISOString(), datasets: exportedDatasets(), records: history }, null, 2),
    "application/json",
  );
  showToast(localize("JSONをダウンロードしました", "JSON downloaded"));
});

downloadCsvButton.addEventListener("click", () => {
  const header = [
    "timestamp", "search_type", "input_count", "input_index", "longitude", "latitude",
    "dataset", "map", "resolution_lon", "resolution_lat",
    "status", "galuchat_map_code", "name", "elapsed_ms",
    "source_name", "source_url", "license", "license_url", "attribution", "approval", "notice_url",
  ];
  const rows = history.flatMap(historyCsvRows);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  downloadFile(`galuchat-geocoding-${dateStamp()}.csv`, `\ufeff${csv}`, "text/csv;charset=utf-8");
  showToast(localize("CSVをダウンロードしました", "CSV downloaded"));
});

function historyCsvRows(record) {
  const license = record.result.license ?? (datasets[record.input.dataset]
    ? serializeLicense(datasets[record.input.dataset].license)
    : {});
  const common = (position, status, code, name, inputCount, inputIndex) => [
    record.timestamp,
    isMultipleRecord(record) ? "multiple" : "single",
    inputCount,
    inputIndex,
    position.lon,
    position.lat,
    record.input.dataset,
    record.input.map,
    record.result.resolution.lon,
    record.result.resolution.lat,
    status,
    code ?? "",
    name ?? "",
    record.elapsed_ms,
    license.source_name ?? "",
    license.source_url ?? "",
    license.name ?? "",
    license.url ?? "",
    license.attribution ?? "",
    license.approval ?? "",
    license.notice_url ?? "",
  ];

  if (!isMultipleRecord(record)) {
    return [common(
      record.input.position,
      record.result.status,
      record.result.code,
      record.result.values?.["place-name-utf8"]?.name,
      1,
      1,
    )];
  }

  return record.input.positions.map((position, index) => {
    const code = record.result.codes[index];
    const name = code === null
      ? ""
      : record.result.values?.["place-name-utf8"]?.[String(code)]?.name ?? "";
    return common(
      position,
      record.statuses?.[index] ?? (code === null ? "not_found" : "found"),
      code,
      name,
      record.input.positions.length,
      index + 1,
    );
  });
}

clearHistoryButton.addEventListener("click", () => {
  history = [];
  saveHistory();
  renderHistory();
  showToast(localize("検索結果を消去しました", "Search results cleared"));
});

function updateMapOptions(preferredMap = null) {
  const dataset = datasets[datasetSelect.value];
  mapSelect.replaceChildren();
  for (const map of dataset.maps) {
    const option = document.createElement("option");
    option.value = map.id;
    option.textContent = `${map.label} (${map.note})`;
    mapSelect.append(option);
  }
  if (preferredMap && dataset.maps.some((map) => map.id === preferredMap)) {
    mapSelect.value = preferredMap;
  }
  updateMapMeta();
  updateDatasetMeta();
}

function updateMapMeta() {
  const map = selectedMap(datasetSelect.value, mapSelect.value);
  const isLoaded = loadedResources.has(mapResourceKey(datasetSelect.value, map.id));
  mapMeta.replaceChildren(
    metaCell(localize("解像度", "Resolution"), `${map.resolution.lon}° × ${map.resolution.lat}°`),
    metaCell(localize("地上解像度", "Ground resolution"), localize(map.note, `About ${Math.round(111000 * map.resolution.lat)} m/px north–south`)),
    metaCell(localize("データ容量", "Data size"), formatBytes(map.size)),
    metaCell(localize("読み込み", "Loaded"), isLoaded ? localize("完了", "Yes") : localize("未読込", "No"), isLoaded ? "is-loaded" : "is-pending"),
  );
}

function updateDatasetMeta() {
  const dataset = datasets[datasetSelect.value];
  const license = dataset.license;
  licenseLink.textContent = license.name;
  licenseLink.href = license.url;
  sourceLink.textContent = license.sourceName;
  sourceLink.href = license.sourceUrl;
  attribution.textContent = license.attribution;
  approval.textContent = license.approval ?? "";
  approval.hidden = license.approval === undefined;
  dataSpecLink.href = `${GITHUB_DOCS_ROOT}/data/${datasetSelect.value}/data-spec.md`;
  // The UI opens GitHub's Markdown view; the API still exposes the raw site NOTICE URL.
  noticeLink.href = `${GITHUB_DOCS_ROOT}/data/${datasetSelect.value}/NOTICE.md`;

  codemapList.replaceChildren();
  for (const name of dataset.codemaps) {
    codemapList.append(textElement("code", name));
  }

  samplePoints.replaceChildren(textElement("span", localize("サンプルを追加", "Add a sample")));
  for (const [index, sample] of dataset.samples.entries()) {
    const englishLabel = datasetSelect.value.startsWith("jp-")
      ? ["Tsudanuma", "Tokyo", "Kyoto"][index] ?? sample.label
      : mapConfigById.get(datasetSelect.value)?.samples[index]?.[0] ?? sample.label;
    const button = textElement("button", localize(sample.label, englishLabel));
    button.type = "button";
    button.dataset.sampleLon = sample.lon;
    button.dataset.sampleLat = sample.lat;
    samplePoints.append(button);
  }
}

function metaCell(label, value, className = "") {
  const container = document.createElement("div");
  const labelElement = document.createElement("span");
  const valueElement = document.createElement("strong");
  labelElement.textContent = label;
  valueElement.textContent = value;
  if (className) valueElement.className = className;
  container.append(labelElement, valueElement);
  return container;
}

function reverseGeocodePositions(geocoder, positions) {
  const startedAt = performance.now();
  const resolvedItems = positions.map((position) => (
    geocoder.reverseGeocode(position.lon, position.lat, { separator: " " })
  ));
  return {
    resolvedItems,
    elapsedMs: Math.round((performance.now() - startedAt) * 10) / 10,
  };
}

function createSearchHistoryEntry({ positions, datasetId, map, codemaps, resolvedItems, elapsedMs }) {
  if (positions.length === 1) {
    const resolved = resolvedItems[0];
    return {
      ...createHistoryEntryBase("single", elapsedMs),
      input: {
        position: { ...positions[0] },
        dataset: datasetId,
        map: map.id,
        codemaps: [...codemaps],
      },
      result: {
        ...positionToolResult(datasetId, map, codemaps, resolved),
        status: resolvedStatus(resolved),
      },
    };
  }

  return {
    ...createHistoryEntryBase("multiple", elapsedMs),
    input: {
      positions: positions.map((position) => ({ ...position })),
      dataset: datasetId,
      map: map.id,
      codemaps: [...codemaps],
    },
    result: positionsToolResult(datasetId, map, codemaps, resolvedItems),
    statuses: resolvedItems.map(resolvedStatus),
  };
}

function createHistoryEntryBase(type, elapsedMs) {
  return {
    type,
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    timestamp: new Date().toISOString(),
    elapsed_ms: elapsedMs,
  };
}

function resolvedStatus(resolved) {
  return resolved.found ? "found" : resolved.code === null ? "out_of_range" : "not_found";
}

function prependHistoryEntry(entry) {
  history = [entry, ...history].slice(0, 100);
  saveHistory();
  renderHistory();
}

function selectedMap(datasetId, mapId) {
  return datasets[datasetId].maps.find((map) => map.id === mapId) ?? datasets[datasetId].maps[0];
}

function renderHistory() {
  timeline.replaceChildren();
  historyCount.textContent = String(history.length);
  emptyState.hidden = history.length !== 0;
  timeline.hidden = history.length === 0;
  downloadJsonButton.disabled = history.length === 0;
  downloadCsvButton.disabled = history.length === 0;
  clearHistoryButton.disabled = history.length === 0;

  history.forEach((record, index) => timeline.append(createTimelineItem(record, history.length - index)));
}

function createTimelineItem(record, runNumber) {
  return isMultipleRecord(record)
    ? createMultipleTimelineItem(record, runNumber)
    : createSingleTimelineItem(record, runNumber);
}

function isMultipleRecord(record) {
  return record.type === "multiple" || Array.isArray(record.input?.positions);
}

function createSingleTimelineItem(record, runNumber) {
  const panel = document.createElement("div");
  panel.className = "io-panel";
  panel.append(createRequestBlock(record), createResultBlock(record));
  return createTimelineItemFrame(record, runNumber, localize("検索", "Search"), panel);
}

function createMultipleTimelineItem(record, runNumber) {
  const panel = document.createElement("div");
  panel.className = "io-panel multiple-io-panel";
  panel.append(createMultipleRequestBlock(record), createMultipleResultBlock(record));
  return createTimelineItemFrame(record, runNumber, localize("複数検索", "Batch search"), panel, "is-multiple");
}

function createTimelineItemFrame(record, runNumber, label, panel, className = "") {
  const item = document.createElement("li");
  item.className = `timeline-item ${className}`.trim();

  const dot = document.createElement("span");
  dot.className = "timeline-dot";
  dot.setAttribute("aria-hidden", "true");

  const summary = document.createElement("div");
  summary.className = "timeline-summary";
  const meta = document.createElement("div");
  meta.className = "timeline-meta";
  meta.append(
    textElement("span", `${label} ${String(runNumber).padStart(2, "0")}`, "run-number"),
    textElement("time", formatDate(record.timestamp), "timeline-time"),
  );
  summary.append(meta, textElement("span", `${record.elapsed_ms} ms`, "elapsed"));

  item.append(dot, summary, panel);
  return item;
}

function createRequestBlock(record) {
  const block = document.createElement("div");
  block.className = "request-block";
  block.append(textElement("div", localize("入力座標", "Input coordinates"), "request-title"));
  const coords = document.createElement("p");
  coords.className = "coordinates";
  coords.append(
    document.createTextNode(`lon  ${formatCoordinate(record.input.position.lon)}\n`),
    document.createTextNode(`lat  ${formatCoordinate(record.input.position.lat)}`),
  );
  coords.style.whiteSpace = "pre";
  block.append(coords, textElement("p", `${record.input.dataset} / ${record.input.map}`, "source-detail"));
  return block;
}

function createResultBlock(record) {
  const block = document.createElement("div");
  block.className = "result-block";
  block.append(textElement("div", localize("逆ジオコーディング結果", "Reverse geocoding result"), "result-title"));

  if (record.result.status !== "found") {
    const message = record.result.status === "out_of_range"
      ? localize("データの収録範囲外です", "Outside this dataset's coverage")
      : localize("地域情報がない地点です（海上など）", "No region information at this point (for example, at sea)");
    block.append(textElement("p", message, "not-found"));
  } else {
    const place = record.result.values["place-name-utf8"];
    block.append(textElement("p", place.name, "place-path"));
    const facts = document.createElement("div");
    facts.className = "result-facts";
    facts.append(fact(localize("地図内部コード", "Internal map code"), record.result.code));
    facts.append(fact(localize("解像度", "Resolution"), `${record.result.resolution.lon}°`));
    block.append(facts);
  }

  block.append(createJsonDetails(record.result));
  return block;
}

function createMultipleRequestBlock(record) {
  const positions = record.input.positions;
  const block = document.createElement("div");
  block.className = "request-block multiple-request-block";
  block.append(
    textElement("div", localize("入力座標", "Input coordinates"), "request-title"),
    textElement("p", localize(`${positions.length}地点`, `${positions.length} points`), "multiple-count"),
    textElement("p", localize("入力順を保持して一括検索", "Batch search in input order"), "multiple-caption"),
    textElement("p", `${record.input.dataset} / ${record.input.map}`, "source-detail"),
  );
  return block;
}

function createMultipleResultBlock(record) {
  const codes = Array.isArray(record.result.codes) ? record.result.codes : [];
  const inputCount = record.input.positions.length;
  const foundCount = codes.filter((code) => code !== null).length;
  const uniqueCodeCount = new Set(codes.filter((code) => code !== null)).size;
  const block = document.createElement("div");
  block.className = "result-block multiple-result-block";
  block.append(textElement("div", localize("逆ジオコーディング結果", "Reverse geocoding result"), "result-title"));
  block.append(textElement(
    "p",
    foundCount === inputCount
      ? localize(`全${inputCount}地点の地域情報を取得`, `Region information found for all ${inputCount} points`)
      : localize(`${inputCount}地点中${foundCount}地点の地域情報を取得`, `Region information found for ${foundCount} of ${inputCount} points`),
    "multiple-result-summary",
  ));
  const facts = document.createElement("div");
  facts.className = "result-facts multiple-facts";
  facts.append(fact(localize("入力数", "Input"), inputCount));
  facts.append(fact(localize("取得", "Found"), foundCount));
  facts.append(fact(localize("該当なし", "Not found"), inputCount - foundCount));
  facts.append(fact(localize("地域コード", "Region codes"), uniqueCodeCount));
  block.append(facts, createJsonDetails(record.result, localize("複数検索JSONを表示", "Show batch JSON")));
  return block;
}

function createJsonDetails(value, label = localize("JSONを表示", "Show JSON")) {
  const details = document.createElement("details");
  details.append(textElement("summary", label));
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(value, null, 2);
  details.append(pre);
  return details;
}

function fact(label, value) {
  const element = document.createElement("span");
  element.append(document.createTextNode(label), textElement("strong", String(value)));
  return element;
}

function textElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

async function ensureResourcesLoaded(datasetId, mapId, signal = undefined) {
  const dataset = datasets[datasetId];
  const map = selectedMap(datasetId, mapId);
  const geocoderKey = `${datasetId}:${map.id}`;
  if (geocoders.has(geocoderKey)) return geocoders.get(geocoderKey);

  await loadResources(dataset, [mapResource(datasetId, map), wordbookResource(datasetId, dataset)], signal);

  const geocoder = new Galuchat.ReverseGeocoder(
    mapReaders.get(mapResourceKey(datasetId, map.id)),
    wordbookReaders.get(datasetId),
  );
  geocoders.set(geocoderKey, geocoder);
  return geocoder;
}

async function ensureWordbookLoaded(datasetId, signal = undefined) {
  if (wordbookReaders.has(datasetId)) return wordbookReaders.get(datasetId);
  const dataset = datasets[datasetId];
  await loadResources(dataset, [wordbookResource(datasetId, dataset)], signal);
  return wordbookReaders.get(datasetId);
}

async function ensureMapLoaded(datasetId, map, signal = undefined) {
  const key = mapResourceKey(datasetId, map.id);
  if (mapReaders.has(key)) return mapReaders.get(key);
  const dataset = datasets[datasetId];
  await loadResources(dataset, [mapResource(datasetId, map)], signal);
  return mapReaders.get(key);
}

function mapResource(datasetId, map) {
  return {
    key: mapResourceKey(datasetId, map.id),
    label: `Map ${map.id}`,
    size: map.size,
    url: map.url,
    createReader: (bytes) => mapReaders.set(mapResourceKey(datasetId, map.id), Galuchat.GaluchatWGSMapSet3Reader.fromUint8Array(bytes)),
  };
}

function wordbookResource(datasetId, dataset) {
  return {
    key: `codemaps:${datasetId}`,
    label: `CodeMap ${dataset.codemaps.join(" + ")}`,
    size: dataset.wordbook.size,
    url: dataset.wordbook.url,
    createReader: (bytes) => wordbookReaders.set(datasetId, Galuchat.GaluchatGisWordBookReader.fromUint8Array(bytes)),
  };
}

async function loadResources(dataset, resources, signal) {
  const missing = resources.filter((resource) => !loadedResources.has(resource.key));

  if (missing.length > 0) {
    const totalBytes = missing.reduce((sum, resource) => sum + resource.size, 0);
    const labels = missing.map((resource) => resource.label).join(" / ");
    const progress = new Map(missing.map((resource) => [resource.key, 0]));
    loadPanel.hidden = false;
    loadResource.textContent = `${datasetTitle(dataset.id)} · ${labels} · ${formatBytes(totalBytes)}`;
    setLoadProgress(0);

    try {
      await Promise.all(missing.map(async (resource) => {
        const bytes = await fetchBinary(resource.url, (loaded) => {
          progress.set(resource.key, Math.min(loaded, resource.size));
          const received = [...progress.values()].reduce((sum, value) => sum + value, 0);
          setLoadProgress(Math.min(100, Math.round(received / totalBytes * 100)));
        }, signal);
        resource.createReader(bytes);
        loadedResources.add(resource.key);
      }));

      setLoadProgress(100);
      updateMapMeta();
    } finally {
      loadPanel.hidden = true;
    }
  }
}

async function fetchBinary(url, onProgress, signal = undefined) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  if (response.body === null) {
    const bytes = new Uint8Array(await response.arrayBuffer());
    onProgress(bytes.byteLength);
    return bytes;
  }

  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.byteLength;
    onProgress(received);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function mapResourceKey(datasetId, mapId) {
  return `map:${datasetId}:${mapId}`;
}

function setLoadProgress(percent) {
  loadProgressText.textContent = `${percent}%`;
  loadProgressBar.style.width = `${percent}%`;
}

function setBusy(state) {
  busyState = state;
  const busy = state !== null;
  for (const control of form.elements) control.disabled = busy;
  submitButton.classList.toggle("is-busy", busy);
  if (state === "loading") {
    submitButton.querySelector("span").textContent = localize("地図データを読み込み中…", "Loading map data…");
  } else if (state === "resolving") {
    submitButton.querySelector("span").textContent = localize("検索中…", "Searching…");
  } else {
    refreshCoordinateRows();
  }
}

function updateSubmitLabel(count = coordinateRows().length) {
  submitButton.querySelector("span").textContent = count === 0
    ? localize("座標を入力してください", "Enter coordinates")
    : count === 1
      ? localize("この位置を検索", "Search this point")
      : localize(`${count}地点を検索`, `Search ${count} points`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
}

const WEBMCP_TOOL_NAMES = Object.freeze([
  "galuchat_get_api_spec",
  "galuchat_resolve_position",
  "galuchat_resolve_positions",
  "galuchat_resolve_code",
  "galuchat_resolve_codes",
  "galuchat_get_code_map",
]);

const positionSchema = Object.freeze({
  type: "object",
  properties: {
    lon: { type: "number", minimum: -180, maximum: 180, description: "Longitude in degrees." },
    lat: { type: "number", minimum: -90, maximum: 90, description: "Latitude in degrees." },
  },
  required: ["lon", "lat"],
  additionalProperties: false,
});

const datasetSchema = Object.freeze({
  type: "string",
  enum: Object.keys(datasets),
  description: "Dataset ID returned by galuchat_get_api_spec.",
});

const codemapsSchema = Object.freeze({
  type: "array",
  items: { type: "string", enum: ["place-name-utf8"] },
  minItems: 1,
  maxItems: 1,
  uniqueItems: true,
  description: "CodeMaps to include in the result.",
});

const mapSchema = Object.freeze({
  type: "string",
  enum: [...new Set(Object.values(datasets).flatMap((dataset) => dataset.maps.map((map) => map.id)))],
  description: "Map ID for the selected dataset. The highest resolution is used when omitted.",
});

const boundsSchema = Object.freeze({
  type: "object",
  properties: {
    west: { type: "number", minimum: -180, maximum: 180 },
    south: { type: "number", minimum: -90, maximum: 90 },
    east: { type: "number", minimum: -180, maximum: 180 },
    north: { type: "number", minimum: -90, maximum: 90 },
  },
  required: ["west", "south", "east", "north"],
  additionalProperties: false,
  description: "WGS84 bounding rectangle. Bounds select pixel centers and do not represent pixel edges.",
});

const codeMapSizeSchema = Object.freeze({
  type: "object",
  properties: {
    width: { type: "integer", minimum: 1, maximum: SYSTEM_LIMITS.codeMapCellsPerRequest },
    height: { type: "integer", minimum: 1, maximum: SYSTEM_LIMITS.codeMapCellsPerRequest },
  },
  required: ["width", "height"],
  additionalProperties: false,
  description: "Code-map width and height in cells. Their product must not exceed the per-request cell limit.",
});

async function registerWebMcpTools() {
  if (document.modelContext?.registerTool === undefined) {
    setWebMcpStatus("WebMCP UNAVAILABLE", "is-unavailable", localize("このブラウザではWebMCPを利用できません", "WebMCP is unavailable in this browser"));
    return;
  }

  const tools = [
    {
      name: "galuchat_get_api_spec",
      title: "Galuchat API仕様を取得",
      description: "Call this first when the dataset or map is unclear. Returns available datasets, map resolutions, CodeMaps, licenses, tool names, and the semantics of Galuchat dataset-local map codes. When presenting data obtained from Galuchat, include the returned source attribution and license. Also include approval when present; for N03 this means the GSI approval statement and number. Never invent an approval number when none is supplied.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: (input, options) => executeWebMcpTool(() => buildApiSpec(), input, options),
    },
    {
      name: "galuchat_resolve_position",
      title: "1地点を逆ジオコーディング",
      description: "Reverse-geocodes one position specified by longitude and latitude. For multiple positions, use galuchat_resolve_positions to resolve them in a single call. The returned code is a dataset-local Galuchat map code, not an official administrative code. The result includes license information: cite its attribution and license when presenting the data, and also cite approval when present (required for N03). Never invent an approval number. The result is also added to the visible page history.",
      inputSchema: {
        type: "object",
        properties: { position: positionSchema, dataset: datasetSchema, codemaps: codemapsSchema, map: mapSchema },
        required: ["position", "dataset", "codemaps"],
        additionalProperties: false,
      },
      execute: (input, options) => executeWebMcpTool(() => resolvePositionTool(input, options?.signal), input, options),
    },
    {
      name: "galuchat_resolve_positions",
      title: "複数地点を逆ジオコーディング",
      description: `Reverse-geocodes up to ${SYSTEM_LIMITS.positionsPerRequest} positions specified by longitude and latitude in a single call. Use this tool when resolving multiple positions. Returned codes are dataset-local Galuchat map codes, not official administrative codes. The result includes license information: cite its attribution and license when presenting the data, and also cite approval when present (required for N03). Never invent an approval number. Input order and duplicate codes are preserved, and results are added to the visible page history.`,
      inputSchema: {
        type: "object",
        properties: {
          positions: {
            type: "array",
            items: positionSchema,
            minItems: 1,
            maxItems: SYSTEM_LIMITS.positionsPerRequest,
            description: "Positions to resolve together in one call, in the requested order.",
          },
          dataset: datasetSchema,
          codemaps: codemapsSchema,
          map: mapSchema,
        },
        required: ["positions", "dataset", "codemaps"],
        additionalProperties: false,
      },
      execute: (input, options) => executeWebMcpTool(() => resolvePositionsTool(input, options?.signal), input, options),
    },
    {
      name: "galuchat_resolve_code",
      title: "1地図内部コードの地名を取得",
      description: "Resolves one dataset-local Galuchat map code to CodeMap metadata. For multiple codes, use galuchat_resolve_codes to resolve them in a single call. Use a code returned by a resolve-position tool with the exact same dataset; it is not an official administrative code. Cite the result's attribution and license when presenting the data, and also cite approval when present (required for N03). Never invent an approval number.",
      inputSchema: {
        type: "object",
        properties: {
          code: {
            type: "integer",
            minimum: 1,
            maximum: 4294967295,
            description: "Dataset-local Galuchat map code returned by a resolve-position tool for the same dataset; not an official administrative code.",
          },
          dataset: datasetSchema,
          codemaps: codemapsSchema,
        },
        required: ["code", "dataset", "codemaps"],
        additionalProperties: false,
      },
      execute: (input, options) => executeWebMcpTool(() => resolveCodeTool(input, options?.signal), input, options),
    },
    {
      name: "galuchat_resolve_codes",
      title: "複数の地図内部コードから地名を取得",
      description: `Resolves up to ${SYSTEM_LIMITS.codesPerRequest} dataset-local Galuchat map codes to CodeMap metadata in a single call. Use this tool when resolving multiple codes. Codes must come from the exact same dataset and are not official administrative codes. Cite the result's attribution and license when presenting the data, and also cite approval when present (required for N03). Never invent an approval number. Input order and duplicates are preserved.`,
      inputSchema: {
        type: "object",
        properties: {
          codes: {
            type: "array",
            items: {
              type: "integer",
              minimum: 1,
              maximum: 4294967295,
              description: "Dataset-local Galuchat map code returned for the same dataset; not an official administrative code.",
            },
            minItems: 1,
            maxItems: SYSTEM_LIMITS.codesPerRequest,
            description: "Codes to resolve together in one call, in the requested order.",
          },
          dataset: datasetSchema,
          codemaps: codemapsSchema,
        },
        required: ["codes", "dataset", "codemaps"],
        additionalProperties: false,
      },
      execute: (input, options) => executeWebMcpTool(() => resolveCodesTool(input, options?.signal), input, options),
    },
    {
      name: "galuchat_get_code_map",
      title: "矩形領域の二次元コードマップを取得",
      description: `Returns a rectangular 2D array of dataset-local Galuchat map codes for up to ${SYSTEM_LIMITS.codeMapCellsPerRequest} cells. Specify either area, or base with size and an optional anchor. Rows run north to south and columns west to east. The result is rectangular, but it can be trimmed or masked into a polygon, circle, route buffer, or other irregular shape: first request the shape's bounding rectangle, then keep only cells whose center lies inside the desired geometry. Codes are not official administrative codes. Cite the result's attribution and license when presenting the data, and also cite approval when present (required for N03). Never invent an approval number.`,
      inputSchema: {
        type: "object",
        properties: {
          area: boundsSchema,
          base: positionSchema,
          size: codeMapSizeSchema,
          anchor: {
            type: "string",
            enum: ["northwest", "north", "northeast", "west", "center", "east", "southwest", "south", "southeast"],
            default: "center",
            description: "Position of base relative to the requested rectangle. Used only with base and size.",
          },
          dataset: datasetSchema,
          map: mapSchema,
        },
        required: ["dataset"],
        oneOf: [
          { required: ["area"] },
          { required: ["base", "size"] },
        ],
        additionalProperties: false,
      },
      execute: (input, options) => executeWebMcpTool(() => getCodeMapTool(input, options?.signal), input, options),
    },
  ];

  try {
    await Promise.all(tools.map((tool) => document.modelContext.registerTool(tool)));
    setWebMcpStatus("WebMCP READY", "is-ready", localize(`WebMCP対応: AIエージェントから${tools.length}個のツールを利用できます`, `WebMCP ready: AI agents can use ${tools.length} tools`));
  } catch (error) {
    setWebMcpStatus("WebMCP ERROR", "is-error", localize("WebMCPツールを登録できませんでした", "Could not register WebMCP tools"));
    console.error("Failed to register WebMCP tools", error);
  }
}

function setWebMcpStatus(message, className, detail = message) {
  webMcpStatus.textContent = message;
  webMcpStatus.className = `webmcp-status ${className}`;
  webMcpStatus.dataset.state = className;
  webMcpStatus.title = detail;
  webMcpStatus.setAttribute("aria-label", detail);
}

function refreshWebMcpStatus() {
  const state = webMcpStatus.dataset.state;
  if (state === "is-ready") {
    setWebMcpStatus("WebMCP READY", state, localize(`WebMCP対応: AIエージェントから${WEBMCP_TOOL_NAMES.length}個のツールを利用できます`, `WebMCP ready: AI agents can use ${WEBMCP_TOOL_NAMES.length} tools`));
  } else if (state === "is-unavailable") {
    setWebMcpStatus("WebMCP UNAVAILABLE", state, localize("このブラウザではWebMCPを利用できません", "WebMCP is unavailable in this browser"));
  } else if (state === "is-error") {
    setWebMcpStatus("WebMCP ERROR", state, localize("WebMCPを利用できません", "WebMCP is unavailable"));
  } else {
    setWebMcpStatus("WebMCP CHECKING", "is-checking", localize("WebMCPの対応状況を確認中", "Checking WebMCP support"));
  }
}

async function executeWebMcpTool(execute, input, options) {
  try {
    if (options?.signal?.aborted) throw options.signal.reason ?? new DOMException("Aborted", "AbortError");
    return await execute(input ?? {});
  } catch (error) {
    if (error?.name === "AbortError") throw error;
    if (!(error instanceof GaluchatToolError)) console.error("WebMCP tool execution failed", error);
    return {
      ok: false,
      error: {
        code: error instanceof GaluchatToolError ? error.code : "internal_error",
        message: error instanceof Error ? error.message : String(error),
        ...(error instanceof GaluchatToolError && error.details !== undefined ? { details: error.details } : {}),
      },
    };
  }
}

class GaluchatToolError extends Error {
  constructor(code, message, details = undefined) {
    super(message);
    this.name = "GaluchatToolError";
    this.code = code;
    this.details = details;
  }
}

function buildApiSpec() {
  return {
    ok: true,
    version: "galuchat-webmcp/0;GaluchatJavaScript/0.5.2",
    default_dataset_id: "jp-2026-mlit-go-jp-n03-adm",
    limits: { ...SYSTEM_LIMITS },
    datasets: Object.entries(datasets).map(([id, dataset]) => ({
      id,
      title: dataset.title,
      description: dataset.description,
      area: dataset.area,
      code_semantics: {
        type: "uint32",
        scope: "dataset",
        description: "Dataset-local dense Galuchat map code. It is not a municipality code, census code, ISO code, or another official identifier.",
      },
      maps: dataset.maps.map((map) => ({ id: map.id, resolution: map.resolution, size_bytes: map.size })),
      codemaps: [{
        name: "place-name-utf8",
        description: "地図コードに対応する地名階層",
        format: "GisWordBook/0",
        code_type: "uint32",
        text_encoding: "utf8",
        metadata: [
          { name: "path", type: "string[]", description: "上位地域から順に並べた地名階層" },
          { name: "name", type: "string", description: "空要素を除いて結合した表示名" },
        ],
        size_bytes: dataset.wordbook.size,
      }],
      license: serializeLicense(dataset.license),
    })),
    tools: [...WEBMCP_TOOL_NAMES],
  };
}

async function resolvePositionTool(input, signal) {
  const { datasetId, map, codemaps } = validateResolvePositionInput(input);
  const geocoder = await ensureResourcesLoaded(datasetId, map.id, signal);
  const execution = reverseGeocodePositions(geocoder, [input.position]);
  const record = createSearchHistoryEntry({
    positions: [input.position],
    datasetId,
    map,
    codemaps,
    ...execution,
  });
  addWebMcpHistory(record, datasetId, map.id, [input.position]);
  return positionToolResult(datasetId, map, codemaps, execution.resolvedItems[0]);
}

async function resolvePositionsTool(input, signal) {
  requireObject(input, "input");
  if (!Array.isArray(input.positions) || input.positions.length < 1 || input.positions.length > SYSTEM_LIMITS.positionsPerRequest) {
    throw new GaluchatToolError(
      "invalid_argument",
      `positions must contain between 1 and ${SYSTEM_LIMITS.positionsPerRequest} items`,
      { field: "positions" },
    );
  }
  input.positions.forEach((position, index) => validatePosition(position, `positions[${index}]`));
  const { datasetId, map, codemaps } = validateDatasetMapCodemaps(input);
  const geocoder = await ensureResourcesLoaded(datasetId, map.id, signal);
  const execution = reverseGeocodePositions(geocoder, input.positions);
  const record = createSearchHistoryEntry({
    positions: input.positions,
    datasetId,
    map,
    codemaps,
    ...execution,
  });
  addWebMcpHistory(record, datasetId, map.id, input.positions);
  return record.result;
}

async function resolveCodeTool(input, signal) {
  requireObject(input, "input");
  validateCode(input.code, "code");
  const { datasetId, codemaps } = validateDatasetAndCodemaps(input);
  const wordbook = await ensureWordbookLoaded(datasetId, signal);
  return {
    dataset: datasetId,
    code: input.code,
    values: codeValues(wordbook, input.code, codemaps),
    license: datasetLicense(datasetId),
  };
}

async function resolveCodesTool(input, signal) {
  requireObject(input, "input");
  if (!Array.isArray(input.codes) || input.codes.length < 1 || input.codes.length > SYSTEM_LIMITS.codesPerRequest) {
    throw new GaluchatToolError(
      "invalid_argument",
      `codes must contain between 1 and ${SYSTEM_LIMITS.codesPerRequest} items`,
      { field: "codes" },
    );
  }
  input.codes.forEach((code, index) => validateCode(code, `codes[${index}]`));
  const { datasetId, codemaps } = validateDatasetAndCodemaps(input);
  const wordbook = await ensureWordbookLoaded(datasetId, signal);
  const values = Object.fromEntries(codemaps.map((codemap) => [codemap, {}]));
  for (const code of new Set(input.codes)) {
    const resolved = codeValues(wordbook, code, codemaps);
    for (const codemap of codemaps) values[codemap][String(code)] = resolved[codemap];
  }
  return { dataset: datasetId, codes: [...input.codes], values, license: datasetLicense(datasetId) };
}

async function getCodeMapTool(input, signal) {
  const { datasetId, map, rect } = validateGetCodeMapInput(input);
  const reader = await ensureMapLoaded(datasetId, map, signal);
  const raster = reader.readWgsRect(rect);
  const codes = [];
  for (let outputY = 0; outputY < rect.height; outputY += 1) {
    const sourceY = rect.height - 1 - outputY;
    const row = [];
    for (let x = 0; x < rect.width; x += 1) row.push(raster.get(x, sourceY));
    codes.push(row);
  }
  return {
    dataset: datasetId,
    map: map.id,
    resolution: { ...map.resolution },
    area: {
      west: rect.x / reader.unitInvX,
      south: rect.y / reader.unitInvY,
      east: (rect.x + rect.width) / reader.unitInvX,
      north: (rect.y + rect.height) / reader.unitInvY,
    },
    width: rect.width,
    height: rect.height,
    codes,
    license: datasetLicense(datasetId),
    trimming: {
      possible: true,
      description: "For a polygon, circle, route buffer, or another irregular shape, request its bounding rectangle and keep only cells whose center lies inside the desired geometry.",
      cell_centers: "Column x is west + x * resolution.lon. Row y is north - (y + 1) * resolution.lat.",
    },
  };
}

function validateGetCodeMapInput(input) {
  requireObject(input, "input");
  if (typeof input.dataset !== "string" || datasets[input.dataset] === undefined) {
    throw new GaluchatToolError("dataset_not_found", `dataset is not available: ${String(input.dataset)}`, { field: "dataset" });
  }
  const map = selectToolMap(input.dataset, input.map);
  const hasArea = input.area !== undefined;
  const hasBase = input.base !== undefined;
  const hasSize = input.size !== undefined;
  if (hasArea === (hasBase || hasSize) || hasBase !== hasSize) {
    throw new GaluchatToolError(
      "invalid_argument",
      "specify either area, or base together with size",
      { fields: ["area", "base", "size"] },
    );
  }
  if (hasArea && input.anchor !== undefined) {
    throw new GaluchatToolError("invalid_argument", "anchor can only be used with base and size", { field: "anchor" });
  }

  let rect;
  if (hasArea) {
    rect = rectFromArea(input.area, map);
  } else {
    validatePosition(input.base, "base");
    validateCodeMapSize(input.size);
    rect = rectFromBase(input.base, input.size, input.anchor ?? "center", map);
  }
  validateCodeMapCellCount(rect.width, rect.height);
  return { datasetId: input.dataset, map, rect };
}

function rectFromArea(area, map) {
  requireObject(area, "area");
  for (const field of ["west", "south", "east", "north"]) {
    if (!Number.isFinite(area[field])) {
      throw new GaluchatToolError("invalid_argument", `area.${field} must be a finite number`, { field: `area.${field}` });
    }
  }
  if (area.west < -180 || area.east > 180 || area.south < -90 || area.north > 90
    || area.west >= area.east || area.south >= area.north) {
    throw new GaluchatToolError(
      "invalid_argument",
      "area must satisfy -180 <= west < east <= 180 and -90 <= south < north <= 90",
      { field: "area" },
    );
  }
  const left = Math.round(area.west / map.resolution.lon);
  const bottom = Math.round(area.south / map.resolution.lat);
  const right = Math.round(area.east / map.resolution.lon);
  const top = Math.round(area.north / map.resolution.lat);
  if (left >= right || bottom >= top) {
    throw new GaluchatToolError(
      "invalid_argument",
      "area does not contain a cell-center interval at the selected map resolution",
      { field: "area", resolution: map.resolution },
    );
  }
  return { x: left, y: bottom, width: right - left, height: top - bottom };
}

function validateCodeMapSize(size) {
  requireObject(size, "size");
  for (const field of ["width", "height"]) {
    if (!Number.isInteger(size[field]) || size[field] < 1) {
      throw new GaluchatToolError("invalid_argument", `size.${field} must be a positive integer`, { field: `size.${field}` });
    }
  }
}

function rectFromBase(base, size, anchor, map) {
  const anchors = new Set(["northwest", "north", "northeast", "west", "center", "east", "southwest", "south", "southeast"]);
  if (!anchors.has(anchor)) {
    throw new GaluchatToolError("invalid_argument", `unsupported anchor: ${String(anchor)}`, { field: "anchor" });
  }
  const baseX = Math.round(base.lon / map.resolution.lon);
  const baseY = Math.round(base.lat / map.resolution.lat);
  const horizontal = anchor.includes("west") ? "west" : anchor.includes("east") ? "east" : "center";
  const vertical = anchor.includes("north") ? "north" : anchor.includes("south") ? "south" : "center";
  const x = horizontal === "west"
    ? baseX
    : horizontal === "east"
      ? baseX - size.width
      : baseX - Math.floor(size.width / 2);
  const y = vertical === "south"
    ? baseY
    : vertical === "north"
      ? baseY - size.height
      : baseY - Math.floor(size.height / 2);
  return { x, y, width: size.width, height: size.height };
}

function validateCodeMapCellCount(width, height) {
  const cells = width * height;
  if (!Number.isSafeInteger(cells) || cells > SYSTEM_LIMITS.codeMapCellsPerRequest) {
    throw new GaluchatToolError(
      "limit_exceeded",
      `code map must contain at most ${SYSTEM_LIMITS.codeMapCellsPerRequest} cells`,
      { width, height, cells, limit: SYSTEM_LIMITS.codeMapCellsPerRequest },
    );
  }
}

function validateResolvePositionInput(input) {
  requireObject(input, "input");
  validatePosition(input.position, "position");
  return validateDatasetMapCodemaps(input);
}

function validateDatasetMapCodemaps(input) {
  const validated = validateDatasetAndCodemaps(input);
  const map = selectToolMap(validated.datasetId, input.map);
  return { ...validated, map };
}

function validateDatasetAndCodemaps(input) {
  if (typeof input.dataset !== "string" || datasets[input.dataset] === undefined) {
    throw new GaluchatToolError("dataset_not_found", `dataset is not available: ${String(input.dataset)}`, { field: "dataset" });
  }
  if (!Array.isArray(input.codemaps) || input.codemaps.length === 0) {
    throw new GaluchatToolError("invalid_argument", "codemaps must be a non-empty array", { field: "codemaps" });
  }
  const dataset = datasets[input.dataset];
  for (const codemap of input.codemaps) {
    if (!dataset.codemaps.includes(codemap)) {
      throw new GaluchatToolError("codemap_not_found", `CodeMap is not available for ${input.dataset}: ${String(codemap)}`, { field: "codemaps" });
    }
  }
  return { datasetId: input.dataset, dataset, codemaps: [...new Set(input.codemaps)] };
}

function selectToolMap(datasetId, mapId) {
  const dataset = datasets[datasetId];
  if (mapId === undefined) {
    return [...dataset.maps].sort((a, b) => a.resolution.lon - b.resolution.lon)[0];
  }
  const map = dataset.maps.find((candidate) => candidate.id === mapId);
  if (map === undefined) {
    throw new GaluchatToolError("map_not_found", `map is not available for ${datasetId}: ${String(mapId)}`, { field: "map" });
  }
  return map;
}

function validatePosition(position, field) {
  requireObject(position, field);
  if (!Number.isFinite(position.lon) || position.lon < -180 || position.lon > 180) {
    throw new GaluchatToolError("invalid_argument", `${field}.lon must be between -180 and 180`, { field: `${field}.lon` });
  }
  if (!Number.isFinite(position.lat) || position.lat < -90 || position.lat > 90) {
    throw new GaluchatToolError("invalid_argument", `${field}.lat must be between -90 and 90`, { field: `${field}.lat` });
  }
}

function validateCode(code, field) {
  if (!Number.isInteger(code) || code < 1 || code > 4294967295) {
    throw new GaluchatToolError("invalid_argument", `${field} must be an unsigned 32-bit integer greater than zero`, { field });
  }
}

function requireObject(value, field) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new GaluchatToolError("invalid_argument", `${field} must be an object`, { field });
  }
}

function positionToolResult(datasetId, map, codemaps, resolved) {
  return {
    dataset: datasetId,
    map: map.id,
    resolution: map.resolution,
    code: resolved.found ? resolved.code : null,
    values: Object.fromEntries(codemaps.map((codemap) => [codemap, resolved.found ? placeValue(resolved.path) : null])),
    license: datasetLicense(datasetId),
  };
}

function positionsToolResult(datasetId, map, codemaps, resolvedItems) {
  const codes = resolvedItems.map((resolved) => resolved.found ? resolved.code : null);
  return {
    dataset: datasetId,
    map: map.id,
    resolution: map.resolution,
    codes,
    values: valuesByCodes(codemaps, codes, resolvedItems),
    license: datasetLicense(datasetId),
  };
}

function valuesByCodes(codemaps, codes, resolvedItems) {
  const values = Object.fromEntries(codemaps.map((codemap) => [codemap, {}]));
  for (let index = 0; index < codes.length; index += 1) {
    const code = codes[index];
    if (code === null || Object.hasOwn(values[codemaps[0]], String(code))) continue;
    for (const codemap of codemaps) values[codemap][String(code)] = placeValue(resolvedItems[index].path);
  }
  return values;
}

function codeValues(wordbook, code, codemaps) {
  let path = null;
  try {
    path = wordbook.readStringSetByCode(code);
  } catch (error) {
    if (!(error instanceof RangeError)) throw error;
  }
  return Object.fromEntries(codemaps.map((codemap) => [codemap, path === null ? null : placeValue(path)]));
}

function placeValue(path) {
  return { path: [...path], name: path.filter((component) => component !== "").join(" ") };
}

function addWebMcpHistory(record, datasetId, mapId, positions) {
  prependHistoryEntry(record);
  datasetSelect.value = datasetId;
  updateMapOptions(mapId);
  setCoordinateRows(positions);
  coordinateError.textContent = "";
  updateDuplicateNotice(positions);
  showToast(positions.length === 1
    ? localize("WebMCPから検索しました", "Searched via WebMCP")
    : localize(`WebMCPから${positions.length}地点を検索しました`, `Searched ${positions.length} points via WebMCP`));
}

function serializeLicense(license) {
  return {
    name: license.name,
    url: license.url,
    source_name: license.sourceName,
    source_url: license.sourceUrl,
    attribution: license.attribution,
    ...(license.approval === undefined ? {} : { approval: license.approval }),
    notice_url: new URL(license.noticeUrl, location.href).href,
  };
}

function datasetLicense(datasetId) {
  return serializeLicense(datasets[datasetId].license);
}

function loadHistory() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // The UI remains usable when storage is unavailable.
  }
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportedDatasets() {
  const ids = [...new Set(history.map((record) => record.input.dataset))];
  return ids.map((id) => {
    const dataset = datasets[id];
    const license = history.find((record) => record.input.dataset === id)?.result?.license
      ?? (dataset ? serializeLicense(dataset.license) : null);
    return {
      id,
      title: dataset?.title ?? id,
      license,
    };
  });
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat(localize("ja-JP", "en-US"), {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(value));
}

function formatCoordinate(value) {
  return Number(value).toFixed(4);
}

function formatCoordinateInput(value) {
  if (value === "" || value === null || value === undefined) return "";
  const number = Number(value);
  return Number.isFinite(number) ? String(roundCoordinate(number)) : String(value);
}

function roundCoordinate(value) {
  const number = Number(value);
  return Math.sign(number) * Math.round(Math.abs(number) * 10000) / 10000;
}

function dateStamp() {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1800);
}
