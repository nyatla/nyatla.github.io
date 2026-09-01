const DATA_ROOT = "../../data/jp-estat-r2ka-2020";
const DEFAULT_CENTER = Object.freeze({ lon: 140.0206, lat: 35.6911 });
const MAPSET_ID = "10000";
const MAPSET_URL = `${DATA_ROOT}/estat-r2ka-jgd2011-2020-grid-8192-10000.wgsmapset.glc`;
const WORDBOOK_URL = `${DATA_ROOT}/estat-r2ka-jgd2011-2020.giswordbook`;
const DEFAULT_LEVEL_INDEX = 2;
const ZOOM_LEVELS = Object.freeze([
  { id: "10000", mapset: MAPSET_ID, scale: 1 },
  { id: "10000 / 2", mapset: MAPSET_ID, scale: 2 },
  { id: "10000 / 4", mapset: MAPSET_ID, scale: 4 },
]);

const shell = document.getElementById("map-shell");
const placeName = document.getElementById("place-name");
const zoomLabel = document.getElementById("zoom-label");
const zoomOutButton = document.getElementById("zoom-out");
const zoomInButton = document.getElementById("zoom-in");
const homeButton = document.getElementById("home");
const locationButtons = [...document.querySelectorAll(".location")];
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
  const [mapsetBytes, wordbookBytes] = await Promise.all([
    fetchBinary(MAPSET_URL),
    fetchBinary(WORDBOOK_URL),
  ]);
  const mapsetReader = Galuchat.GaluchatWGSMapSet3Reader.fromUint8Array(mapsetBytes);
  const wordbookReader = Galuchat.GaluchatGisWordBookReader.fromUint8Array(wordbookBytes);
  source = new Galuchat.MultiZoomMapSource({
    displayReaders: { [MAPSET_ID]: mapsetReader },
    resolverReader: mapsetReader,
    wordbookReader,
    levels: ZOOM_LEVELS,
    levelIndex: DEFAULT_LEVEL_INDEX,
    padding: 96,
  });

  interactiveMap = new Galuchat.GaluchatInteractiveMap(shell, source, {
    center: source.snapCenter(DEFAULT_CENTER, DEFAULT_LEVEL_INDEX),
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
  homeButton.addEventListener("click", () => moveTo(DEFAULT_CENTER));
  for (const button of locationButtons) {
    button.addEventListener("click", () => {
      moveTo({ lon: Number(button.dataset.lon), lat: Number(button.dataset.lat) });
    });
  }
  interactiveMap.canvas.addEventListener(
    "wheel",
    (event) => interactiveMap.zoomByWheel(event),
    { passive: false },
  );
  interactiveMap.canvas.addEventListener("dblclick", (event) => {
    event.preventDefault();
    interactiveMap.zoomIn(interactiveMap.eventToCanvasPoint(event));
  });

  for (const button of [zoomOutButton, zoomInButton, homeButton, ...locationButtons]) {
    button.disabled = false;
  }
  updateControls();
  await interactiveMap.render();
  runtimeState.classList.add("is-ready");
  runtimeState.textContent = "LOCAL READY · NO FURTHER NETWORK";
}

function moveTo(center) {
  source.setZoomLevelIndex(DEFAULT_LEVEL_INDEX);
  interactiveMap.setView({
    center: source.snapCenter(center, DEFAULT_LEVEL_INDEX),
    selectedCode: null,
  });
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
