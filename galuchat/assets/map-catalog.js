"use strict";

const datasets = [
  { id: "JAPAN · N03 2026 · 3 RESOLUTIONS", href: "./ksj-n03/", title: ["日本の行政区域", "Administrative areas of Japan"], description: ["都道府県・市区町村の境界を表示し、地点から所属する行政区域を調べます。", "Display prefecture and municipality boundaries, and resolve the administrative area containing a point."] },
  { id: "JAPAN · e-STAT 2020 · 1 RESOLUTION", href: "./estat-r2ka/", title: ["日本の町丁・字等境界", "Japanese town-block and small-area boundaries"], description: ["町丁・字等と下位地区の境界を表示し、地点から小地域を調べます。", "Display town-block and lower-area boundaries, and resolve the small area containing a point."] },
  { id: "TAIWAN · NLSC 2026 · 3 RESOLUTIONS", href: "./nlsc-village/", title: ["台湾の村里界", "Village boundaries of Taiwan"], description: ["縣市・鄉鎮市區・村里の境界を表示し、地点から村里まで調べます。", "Display county or city, township or district, and village boundaries, and resolve a point to its village."] },
  { id: "UNITED KINGDOM · ONS 2025 · 3 RESOLUTIONS", href: "./ons-lad/", title: ["英国の行政区域", "Local authority districts of the UK"], description: ["構成国、County、Local Authority Districtを表示し、地点から行政区域を調べます。", "Display constituent countries, counties, and Local Authority Districts, and resolve a point to its area."] },
  { id: "UNITED STATES · CENSUS 2025 · 3 RESOLUTIONS", href: "./us-census-county/", title: ["米国のCounty境界", "U.S. county boundaries"], description: ["州とCounty、Parish、Boroughなどを表示し、地点から所属区域を調べます。", "Display states and counties, parishes, boroughs, and equivalents, and resolve a point to its area."] },
  { id: "WORLD · GEOBOUNDARIES CGAZ · 2 RESOLUTIONS", href: "./geoboundaries-cgaz/", title: ["世界の行政区域", "Administrative areas worldwide"], description: ["各国で利用可能な最詳細の行政区域を表示し、地点から所属区域を調べます。", "Display the most detailed available administrative area in each country, and resolve a point to its area."] },
];

const catalog = document.getElementById("map-catalog");

for (const dataset of datasets) {
  const card = document.createElement("a");
  card.className = "map-link";
  card.href = dataset.href;
  const id = document.createElement("span");
  id.className = "source-id";
  id.textContent = dataset.id;
  const title = document.createElement("h3");
  title.append(window.GaluchatLocale.text(...dataset.title));
  const description = document.createElement("p");
  description.append(window.GaluchatLocale.text(...dataset.description));
  const open = document.createElement("span");
  open.className = "open";
  open.append(window.GaluchatLocale.text("地図を開く →", "Open map →"));
  card.append(id, title, description, open);
  catalog.append(card);
}
