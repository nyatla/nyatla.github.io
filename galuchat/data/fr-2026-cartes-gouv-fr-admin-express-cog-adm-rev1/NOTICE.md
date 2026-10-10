# fr-2026-cartes-gouv-fr-admin-express-cog-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | France IGN ADMIN EXPRESS COG 4.0（2026-01-01） |
| リリースパッケージID | `fr-2026-cartes-gouv-fr-admin-express-cog-adm` |
| リリース版・基準時点 | ADMIN EXPRESS COG 4.0、2026-01-01版、WGS84G / FRA、GeoParquet版。 |

このリリースパッケージは、以下に記載するIGNの行政区域データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### IGN ADMIN EXPRESS COG 4.0

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。文書については、その中の原典由来の情報に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `france_admin_2026-grid-512-100.wgsmapset.glc`, `france_admin_2026-grid-1024-1000.wgsmapset.glc`, `france_admin_2026-grid-8192-10000.wgsmapset.glc`, `france_admin_2026.giswordbook`, `france_admin_2026.utf16.giswordbook`, `france_admin_2026.names.csv`, `data-spec.md`, `NOTICE.md` |
| 入力データまたは上流成果物 | ADMIN EXPRESS COG。採用レイヤはRégion、Département、Commune、Arrondissement municipal、および補助参照のCollectivité territoriale。 |
| 入力バージョン・基準時点 | `ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01`。行政区域の基準時点は2026-01-01。 |
| 提供者・権利者 | Institut national de l'information géographique et forestière（IGN）。行政コード・名称はINSEEのCode officiel géographique（COG）に整合する。 |
| 取得日 | 未記録 |
| 取得元 | [https://cartes.gouv.<wbr>fr/rechercher-une-do<wbr>nnee/dataset/IGNF_AD<wbr>MIN-EXPRESS](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS)、[https://cartes.gouv.<wbr>fr/aide/fr/partenair<wbr>es/ign/generalites-i<wbr>gn/actualites/2026-0<wbr>6-flatgeobuf-geoparq<wbr>uet/](https://cartes.gouv.fr/aide/fr/partenaires/ign/generalites-ign/actualites/2026-06-flatgeobuf-geoparquet/)。版固定の配布先は下記。 |
| ライセンス・利用条件 | Licence Ouverte / Open Licence version 2.0（Etalab）。[https://www.data.gou<wbr>v.fr/datasets/admin-<wbr>express-admin-expres<wbr>s-cog-admin-express-<wbr>cog-carto-admin-expr<wbr>ess-cog-carto-pe-adm<wbr>in-express-cog-carto<wbr>-plus-pe](https://www.data.gouv.fr/datasets/admin-express-admin-express-cog-admin-express-cog-carto-admin-express-cog-carto-pe-admin-express-cog-carto-plus-pe)、[https://www.etalab.g<wbr>ouv.fr/wp-content/up<wbr>loads/2017/04/ETALAB<wbr>-Licence-Ouverte-v2.<wbr>0.pdf](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf)。 |
| 再配布条件 | 複製・加工・再配布・商用利用が認められる。出典（少なくとも提供者名）と使用した情報の更新日を明示し、提供元の公認・推奨を示唆しないこと。情報の内容・出典・更新日について利用者を誤認させないこと。 |

版固定のGeoParquet配布先：

* [https://data.geopf.f<wbr>r/chunk/telechargeme<wbr>nt/resource/ADMIN-EX<wbr>PRESS-COG-PARTIEL/AD<wbr>MIN-EXPRESS-COG_4-0_<wbr>_GEOPARQUET_WGS84G_F<wbr>RA_2026-01-01?page=1<wbr>&limit=50](https://data.geopf.fr/chunk/telechargement/resource/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01?page=1&limit=50)
* [https://data.geopf.f<wbr>r/chunk/telechargeme<wbr>nt/download/ADMIN-EX<wbr>PRESS-COG-PARTIEL/AD<wbr>MIN-EXPRESS-COG_4-0_<wbr>_GEOPARQUET_WGS84G_F<wbr>RA_2026-01-01/region<wbr>.parquet](https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01/region.parquet), [https://data.geopf.f<wbr>r/chunk/telechargeme<wbr>nt/download/ADMIN-EX<wbr>PRESS-COG-PARTIEL/AD<wbr>MIN-EXPRESS-COG_4-0_<wbr>_GEOPARQUET_WGS84G_F<wbr>RA_2026-01-01/depart<wbr>ement.parquet](https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01/departement.parquet), [https://data.geopf.f<wbr>r/chunk/telechargeme<wbr>nt/download/ADMIN-EX<wbr>PRESS-COG-PARTIEL/AD<wbr>MIN-EXPRESS-COG_4-0_<wbr>_GEOPARQUET_WGS84G_F<wbr>RA_2026-01-01/commun<wbr>e.parquet](https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01/commune.parquet), [https://data.geopf.f<wbr>r/chunk/telechargeme<wbr>nt/download/ADMIN-EX<wbr>PRESS-COG-PARTIEL/AD<wbr>MIN-EXPRESS-COG_4-0_<wbr>_GEOPARQUET_WGS84G_F<wbr>RA_2026-01-01/arrond<wbr>issement_municipal.p<wbr>arquet](https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01/arrondissement_municipal.parquet), [https://data.geopf.f<wbr>r/chunk/telechargeme<wbr>nt/download/ADMIN-EX<wbr>PRESS-COG-PARTIEL/AD<wbr>MIN-EXPRESS-COG_4-0_<wbr>_GEOPARQUET_WGS84G_F<wbr>RA_2026-01-01/collec<wbr>tivite_territoriale.<wbr>parquet](https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01/collectivite_territoriale.parquet)

これらは公式配布案内の版固定エンドポイントに従う参照先であり、ローカル素材の実際の取得日時・取得経路は未記録である。

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source: IGN, ADMIN EXPRESS COG 4.0, edition 2026-01-01.
>
> Derived and processed by Galuchat. Not endorsed by IGN or INSEE.

この文言は、出典・更新日の表示条件を満たし、Galuchatによる加工物と明示するための本リリースの表示である。提供元が指定した定型引用文ではない。適用するライセンスはLicence Ouverte 2.0であり、CC BYなどの別ライセンスへ読み替えない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認したLicence Ouverte 2.0には、ライセンス全文・原典アーカイブ・製品説明書の同梱義務はない。出典・更新日・加工表示と利用条件への参照を本NOTICEに保持する。 |

#### 加工内容

* CommuneとArrondissement municipalを採用し、Paris・Lyon・Marseilleの親Communeの区域面を、その子の市内行政区の区域面で置換した。
* 原典コードによってRégion・Département・親Communeの名称を対応付けた。存在しない上位階層を補作せず、旧・委任Communeは独立した区域として採用していない。
* GeoParquetのWGS 84経緯度を保持してShapefileへ変換した。名称辞書と原典コードとの対応表を作成し、別の海岸線・水域マスクは適用していない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典はライセンスに定める範囲で現状のまま提供される。IGN・INSEEによる本加工物の公認・保証を意味せず、Galuchatも正確性、完全性、最新性または特定目的への適合性を保証しない。
