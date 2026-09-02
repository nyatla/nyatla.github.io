const DATA_ROOT = "../data/jp-admin-n03-2026";
const DEFAULT_CENTER = Object.freeze({ lon: 140.0267, lat: 35.6810 });
const RESOLVER_MAPSET_ID = "10000";
const MAPSETS = Object.freeze({
  "10000": `${DATA_ROOT}/N03-20260101-grid-8192-10000.remap.wgsmapset.glc`,
  "1000": `${DATA_ROOT}/N03-20260101-grid-4096-1000.remap.wgsmapset.glc`,
  "100": `${DATA_ROOT}/N03-20260101-grid-512-100.remap.wgsmapset.glc`,
});
const ZOOM_LEVELS = Object.freeze([
  { id: "10000", mapset: "10000", scale: 1 },
  { id: "10000 / 2", mapset: "10000", scale: 2 },
  { id: "10000 / 4", mapset: "10000", scale: 4 },
  { id: "1000", mapset: "1000", scale: 1 },
  { id: "1000 / 2", mapset: "1000", scale: 2 },
  { id: "1000 / 4", mapset: "1000", scale: 4 },
  { id: "100", mapset: "100", scale: 1 },
  { id: "100 / 2", mapset: "100", scale: 2 },
  { id: "100 / 4", mapset: "100", scale: 4 },
]);

const shell = document.getElementById("map-shell");
const placeName = document.getElementById("place-name");
const zoomLabel = document.getElementById("zoom-label");
const zoomOutButton = document.getElementById("zoom-out");
const zoomInButton = document.getElementById("zoom-in");
const homeButton = document.getElementById("home");
const runtimeState = document.getElementById("runtime-state");

let interactiveMap = null;
let source = null;
let fatalError = false;

window.addEventListener("machml:localechange", () => {
  if (fatalError) {
    showFatalMessage();
  } else {
    updateControls();
  }
});

main().catch(showFatalError);

async function main() {
  const [displayReaders, wordbookBytes] = await Promise.all([
    loadMapsets(MAPSETS),
    fetchBinary(`${DATA_ROOT}/N03-20260101.giswordbook`),
  ]);
  const wordbookReader = Galuchat.GaluchatGisWordBookReader.fromUint8Array(wordbookBytes);
  source = new Galuchat.MultiZoomMapSource({
    displayReaders,
    resolverReader: displayReaders[RESOLVER_MAPSET_ID],
    wordbookReader,
    levels: ZOOM_LEVELS,
    padding: 160,
  });

  interactiveMap = new Galuchat.GaluchatInteractiveMap(shell, source, {
    center: source.snapCenter(DEFAULT_CENTER),
    maxWidth: 640,
    maxHeight: 480,
    controls: { status: false },
  });
  interactiveMap.addEventListener("placechange", (event) => {
    placeName.classList.remove("error");
    placeName.textContent = event.detail.name;
  });
  interactiveMap.addEventListener("maprender", updateControls);
  interactiveMap.addEventListener("zoomchange", updateControls);

  zoomOutButton.addEventListener("click", () => interactiveMap.zoomOut());
  zoomInButton.addEventListener("click", () => interactiveMap.zoomIn());
  homeButton.addEventListener("click", () => {
    source.setZoomLevelIndex(3);
    interactiveMap.setView({
      center: source.snapCenter(DEFAULT_CENTER, 3),
      selectedCode: null,
    });
  });
  interactiveMap.canvas.addEventListener(
    "wheel",
    (event) => interactiveMap.zoomByWheel(event),
    { passive: false },
  );
  interactiveMap.canvas.addEventListener("dblclick", (event) => {
    event.preventDefault();
    interactiveMap.zoomIn(interactiveMap.eventToCanvasPoint(event));
  });

  source.setZoomLevelIndex(3);
  for (const button of [zoomOutButton, zoomInButton, homeButton]) {
    button.disabled = false;
  }
  updateControls();
  await interactiveMap.render();
  runtimeState.classList.add("is-ready");
  runtimeState.textContent = "LOCAL READY · NO FURTHER NETWORK";
}

function updateControls() {
  if (interactiveMap === null || source === null) {
    return;
  }
  zoomInButton.disabled = !interactiveMap.canZoomIn();
  zoomOutButton.disabled = !interactiveMap.canZoomOut();
  const level = source.currentLevel;
  const effectiveUnitInv = source.unitInvX / source.currentPixelScale;
  GaluchatLocale.replaceText(
    zoomLabel,
    `表示: ${level.id} · 約${Math.round(effectiveUnitInv)} px/度`,
    `Display: ${level.id} · approximately ${Math.round(effectiveUnitInv)} px/degree`,
  );
}

async function loadMapsets(mapsets) {
  const entries = await Promise.all(
    Object.entries(mapsets).map(async ([id, url]) => {
      const bytes = await fetchBinary(url);
      return [id, Galuchat.GaluchatWGSMapSet3Reader.fromUint8Array(bytes)];
    }),
  );
  return Object.fromEntries(entries);
}

async function fetchBinary(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

function showFatalError(error) {
  fatalError = true;
  placeName.classList.add("error");
  runtimeState.classList.add("is-error");
  runtimeState.textContent = "LOAD ERROR";
  showFatalMessage();
  console.error(error);
}

function showFatalMessage() {
  GaluchatLocale.replaceText(placeName, "データの読み込みに失敗しました", "The map data could not be loaded");
  GaluchatLocale.replaceText(zoomLabel, "ページを再読み込みしてください", "Please reload the page");
}
