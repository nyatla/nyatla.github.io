"use strict";

// Keep revisionless dataset IDs usable in existing map URLs.
window.GaluchatDatasetAliases = Object.fromEntries(
  window.GaluchatMapDatasets.map((dataset) => [dataset.id.replace(/-rev\d+$/, ""), dataset.id]),
);

// Country order is shared by the map and reverse-geocoding selectors.
window.GaluchatDatasetGroups = [
  ["jp", "日本", "Japan", /^(?:Japan|Japanese) /],
  ["tw", "台湾", "Taiwan", /^Taiwan /],
  ["gb", "英国", "United Kingdom", /^UK /],
  ["us", "米国", "United States", /^U\.S\. /],
  ["ca", "カナダ", "Canada", /^Canada /],
  ["au", "オーストラリア", "Australia", /^Australia /],
  ["de", "ドイツ", "Germany", /^Germany /],
  ["fr", "フランス", "France", /^France /],
  ["nl", "オランダ", "Netherlands", /^Netherlands /],
  ["es", "スペイン", "Spain", /^Spanish /],
  ["nz", "ニュージーランド", "New Zealand", /^New Zealand /],
  ["kr", "韓国", "South Korea", /^South Korean /],
  ["at", "オーストリア", "Austria", /^Austrian /],
  ["be", "ベルギー", "Belgium", /^Belgian /],
  ["ch", "スイス", "Switzerland", /^Swiss /],
  ["cz", "チェコ", "Czechia", /^Czech /],
  ["dk", "デンマーク", "Denmark", /^Danish /],
  ["ee", "エストニア", "Estonia", /^Estonian /],
  ["fi", "フィンランド", "Finland", /^Finnish /],
  ["hr", "クロアチア", "Croatia", /^Croatian /],
  ["it", "イタリア", "Italy", /^Italian /],
  ["lt", "リトアニア", "Lithuania", /^Lithuanian /],
  ["lv", "ラトビア", "Latvia", /^Latvian /],
  ["ro", "ルーマニア", "Romania", /^Romanian /],
  ["se", "スウェーデン", "Sweden", /^Swedish /],
  ["ci", "コートジボワール", "Côte d’Ivoire", /^Côte d’Ivoire /],
  ["cy", "キプロス", "Cyprus", /^Cyprus /],
  ["qa", "カタール", "Qatar", /^Qatar /],
  ["sg", "シンガポール", "Singapore", /^Singapore /],
  ["lu", "ルクセンブルク", "Luxembourg", /^Luxembourg /],
  ["br", "ブラジル", "Brazil", /^Brazil /],
  ["cl", "チリ", "Chile", /^Chile /],
  ["si", "スロベニア", "Slovenia", /^Slovenia /],
  ["lr", "リベリア", "Liberia", /^Liberia /],
  ["is", "アイスランド", "Iceland", /^Iceland /],
  ["me", "モンテネグロ", "Montenegro", /^Montenegro /],
  ["sk", "スロバキア", "Slovakia", /^Slovakia /],
  ["rs", "セルビア", "Serbia", /^Serbia /],
  ["world", "世界", "World", / worldwide/],
].map(([id, ja, en, englishPrefix]) => ({
  id,
  title: [ja, en],
  datasets: window.GaluchatMapDatasets
    .filter((dataset) => dataset.id.startsWith(`${id}-`))
    .map((dataset) => ({
      id: dataset.id,
      title: [
        dataset.title[0].replace(`${ja}の`, ""),
        dataset.title[1].replace(englishPrefix, "").replace(/^./, (letter) => letter.toUpperCase()),
      ],
    })),
}));

window.GaluchatDatasetSelect = {
  populate(select) {
    for (const group of window.GaluchatDatasetGroups) {
      if (group.datasets.length === 0) continue;
      const optgroup = document.createElement("optgroup");
      optgroup.dataset.country = group.id;
      for (const dataset of group.datasets) {
        const option = document.createElement("option");
        option.value = dataset.id;
        optgroup.append(option);
      }
      select.append(optgroup);
    }
    this.updateLocale(select);
  },

  updateLocale(select) {
    const index = window.GaluchatLocale.locale === "ja" ? 0 : 1;
    for (const optgroup of select.querySelectorAll("optgroup")) {
      const group = window.GaluchatDatasetGroups.find((item) => item.id === optgroup.dataset.country);
      optgroup.label = group.title[index];
      for (const [position, option] of Array.from(optgroup.children).entries()) {
        option.textContent = group.datasets[position].title[index];
      }
    }
  },
};
