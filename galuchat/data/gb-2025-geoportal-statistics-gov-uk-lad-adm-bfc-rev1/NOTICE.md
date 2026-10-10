# gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Local Authority Districts (December 2025) Boundaries UK BFC |
| リリースパッケージID | `gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc` |
| リリース版・基準時点 | 2025年12月版（原典公開日：2026-04-29） |

このリリースパッケージは、以下に記載するONSの原典データをGaluchat用に加工したものである。ONS、Ordnance Surveyまたは英国政府が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### ONS LAD境界

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `LAD_DEC_2025_UK_BFC_WGS84-grid-512-100.wgsmapset.glc`, `LAD_DEC_2025_UK_BFC_WGS84-grid-4096-1000.wgsmapset.glc`, `LAD_DEC_2025_UK_BFC_WGS84-grid-8192-10000.wgsmapset.glc`, `LAD_DEC_2025_UK_BFC.giswordbook`, `LAD_DEC_2025_UK_BFC.utf16.giswordbook`, `LAD_DEC_2025_UK_BFC.names.csv`, `data-spec.md` |
| 入力データまたは上流成果物 | Local Authority Districts (December 2025) Boundaries UK BFC |
| 入力バージョン・基準時点 | 2025年12月版、BFC（2026-04-29公開） |
| 提供者・権利者 | Office for National Statistics（ONS）。Ordnance Surveyのデータを含む。 |
| 取得日 | 未記録 |
| 取得元 | [ONS原典カタログ](https://www.data.gov.uk/dataset/aa5a9ccf-fbea-43cb-81cc-fdc04d89f128/local-authority-districts-december-2025-boundaries-uk-bfc)、[Shapefileダウンロード](https://open-geography-portalx-ons.hub.arcgis.com/api/download/v1/items/92150c7aa60540c5814abe3b26bce6d0/shapefile?layers=0) |
| ライセンス・利用条件 | [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)。[ONSのライセンス案内](https://www.ons.gov.uk/methodology/geography/licences)を参照。 |
| 再配布条件 | OGL v3.0に従い、出典・著作権表示と加工物であることの表示を維持する。第三者の権利や公的機関の推奨を誤認させない。 |

#### 必須帰属表示・加工表示

再配布時は、ONSが示す次の表示を維持すること。

> Source: Office for National Statistics licensed under the Open Government Licence v.3.0
>
> Contains OS data © Crown copyright and database right 2026

このリリースはGaluchat用に座標変換、辞書結合、ラスタ化、コード変換を行った加工物であり、ONSまたはOrdnance Surveyの公式製品ではないことも表示する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 原典のライセンス文、メタデータ等について別途の同梱指定は確認していない。必要な帰属表示は本NOTICEに記載する。 |

#### 加工内容

* 原典の境界を地域別の方式でWGS 84経緯度へ変換し、ラスタ化してWGSMapSetに格納した。
* 原典のGSSコードと英語名からGisWordBookおよび名称表を作成した。

### ONS LADとCountyの対応表

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `LAD_DEC_2025_UK_BFC.giswordbook`, `LAD_DEC_2025_UK_BFC.utf16.giswordbook`, `LAD_DEC_2025_UK_BFC.names.csv`, `data-spec.md` |
| 入力データまたは上流成果物 | Local Authority District to County and Unitary Authority (April 2025) Lookup in EW (V2) |
| 入力バージョン・基準時点 | 2025年4月版、V2 |
| 提供者・権利者 | Office for National Statistics（ONS） |
| 取得日 | 2026-09-05 |
| 取得元 | [ONS原典カタログ](https://www.data.gov.uk/dataset/a76a9de2-d0f4-4fd7-bcc9-e63bbf28bbb5/local-authority-district-to-county-and-unitary-authority-april-2025-lookup-in-ew-v2)、[Feature Service](https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/LAD25_CTYUA25_EW_LU_v2/FeatureServer/0) |
| ライセンス・利用条件 | [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)。[ONSのライセンス案内](https://www.ons.gov.uk/methodology/geography/licences)を参照。 |
| 再配布条件 | OGL v3.0に従い、ONSの出典表示と加工物であることの表示を維持する。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次のONSの表示を維持すること。

> Source: Office for National Statistics licensed under the Open Government Licence v.3.0

County名はONSの対応表から付加した加工情報であり、原典の境界属性をそのまま再配布したものではない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 別途の同梱指定は確認していない。必要な帰属表示は本NOTICEに記載する。 |

#### 加工内容

* 対応表をGSSコードで結合し、該当するEnglandのNon-metropolitan Districtsへ行政County名を付加した。
* County名が適用されない区域は、辞書の対応スロットを空文字にした。

## 利用条件と注意

各成果物には、該当する出典・利用条件グループの条件がすべて適用される。必須帰属表示と加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。行政区域の改編や原典の訂正は、収録した基準時点以降に生じる可能性がある。
