# sk-2026-skgeodesy-sk-zbgis-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | スロバキアZBGIS自治体区域（2026年版） |
| リリースパッケージID | `sk-2026-skgeodesy-sk-zbgis-adm` |
| リリース版・基準時点 | ZBGIS行政界の基本レベルah_shp_0.zip。原則2026-06-30、8郡は2024-12-31時点。例外郡は本NOTICEの帰属表示に記載する。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### GKÚ Bratislava ZBGIS行政界

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `slovakia_zbgis_2026-grid-512-100.wgsmapset.glc`, `slovakia_zbgis_2026-grid-4096-1000.wgsmapset.glc`, `slovakia_zbgis_2026-grid-8192-10000.wgsmapset.glc`, `slovakia_zbgis_2026.giswordbook`, `slovakia_zbgis_2026.utf16.giswordbook`, `slovakia_zbgis_2026.names.csv` |
| 入力データまたは上流成果物 | Základná úroveň / ZBGIS – Administratívne hranice。採用する区域はobec_0のObecレベル。 |
| 入力バージョン・基準時点 | ZBGIS行政界の基本レベルah_shp_0.zip。原則2026-06-30、8郡は2024-12-31時点。例外郡は本NOTICEの帰属表示に記載する。 |
| 提供者・権利者 | Geodetický a kartografický ústav Bratislava（GKÚ Bratislava）。 |
| 取得日 | 未記録。配布版日付・区域更新日を取得日には読み替えない。 |
| 取得元 | [https://www.gku.sk/g<wbr>ku/produkty-sluzby/n<wbr>a-stiahnutie/zbgis.h<wbr>tml](https://www.gku.sk/gku/produkty-sluzby/na-stiahnutie/zbgis.html) |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。提供条件：[https://www.gku.sk/g<wbr>ku/produkty-sluzby/n<wbr>a-stiahnutie/zbgis.h<wbr>tml](https://www.gku.sk/gku/produkty-sluzby/na-stiahnutie/zbgis.html)。 |
| 再配布条件 | 商用利用を含む複製・加工・再配布が可能。提供者への帰属、原典・ライセンスへの参照、提供された権利・免責表示および変更表示を維持する。原典に対する許諾を制限する追加条件・技術的制限を課さず、公式性・公認・推薦を示唆しない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示と本NOTICEに記載した原典・ライセンス参照を維持すること。

> Source: GKÚ Bratislava, ZBGIS – Administratívne hranice, basic level. Source state: 2026-06-30, except eight districts with state 2024-12-31. CC BY 4.0.
>
> Adapted by Galuchat. This is not an official or endorsed product of the original provider.

公式配布ページは著作者をGKÚ Bratislava、ライセンスをCC BY 4.0と指定する。この製品専用の固定帰属文は確認されていない。上記は本リリースの出典・版表示である。旧時点の8郡はNitra、Dunajská Streda、Topoľčany、Čadca、Liptovský Mikuláš、Veľký Krtíš、Michalovce、Trebišovであり、採用原典の公式な時点例外として表示を維持する。

CC BY 4.0は帰属表示と変更表示を求める。加工表示の詳細は次の「加工内容」に記載する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典ファイル・ライセンス全文・原典メタデータの同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典のObecレベルの区域を採用し、地域・郡の名称を原典の所属コードで関連付ける。都市内区域・軍事区域を保持し、同一内容の重複レイヤーは収録しない。
* 投影座標の水平成分からWGS 84経緯度へ変換し、区域図・名称辞書・コード対応表へ変換する。原典のスロバキア語名称を保持し、辞書はUTF-8・UTF-16LEへ転記する。
* 別資料による水域・国境の補正および例外郡の時点更新は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典ライセンスの免責を維持する。原典およびGaluchatの加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。
