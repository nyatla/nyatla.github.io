# is-2022-natt-is-is-au-lmi-adm1 NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | アイスランド自治体区域（INSPIRE 2022年版） |
| リリースパッケージID | `is-2022-natt-is-is-au-lmi-adm1` |
| リリース版・基準時点 | 原典versionidがINSPIRE 2022-10-04の2022年版。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### INSPIRE Administrative Units (au) Iceland

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | <code>data-spec.md</code>, <code>NOTICE.md</code>, <code>iceland_inspire_au_2<wbr>022-grid-512-100.wgs<wbr>mapset.glc</code>, <code>iceland_inspire_au_2<wbr>022-grid-4096-1000.w<wbr>gsmapset.glc</code>, <code>iceland_inspire_au_2<wbr>022-grid-8192-10000.<wbr>wgsmapset.glc</code>, <code>iceland_inspire_au_2<wbr>022.giswordbook</code>, <code>iceland_inspire_au_2<wbr>022.utf16.giswordboo<wbr>k</code>, <code>iceland_inspire_au_2<wbr>022.names.csv</code> |
| 入力データまたは上流成果物 | INSPIRE Administrative Units (au) Iceland。取得済みis_au_lmi_epsg_4326.gpkgの自治体ポリゴンレイヤー。元データはLMÍ IS 50V Mörk。 |
| 入力バージョン・基準時点 | INSPIRE 2022-10-04。取得済みGeoPackageのZIP内日時2023-12-19とは区別する。 |
| 提供者・権利者 | Náttúrufræðistofnun（Natural Science Institute of Iceland）。元データの作成組織はLandmælingar Íslands（National Land Survey of Iceland）。 |
| 取得日 | 2026-10-08（取得済みZIPのファイルスタンプ、Asia/Tokyoに基づく）。 |
| 取得元 | [公式データ配布ページ](https://www.natt.is/en/resources/open-data/data-download), [個別メタデータXML](https://gatt.natt.is/geonetwork/srv/api/records/%7B7CF6A33E-2588-42A8-A483-0B6F729B528A%7D/formatters/xml)。取得時の固定ZIPダウンロードURLは未記録。 |
| ライセンス・利用条件 | [Creative Commons Attribution 4.0 International（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/), [現在の提供機関の公開条件](https://www.natt.is/en/resources/open-data), [旧LMÍの公開条件](https://www-gamli.lmi.is/landupplysingar/leyfi-fyrir-gjaldfrjals-gogn/)。 |
| 再配布条件 | 提供者・原典データセット名・出典・取得時期を表示し、原典のライセンス・著作権等の表示を維持し、変更を明示する。CC BY 4.0へのリンクを保持し、提供者の承認・保証・推奨を示唆しない。商用を含む加工・再配布が可能で、ライセンスが許す利用を法的条件や技術的措置で追加制限しない。 |

#### 必須帰属表示・加工表示

提供元は著作者・データセット名・ライセンスの表示を求め、旧LMÍの条件では取得時期も求める。本原典専用の固定文言は指定されていないため、本リリースでは次の出典・加工表示を採用する。

> Source: Náttúrufræðistofnun / Landmælingar Íslands, INSPIRE Administrative Units (au) Iceland, INSPIRE 2022-10-04, retrieved 2026-10-08. CC BY 4.0.
>
> Adapted by Galuchat; not an official or endorsed product of the data providers.

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した個別メタデータと利用条件に、原典ZIP・GeoPackage・ライセンス全文の同梱指定はない。本NOTICEに出典・取得時期・ライセンスへの参照と加工表示を保持する。 |

#### 加工内容

- 自治体ポリゴンと原典コード・名称を採用し、境界線・行政庁所在地の点レイヤーは採用していない。
- 島・飛び地を含む図形部分と取得済み経緯度を保持し、区域図・名称辞書・原典識別情報の対応表へ加工した。
- 原典IDと区域図の値を対応付けた。原典の自治体名称を更新・補完せず、別の境界や水域マスクを追加していない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
