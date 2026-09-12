"use strict";

const datasets = [
  { id: "JAPAN · N03 2026 · 3 RESOLUTIONS", href: "../ksj-n03/", title: ["日本の行政区域", "Administrative areas of Japan"], description: ["都道府県・市区町村の境界を表示し、地点から所属する行政区域を調べます。", "Display prefecture and municipality boundaries, and resolve the administrative area containing a point."], coverage: ["日本全国", "Japan"], hierarchy: ["都道府県 / 市区町村", "Prefecture / municipality"], source: "国土数値情報 行政区域データ（N03）", sourceUrl: "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03.html", resolution: "100 / 1,000 / 10,000 px/degree" },
  { id: "JAPAN · e-STAT 2020 · 1 RESOLUTION", href: "../estat-r2ka/", title: ["日本の町丁・字等境界", "Japanese town-block and small-area boundaries"], description: ["町丁・字等と下位地区の境界を表示し、地点から小地域を調べます。", "Display town-block and lower-area boundaries, and resolve the small area containing a point."], coverage: ["日本全国", "Japan"], hierarchy: ["都道府県 / 市区町村 / 町丁・字等 / 下位地区", "Prefecture / municipality / small area / lower area"], source: "令和2年国勢調査 町丁・字等境界データ", sourceUrl: "https://www.e-stat.go.jp/gis/statmap-search?page=1&type=2&aggregateUnitForBoundary=A&toukeiCode=00200521&toukeiYear=2020&serveyId=A002005212020&coordsys=1&format=shape&datum=2011", resolution: "10,000 px/degree" },
  { id: "TAIWAN · NLSC 2026 · 3 RESOLUTIONS", href: "../nlsc-village/", title: ["台湾の村里界", "Village boundaries of Taiwan"], description: ["縣市・鄉鎮市區・村里の境界を表示し、地点から村里まで調べます。", "Display county or city, township or district, and village boundaries, and resolve a point to its village."], coverage: ["台湾", "Taiwan"], hierarchy: ["縣市 / 鄉鎮市區 / 村里", "County or city / township or district / village"], source: "內政部國土測繪中心 村里界圖", sourceUrl: "https://data.gov.tw/dataset/7438", resolution: "100 / 1,000 / 10,000 px/degree" },
  { id: "UNITED KINGDOM · ONS 2025 · 3 RESOLUTIONS", href: "../ons-lad/", title: ["英国の行政区域", "Local authority districts of the UK"], description: ["構成国、County、Local Authority Districtを表示し、地点から行政区域を調べます。", "Display constituent countries, counties, and Local Authority Districts, and resolve a point to its area."], coverage: ["イングランド、スコットランド、ウェールズ、北アイルランド", "England, Scotland, Wales, and Northern Ireland"], hierarchy: ["構成国 / County / Local Authority District", "Constituent country / county / Local Authority District"], source: "ONS Local Authority Districts (December 2025) Boundaries UK BFC", sourceUrl: "https://www.data.gov.uk/dataset/aa5a9ccf-fbea-43cb-81cc-fdc04d89f128/local-authority-districts-december-2025-boundaries-uk-bfc", resolution: "100 / 1,000 / 10,000 px/degree" },
  { id: "UNITED STATES · CENSUS 2025 · 3 RESOLUTIONS", href: "../us-census-county/", title: ["米国のCounty境界", "U.S. county boundaries"], description: ["州とCounty、Parish、Boroughなどを表示し、地点から所属区域を調べます。", "Display states and counties, parishes, boroughs, and equivalents, and resolve a point to its area."], coverage: ["50州・District of Columbia", "50 states and the District of Columbia"], hierarchy: ["州 / County・Parish・Borough等", "State / county, parish, borough, and equivalents"], source: "U.S. Census Bureau 2025 TIGER/Line®", sourceUrl: "https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2025.html", resolution: "100 / 1,000 / 10,000 px/degree" },
  { id: "WORLD · GEOBOUNDARIES CGAZ · 2 RESOLUTIONS", href: "../geoboundaries-cgaz/", title: ["世界の行政区域", "Administrative areas worldwide"], description: ["各国で利用可能な最詳細の行政区域を表示し、地点から所属区域を調べます。", "Display the most detailed available administrative area in each country, and resolve a point to its area."], coverage: ["世界", "Worldwide"], hierarchy: ["国 / 行政区域", "Country / administrative area"], source: "geoBoundaries CGAZ", sourceUrl: "https://www.geoboundaries.org/globalDownloads.html", resolution: "100 / 1,000 px/degree" },
];

const labels = { coverage: ["対象範囲", "Coverage"], hierarchy: ["地名階層", "Name hierarchy"], source: ["原典データ", "Source data"], resolution: ["WGSMapSet/3", "WGSMapSet/3"] };
const catalog = document.getElementById("map-catalog");

function localizedText([ja, en]) { return window.GaluchatLocale.text(ja, en); }

function appendMetadata(list, label, value) {
  const term = document.createElement("dt");
  term.append(localizedText(label));
  const description = document.createElement("dd");
  if (value instanceof Node) description.append(value); else description.textContent = value;
  list.append(term, description);
}

for (const dataset of datasets) {
  const card = document.createElement("article");
  card.className = "catalog-card";
  const id = document.createElement("span");
  id.className = "catalog-id";
  id.textContent = dataset.id;
  const title = document.createElement("h3");
  title.append(localizedText(dataset.title));
  const description = document.createElement("p");
  description.append(localizedText(dataset.description));
  const metadata = document.createElement("dl");
  metadata.className = "catalog-meta";
  appendMetadata(metadata, labels.coverage, localizedText(dataset.coverage));
  appendMetadata(metadata, labels.hierarchy, localizedText(dataset.hierarchy));
  const source = document.createElement("a");
  source.href = dataset.sourceUrl;
  source.textContent = dataset.source;
  appendMetadata(metadata, labels.source, source);
  appendMetadata(metadata, labels.resolution, dataset.resolution);
  const open = document.createElement("a");
  open.className = "catalog-open";
  open.href = dataset.href;
  open.append(localizedText(["地図を開く →", "Open map →"]));
  card.append(id, title, description, metadata, open);
  catalog.append(card);
}
