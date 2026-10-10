# ca-2021-statcan-gc-ca-csd-cbf-stat-csd NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Statistics Canada 2021 Census Subdivision Cartographic Boundary File |
| リリースパッケージID | `ca-2021-statcan-gc-ca-csd-cbf-stat-csd` |
| リリース版・基準時点 | 2021 Census Cartographic Boundary File。地理的基準日は2021-01-01。 |

このリリースパッケージは、Statistics Canadaの2021年Census Subdivision Cartographic Boundary FileをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Statistics Canada 2021 Census Subdivision Cartographic Boundary File

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `statcan-csd-2021-wgs84-grid-512-100.wgsmapset.glc`, `statcan-csd-2021-wgs84-grid-4096-1000.wgsmapset.glc`, `statcan-csd-2021-wgs84-grid-16384-10000.wgsmapset.glc`, `statcan-csd-2021.giswordbook`, `statcan-csd-2021.utf16.giswordbook`, `statcan-csd-2021.names.csv`, `data-spec.md` |
| 入力データまたは上流成果物 | Census Subdivision 2021, Cartographic Boundary File, English Shapefile（`lcsd000b21a_e`） |
| 入力バージョン・基準時点 | 2021年版。地理的基準日は2021-01-01、原典ZIP内XMLに記載された公開年月は2021-11。 |
| 提供者・権利者 | Government of Canada; Statistics Canada |
| 取得日 | 未記録 |
| 取得元 | [2021 Census Boundary Files配布ページ](https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21) |
| ライセンス・利用条件 | 原典ZIP内`lcsd000b21a_e.xml`に示された[Open Government Licence – Canada 2.0](https://open.canada.ca/en/open-government-licence-canada)。 |
| 再配布条件 | 原典の出典を明示し、可能な場合はライセンスへのリンクを付ける。提供者による承認・推奨を示唆してはならない。名称、紋章、ロゴ、商標および第三者の権利はこのライセンスによる許諾対象外である。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Contains information licensed under the Open Government Licence – Canada.
>
> Derived and processed by the Galuchat project. This product is not endorsed by Statistics Canada or the Government of Canada.

原典XMLはライセンスを指定するが、個別の定型帰属文は確認できない。最初の文は、提供者指定の文言がない場合に[ライセンス本文](https://open.canada.ca/en/open-government-licence-canada)が定める帰属文である。2番目の文は本加工物の加工表示であり、原典提供者の文言ではない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 本リリースは原典Shapefile ZIPを再梱包せず、原典XMLの同梱を求める条件も確認されていない。出典とライセンスへのリンクは本NOTICEに記載する。 |

#### 加工内容

* 原典の境界をEPSG:4326へ再投影した。
* 原典に含まれる無効geometryを、派生したpreparedデータに限って補正した。原典ZIPは変更していない。
* `CSDUID`から直接値と辞書の対応を作り、サンプリング・値変換・格納形式変換を経て区域図と名称辞書を作成した。別の海岸線・内水面マスクによる追加クリップは行っていない。

## 利用条件と注意

各成果物には、上記の出典表示とライセンス条件が適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典は現状有姿で提供され、Statistics Canadaは正確性、完全性、最新性または特定目的への適合性を保証しない。境界データは法的境界の確定、測量、航海、緊急対応または工学用途に用いるものではない。
