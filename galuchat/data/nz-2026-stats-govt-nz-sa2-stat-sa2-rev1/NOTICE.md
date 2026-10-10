# nz-2026-stats-govt-nz-sa2-stat-sa2 NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Stats NZ Statistical Area 2 2026 |
| リリースパッケージID | `nz-2026-stats-govt-nz-sa2-stat-sa2` |
| リリース版・基準時点 | Statistical Area 2 2026およびMeshblock Higher Geographies 2026。ともに2026-01-01時点。 |

このリリースパッケージは、以下に記載するStats NZの原典データをGaluchat用に加工したものである。Stats NZが、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Stats NZ Statistical Area 2 2026・Meshblock Higher Geographies 2026

このグループは、同一の提供者、ライセンスおよび必須表示が適用される成果物をまとめる。文書については、その中の原典由来の情報に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `statsnz-sa2-2026-grid-512-100.wgsmapset.glc`, `statsnz-sa2-2026-grid-4096-1000.wgsmapset.glc`, `statsnz-sa2-2026-grid-8192-10000.wgsmapset.glc`, `statsnz-sa2-2026.giswordbook`, `statsnz-sa2-2026.utf16.giswordbook`, `statsnz-sa2-2026.names.csv`, `data-spec.md`, `NOTICE.md` |
| 入力データまたは上流成果物 | Stats NZ Statistical Area 2 2026（高精細Shapefile。SA2形状・コード・名称）およびMeshblock Higher Geographies 2026（SA2コードとTAコード・名称の公式対応）。 |
| 入力バージョン・基準時点 | 両原典とも2026-01-01時点の2026年版。Shapefileは2026-09-14に配布形式へ変換されたものであり、この日付を地理的な基準日とはしない。 |
| 提供者・権利者 | Stats NZ – Tatauranga Aotearoa。 |
| 取得日 | SA2 Shapefile：未記録。TA対応：2026-09-27に公式公開サービスで照合。 |
| 取得元 | [Stats NZのSA2 2026配布ページ](https://datafinder.stats.govt.nz/layer/123515-statistical-area-2-2026/)、[Meshblock Higher Geographies 2026公式公開サービス](https://services2.arcgis.com/vKb0s8tBIA3bdocZ/ArcGIS/rest/services/Meshblock_Higher_Geographies_2026/FeatureServer/0)。 |
| ライセンス・利用条件 | 両原典とも[Creative Commons Attribution 4.0 International（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/)。[Stats NZの著作権・帰属表示案内](https://www.stats.govt.nz/about-us/copyright/)に従う。 |
| 再配布条件 | Stats NZへの帰属、ライセンスへのリンクおよび変更内容を表示する。Stats NZによる承認・推奨を示唆しない。原典とライセンスに関する表示を維持し、受領者の利用を制限する追加条件を原典に課さない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> This work is based on/includes Stats NZ’s data which are licensed by Stats NZ for reuse under the Creative Commons Attribution 4.0 International licence.
>
> Stats NZのSA2形状・名称および2026年版TA対応を基に、座標変換、TA・SA2の名称階層化、コードの対応付け、区域図・辞書への形式変換を行った。Stats NZは本加工物を承認・推奨していない。

最初の行は[Stats NZが加工物・集合物向けに指定する帰属文言](https://www.stats.govt.nz/about-us/copyright/)である。Stats NZのロゴは帰属表示に使用しない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した原典の利用条件には、加工物とともに原典ZIP・メタデータXML・ライセンス全文を同梱する指示がない。必要な出典、ライセンスおよび加工表示は本NOTICEに記載する。 |

#### 加工内容

* SA2 2026の原典形状・コード・名称を採用し、Meshblock Higher Geographies 2026のSA2・TA対応により所属TAを付与した。対応データのTA所属外コード`999`は`names.csv`に保持し、名称階層では上位名を空文字列とした。
* 原典の投影座標をWGS 84経緯度へ変換し、区域図と辞書・原典コード対応表へ加工した。水域区域や島嶼区域の採用を原典から変更せず、追加の海岸線・内水面マスクは適用していない。
* 原典に形状を持たないSA2も名称辞書と対応表には保持したが、区域図には描画していない。

## 利用条件と注意

各成果物には、上記の出典表示とライセンス条件が適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

Stats NZによる本加工物の公認・保証を意味せず、Galuchatも正確性、完全性、最新性または特定目的への適合性を保証しない。
