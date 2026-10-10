# lr-2022-lisgis-gov-lr-geography-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | リベリア行政区域（LISGIS 2022） |
| リリースパッケージID | `lr-2022-lisgis-gov-lr-geography-adm` |
| リリース版・基準時点 | LISGIS 2022 Population and Housing Census由来の行政GIS、非simplified版、各データセットの版2022。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### LISGIS Geography domain・2022行政地図

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `liberia_lisgis_2022-grid-512-100.wgsmapset.glc`, `liberia_lisgis_2022-grid-4096-1000.wgsmapset.glc`, `liberia_lisgis_2022-grid-8192-10000.wgsmapset.glc`, `liberia_lisgis_2022.giswordbook`, `liberia_lisgis_2022.utf16.giswordbook`, `liberia_lisgis_2022.names.csv` |
| 入力データまたは上流成果物 | Geography domain collectionのClan Boundaries（geo-clans）、District Boundaries（geo-districts）、County Boundaries（geo-counties）、各詳細版。 |
| 入力バージョン・基準時点 | LISGIS 2022 Population and Housing Census由来の行政GIS、非simplified版、各データセットの版2022。 |
| 提供者・権利者 | Liberia Institute of Statistics and Geo-Information Services（LISGIS）。 |
| 取得日 | 2026-10-05（取得済みZIPのファイルスタンプ、Asia/Tokyoに基づく）。 |
| 取得元 | [公式データカタログ](https://lisgis.gov.lr/data), [機械可読カタログ](https://lisgis.gov.lr/api/datasets), [API・bulk archiveの説明](https://lisgis.gov.lr/data/api) |
| ライセンス・利用条件 | [Creative Commons Attribution 4.0 International（CC BY 4.0）、LISGIS Open Data License](https://creativecommons.org/licenses/by/4.0/), [提供元の利用条件](https://lisgis.gov.lr/open-data-license)。 |
| 再配布条件 | LISGIS、原典カタログまたはデータセット、ライセンスへの参照、変更表示を維持する。商用を含む加工・再配布が可能。公式ライセンスは公開済みデータの利用に料金・登録・申請・事前許可を要求しない。LISGISの公式製品・推奨製品であることを示唆しない。 |

#### 必須帰属表示・加工表示

提供元が加工製品向けに指定する次の帰属文と、原典・ライセンスへのリンクを維持する。

> This product was adapted from the Liberia Institute of Statistics and Geo-Information Services' information, which is licensed under LISGIS's Open Data License Agreement.
>
> Adapted by Galuchat from LISGIS 2022 geographic boundaries; licensed source data: CC BY 4.0.

LISGIS Open Data Licenseの通知番号はLISGIS/DG/ODL/2026/002、施行日は2026-06-30。これは公開ライセンスの識別情報であり、Galuchatが個別の許可を取得した番号ではない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 公開条件に元のREADME、manifest、JSON、CSV、XLSXまたはライセンスPDFの同梱指定は確認されていない。本NOTICEに指定帰属文、原典・ライセンスへのリンク、変更表示を保持する。 |

#### 加工内容

- 詳細Clan面を採用し、District・Countyの原典コードから所属名称を対応付けた。simplified版と統計観測値は採用していない。
- 配布済みWGS 84経緯度を保持し、原典のコード・名称を区域図、名称辞書、対応表へ加工した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
