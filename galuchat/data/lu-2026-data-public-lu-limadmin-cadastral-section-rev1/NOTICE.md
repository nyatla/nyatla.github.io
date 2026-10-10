# lu-2026-data-public-lu-limadmin-cadastral-section NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | ルクセンブルク地籍区域（2026-10-05更新版） |
| リリースパッケージID | `lu-2026-data-public-lu-limadmin-cadastral-section` |
| リリース版・基準時点 | PCN由来のlimadmin原典、2026-10-05更新版。地籍Communeは歴史的な地籍単位であり、現行行政Communeと同一視しない。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### ACT limadmin地籍・共同管理区域

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `luxembourg_limadmin_2026-grid-512-100.wgsmapset.glc`, `luxembourg_limadmin_2026-grid-4096-1000.wgsmapset.glc`, `luxembourg_limadmin_2026-grid-8192-10000.wgsmapset.glc`, `luxembourg_limadmin_2026.giswordbook`, `luxembourg_limadmin_2026.utf16.giswordbook`, `luxembourg_limadmin_2026.names.csv` |
| 入力データまたは上流成果物 | Limites administratives du Grand-Duché de Luxembourgの詳細Section、行政・地籍Commune、CantonおよびCondominium。 |
| 入力バージョン・基準時点 | PCN由来のlimadmin原典、2026-10-05更新版。地籍Communeは歴史的な地籍単位であり、現行行政Communeと同一視しない。 |
| 提供者・権利者 | Administration du cadastre et de la topographie（ACT）。 |
| 取得日 | 2026-10-05（取得済みZIPのファイルスタンプ、Asia/Tokyoに基づく）。 |
| 取得元 | [公式配布ページ](https://data.public.lu/fr/datasets/limites-administratives-du-grand-duche-de-luxembourg/), [2026-10-05更新版ZIP](https://download.data.public.lu/resources/limites-administratives-du-grand-duche-de-luxembourg/20261005-031853/limadmin-shp.zip), [Condominiumの公式INSPIRE情報](https://wms.inspire.geoportail.lu/geoserver/ogc/features/v1/collections/au:AU_Condominium/items?f=application%2Fjson) |
| ライセンス・利用条件 | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)。 |
| 再配布条件 | 提供元はCC0を指定している。著作権・データベース権に関するCC0の範囲で商用を含む加工・再配布が可能。帰属表示・加工表示はCC0の必須条件ではないが、本NOTICEでは出典と変更を明示する。公式性・提供者の推奨を示唆しない。 |

#### 必須帰属表示・加工表示

提供元はCC0の条件として固定帰属文・加工文を指定していない。以下は本リリースで採用する出典・加工表示である。

> Source: Administration du cadastre et de la topographie (ACT), Limites administratives du Grand-Duché de Luxembourg. CC0 1.0.
>
> Adapted by Galuchat; not an official ACT product.

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した個別配布条件に原典ZIP、XMLまたはライセンス全文の同梱指定はない。本NOTICEに出典とCC0への参照を保持する。 |

#### 加工内容

- 詳細地籍Sectionの全図形とCondominium面を採用し、歴史district、司法区、選挙区および簡略版を区域地図に採用していない。
- 原典所属・名称と行政Communeコードを対応付け、Condominiumには原典レイヤー名に基づく表示を与えた。原典に欠ける識別子と法的な公式コードを区別した。
- 投影座標からWGS 84経緯度へ変換し、区域図、名称辞書、原典識別情報の対応表へ加工した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
