# rs-undated-data-gov-rs-hypso-struct-settl-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | セルビアGeoanalitičari集落区域 |
| リリースパッケージID | `rs-undated-data-gov-rs-hypso-struct-settl-adm` |
| リリース版・基準時点 | 2021-06-18公開のHypso_Struct_Settl配布物。行政界の基準日は未確認。公開日およびDBFの更新日を行政界基準日とは扱わない。 |

`undated`は境界基準年が不詳であることを示し、現行・最新版を意味しない。

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Geoanalitičari Hypso_Struct_Settl

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `serbia_hypso_struct_settl-grid-512-100.wgsmapset.glc`, `serbia_hypso_struct_settl-grid-4096-1000.wgsmapset.glc`, `serbia_hypso_struct_settl-grid-8192-10000.wgsmapset.glc`, `serbia_hypso_struct_settl.giswordbook`, `serbia_hypso_struct_settl.utf16.giswordbook`, `serbia_hypso_struct_settl.names.csv` |
| 入力データまたは上流成果物 | Хипсометријска структура (висинске зоне) општина и насеља（Hypsometric Structure (Altitudinal Zonality) of Municipalities and Settlements）の集落区域配布物Hypso_Struct_Settl。 |
| 入力バージョン・基準時点 | 2021-06-18公開のHypso_Struct_Settl配布物。行政界の基準日は未確認。 |
| 提供者・権利者 | 配布者はГеоаналитичари（Geoanalitičari）。付属解説による境界の出典はGeoSrbija – Open data of National Data Infrastructure、Republic Geodetic Authority（RGZ）。Geoanalitičariの配布物を採用し、RGZからの直接配布物とは表示しない。 |
| 取得日 | 2026-10-05。取得したZIPのファイルスタンプに基づく（日本時間）。 |
| 取得元 | 公式カタログ：[https://data.gov.rs/<wbr>sr/datasets/khipsomet<wbr>rijska-struktura-vis<wbr>inske-zone-opshtina-<wbr>i-naselja/](https://data.gov.rs/sr/datasets/khipsometrijska-struktura-visinske-zone-opshtina-i-naselja/)。固定配布URL：[https://geoanalitica<wbr>ri.github.io/depopul<wbr>acija/data/Indicator<wbr>_6/Hypso_Struct_Settl<wbr>.zip](https://geoanaliticari.github.io/depopulacija/data/Indicator_6/Hypso_Struct_Settl.zip)。 |
| ライセンス・利用条件 | Serbian Open Data License 1.0（SODL）。公式カタログの当該データセットはlicenseに`sodl`を指定する。利用条件：[https://data.gov.rs/<wbr>sr/terms/](https://data.gov.rs/sr/terms/)。 |
| 再配布条件 | 商用・非商用の複製、加工、結合および再配布が可能。各再利用時に出典・提供者名、取得日、取得元URLおよび変更・編集・新たな表現の表示を維持する。利用は無償で、個別申請・事前承認を要求する条項はない。 |

許諾根拠は、この配布物に対する公式カタログのSODL指定である：[https://data.gov.rs/<wbr>api/1/datasets/60cc<wbr>ea007de2729c7c41c0b1<wbr>/](https://data.gov.rs/api/1/datasets/60ccea007de2729c7c41c0b1/)。GeoSrbijaから別途取得する資料全般へ同じ指定を拡張しない。元のGeoSrbija資料の個別利用条件は未確認であり、RGZから別途許諾を取得した旨の表示は行わない。

原典の出典説明：[https://raw.githubus<wbr>ercontent.com/geoana<wbr>liticari/depopulacij<wbr>a/master/data/Indic<wbr>ator_6/INDICATOR%206<wbr>%20Hypsometric%20Str<wbr>ucture%20of%20munici<wbr>palities%20and%20set<wbr>tlements.pdf](https://raw.githubusercontent.com/geoanaliticari/depopulacija/master/data/Indicator_6/INDICATOR%206%20Hypsometric%20Structure%20of%20municipalities%20and%20settlements.pdf)。同解説は標高統計の出典としてEU-DEM version 1.1を挙げるが、本リリースには標高統計を収録しない。

#### 必須帰属表示・加工表示

SODLは固定の表示文言を指定せず、出典・提供者名、取得日、取得元URLおよび変更表示を要求する。再配布時は、少なくとも次の表示と上記の取得元・ライセンス参照を維持すること。取得日は実際の記録に基づいて表示する。

> Source: Geoanalitičari, Hypso_Struct_Settl, distributed through the Serbian Open Data Portal under the Serbian Open Data License (SODL).
>
> Boundary provenance: GeoSrbija open data, Republic Geodetic Authority (RGZ), as documented by the source provider.
>
> Download date: 2026-10-05. Based on the downloaded ZIP file timestamp (Asia/Tokyo).
>
> Adapted by Galuchat into map, name-dictionary and code-correspondence formats. Elevation statistics are omitted. This is not an official or endorsed product of the source provider.

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認したSODL条件に原典ZIP・ライセンス全文・解説PDFの同梱指定はない。必要な出典・取得元・ライセンス参照および加工表示は本NOTICEに保持する。 |

#### 加工内容

* 集落区域と原典名称・識別コードを採用し、区域図・名称辞書・コード対応表へ変換する。標高帯別割合と平均標高は収録しない。
* 各集落レコードの自治体名を採用し、自治体コードからの名称置換や現行コードへの補正は行わない。キリル文字・ラテン文字の名称表記を原典のまま保持する。
* 投影座標をWGS 84経緯度へ変換し、区域を格子化する。原典の複数の図形部分および穴を保持し、別資料による水域・国境のクリップや区域の補完は行わない。
* 原典提供者のロゴ・標章等は収録しない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。原典由来の権利条件は、SDK本体のライセンスによって置き換えられない。
