# ch-2026-swisstopo-admin-ch-swissboundaries3d-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | swissBOUNDARIES3D（2026-01-01）スイス区域 |
| リリースパッケージID | `ch-2026-swisstopo-admin-ch-swissboundaries3d-adm` |
| リリース版・基準時点 | swissBOUNDARIES3D 2026-01、2026-01-01時点。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Federal Office of Topography swisstopo

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `switzerland_swissboundaries3d_2026-grid-512-100.wgsmapset.glc`, `switzerland_swissboundaries3d_2026-grid-4096-1000.wgsmapset.glc`, `switzerland_swissboundaries3d_2026-grid-8192-10000.wgsmapset.glc`, `switzerland_swissboundaries3d_2026.giswordbook`, `switzerland_swissboundaries3d_2026.utf16.giswordbook`, `switzerland_swissboundaries3d_2026.names.csv` |
| 入力データまたは上流成果物 | swissBOUNDARIES3Dの`TLM_HOHEITSGEBIET`、`TLM_BEZIRKSGEBIET`、`TLM_KANTONSGEBIET`。 |
| 入力バージョン・基準時点 | 2026-01版、2026-01-01時点。原典ZIP名は`swissboundaries3d_2026-01_2056_5728.shp.zip`。 |
| 提供者・権利者 | Federal Office of Topography swisstopo。 |
| 取得日 | 未記録。 |
| 取得元 | [swissBOUNDARIES3D製品・ダウンロードページ](https://www.swisstopo.admin.ch/en/landscape-model-swissboundaries3d)。 |
| ライセンス・利用条件 | [swisstopoの無償ジオデータ利用条件](https://www.swisstopo.admin.ch/en/terms-of-use-free-geodata-and-geoservices)に従う。[出典表示のFAQ](https://www.swisstopo.admin.ch/en/faq-free-geodata)も参照。Creative Commonsライセンスではない。 |
| 再配布条件 | 利用・加工・再配布は可能。swisstopo所定の出典表示を、配布するデータに付随する文書等で維持する。 |

#### 必須帰属表示・加工表示

再配布時は、swisstopoが指定する次の出典表示を維持すること。

> Source: Federal Office of Topography swisstopo

本リリースは、国外区域の除外、名称結合、座標変換および区域図・辞書への変換を行ったGaluchatの加工物であり、swisstopoの公式製品ではない。

SDKや地図アプリ等で本データを表示・公開する場合も、利用者が確認できる場所に上記の出典を示すこと。地図の近く、またはアプリから参照できる出典一覧での表示が認められる。ZIPへの本NOTICEの同梱だけで、地図表示時の出典表示を省略しない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した利用条件に、原典ファイルや利用条件全文の同梱指定はない。指定の出典表示は本NOTICEに保持する。 |

#### 加工内容

* スイスの基礎区域のみを採用し、国外区域を除外した。自治体以外のスイス側区域は保持した。
* 原典Kanton・Bezirkの名称を番号で結合し、3次元図形を2次元のWGS 84経緯度へ変換した。
* 区域図、GisWordBookおよび原典番号との対応表へ変換した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
