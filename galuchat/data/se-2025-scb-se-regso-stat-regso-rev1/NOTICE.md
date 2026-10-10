# se-2025-scb-se-regso-stat-regso NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | スウェーデン地域統計区域 RegSO 2025 |
| リリースパッケージID | `se-2025-scb-se-regso-stat-regso` |
| リリース版・基準時点 | RegSO原典は2025年1月1日基準、`2025_v2`。県・自治体コード名称表は2026年版。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### スウェーデン統計局 RegSOおよび県・自治体コード名称表

このグループは、同一の提供者によるCC0の公開データに由来する成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `sweden_regso_2025-grid-512-100.wgsmapset.glc`, `sweden_regso_2025-grid-4096-1000.wgsmapset.glc`, `sweden_regso_2025-grid-8192-10000.wgsmapset.glc`, `sweden_regso_2025.giswordbook`, `sweden_regso_2025.utf16.giswordbook`, `sweden_regso_2025.names.csv` |
| 入力データまたは上流成果物 | Regionala statistikområden (RegSO)の`RegSO_2025.gpkg`, Län och kommuner 2026 i kodnummerordningの`kommunlankod-2026.xlsx`。 |
| 入力バージョン・基準時点 | RegSOは`version=2025_v2`、`referensdatum=20250101`。県・自治体コード名称表は2026年版。 |
| 提供者・権利者 | Statistiska centralbyrån（SCB）/ Statistics Sweden（スウェーデン統計局）。 |
| 取得日 | 両入力とも未記録。 |
| 取得元 | RegSO公式配布ページ：[https://www.scb.se/<wbr>vara-tjanster/<wbr>oppna-data/<wbr>oppna-geodata/regso/](https://www.scb.se/vara-tjanster/oppna-data/oppna-geodata/regso/), GPKG配布URL：[https://<wbr>geodata.scb.se/<wbr>geoserver/stat/wfs?<wbr>REQUEST=GetFeature&<wbr>TYPENAMES=stat%3A<wbr>RegSO_2025&<wbr>outputFormat=<wbr>geopackage&<wbr>service=WFS&<wbr>version=1.1.0](https://geodata.scb.se/geoserver/stat/wfs?REQUEST=GetFeature&TYPENAMES=stat%3ARegSO_2025&outputFormat=geopackage&service=WFS&version=1.1.0), 名称表公式配布ページ：[https://www.scb.se/<wbr>hitta-statistik/<wbr>regional-statistik-<wbr>och-kartor/regionala-<wbr>indelningar/<wbr>lan-och-kommuner/<wbr>lan-och-kommuner-i-<wbr>kodnummerordning/](https://www.scb.se/hitta-statistik/regional-statistik-och-kartor/regionala-indelningar/lan-och-kommuner/lan-och-kommuner-i-kodnummerordning/), 名称表XLSX：[https://www.scb.se/<wbr>contentassets/<wbr>7a89e48960f741e0<wbr>8918e489ea36354a/<wbr>kommunlankod-<wbr>2026.xlsx](https://www.scb.se/contentassets/7a89e48960f741e08918e489ea36354a/kommunlankod-2026.xlsx)。 |
| ライセンス・利用条件 | CC0 1.0 Universal：[https://<wbr>creativecommons.org/<wbr>publicdomain/zero/<wbr>1.0/](https://creativecommons.org/publicdomain/zero/1.0/)。SCBの公開データ利用案内：[https://www.scb.se/<wbr>vara-tjanster/<wbr>oppna-data/](https://www.scb.se/vara-tjanster/oppna-data/)。 |
| 再配布条件 | CC0に基づき、商用利用を含む加工・再配布が可能。帰属表示は必須ではなく、原典提供者が加工物を保証・推奨するとの表示や、SCBとの公式協力・提携を示唆する表示は行わない。 |

#### 必須帰属表示・加工表示

CC0による必須の帰属表示・加工表示はない。SCBの利用案内は、自ら加工したデータをSCBそのものの提供物として出典表示しないよう案内している。本NOTICEは、入力原典とGaluchatによる加工物を区別して記録する。

> Input datasets: Statistics Sweden (SCB), RegSO 2025 and Counties and municipalities 2026.
>
> Processed by Galuchat. This is not an official SCB product or partnership.

上記は任意の原典・加工表示であり、CC0の条件に新たな表示義務を追加するものではない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認したSCBの利用案内およびCC0に、原典GPKG、名称表XLSXまたはライセンス全文の同梱指定はない。原典の参照と加工物の位置付けは本NOTICEに記録する。 |

#### 加工内容

* RegSO原典の区域と名称を採用し、原典の県・自治体コードに2026年版名称表の名称を対応付けた。名称表による境界の変更は行っていない。
* 投影座標からWGS 84経緯度へ変換し、原典名称の表記を保持した区域図・名称辞書・原典コード対応表へ変換した。
* 原典区域に含まれる水域、島嶼、飛地、穴を保持し、別資料による水域・国境の補正は行っていない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。本グループに必須帰属表示・加工表示はなく、任意の表示を必須条件として扱わない。

原典および加工物の正確性、完全性、最新性または特定目的への適合性は保証されない。
