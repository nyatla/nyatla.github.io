# us-2025-census-gov-tl-state-adm1 NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | U.S. Census Bureau 2025 TIGER/Line State（50州・District of Columbia） |
| リリースパッケージID | `us-2025-census-gov-tl-state-adm1` |
| リリース版・基準時点 | 2025年版、境界・名称の基準日2025-01-01 |

このリリースパッケージは、米国国勢調査局の2025年版TIGER/Line® ShapefileをGaluchat用に加工したものである。米国国勢調査局が本加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### U.S. Census Bureau 2025 TIGER/Line State and Equivalent Entities

このグループは、同一の原典、利用条件および出典表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `tl_2025_us_state_WGS84-grid-512-100.wgsmapset.glc`, `tl_2025_us_state_WGS84-grid-8192-1000.wgsmapset.glc`, `tl_2025_us_state_WGS84-grid-16384-10000.wgsmapset.glc`, `tl_2025_us_state.giswordbook`, `tl_2025_us_state.utf16.giswordbook`, `tl_2025_us_state.names.csv`, `data-spec.md` |
| 入力データまたは上流成果物 | TIGER/Line Shapefile, Current, Nation, U.S., State and Equivalent Entities（`tl_2025_us_state`） |
| 入力バージョン・基準時点 | 2025年版。境界・名称は2025-01-01時点、公開日は2025-09-23。 |
| 提供者・権利者 | U.S. Department of Commerce, U.S. Census Bureau, Geography Division |
| 取得日 | 未記録 |
| 取得元 | [2025 TIGER/Line Shapefiles配布ページ](https://www.census.gov/geographies/mapping-files/2025/geo/tiger-line-file.html)、[原典ZIP](https://www2.census.gov/geo/tiger/TIGER2025/STATE/tl_2025_us_state.zip) |
| ライセンス・利用条件 | [2025 TIGER/Line技術文書 第1章](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2025/TGRSHP2025_TechDoc_Ch1.pdf)および原典ZIP内の`tl_2025_us_state.shp.iso.xml`。米国政府著作物の著作権保護は17 U.S.C. §105により適用されない。 |
| 再配布条件 | 原典ZIP内のISO metadataは、製品・出版物への利用時にU.S. Census Bureauを出典として明示するよう求める。技術文書は`TIGER/Line®`の商標使用と、原典を再梱包して配布する場合の表示について注意を定める。本リリースは原典ZIPを同梱しない。 |

#### 必須帰属表示・加工表示

再配布時は、原典の出典を明示し、本リリースがGaluchatによる加工物であることを維持すること。

> Source: U.S. Census Bureau, 2025 TIGER/Line® Shapefiles, State and Equivalent Entities.
>
> Derived and processed by the Galuchat project. This product is not endorsed by the U.S. Census Bureau.

原典のISO metadataは出典の明示を求め、[技術文書 第1章](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2025/TGRSHP2025_TechDoc_Ch1.pdf)はCensus Bureauの引用を求めている。上の文言は、それらを満たすための本リリースの表示であり、提供元が指定した定型引用文をそのまま転載したものではない。`TIGER/Line®`は出典製品を説明する名称としてのみ使用し、Galuchat製品の独自名称や公認表示として使用しない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 原典Shapefile ZIPとその付属XMLは本リリースへ収録しない。出典・利用条件・商標に関する表示は`NOTICE.md`に記載する。 |

#### 加工内容

* 原典の56区域から50州とDistrict of Columbiaを採用し、Puerto Ricoと4つのIsland Areasを除外した。
* NAD83の境界を地域別の座標操作でWGS 84へ変換した。
* 境界をサンプリングしてGisWordBookコードへ対応付けた区域図と名称辞書を作成した。別の海岸線・水域マスクによるクリップは行っていない。

## 利用条件と注意

各成果物には、上記の出典表示と商標に関する注意が適用される。原典の利用条件を確認し、必須の出典表示および加工表示を維持すること。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

Census BureauはTIGER/Line Shapefilesの位置精度・属性精度を保証しない。境界の表現は統計データの収集・集計用であり、管轄権、所有権、法的な土地記述を確定するものではない。本加工物も正確性、完全性、最新性または特定目的への適合性を保証しない。
