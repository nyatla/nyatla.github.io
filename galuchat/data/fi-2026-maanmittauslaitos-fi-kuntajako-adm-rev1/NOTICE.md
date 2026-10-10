# fi-2026-maanmittauslaitos-fi-kuntajako-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | フィンランド行政区域区分（2026年、1:10,000 GML版） |
| リリースパッケージID | `fi-2026-maanmittauslaitos-fi-kuntajako-adm` |
| リリース版・基準時点 | 行政区域区分の2026年版、1:10,000、GML形式、2026年6月更新版。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### フィンランド国土測量局 行政区域区分

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `finland_kuntajako_2026-grid-512-100.wgsmapset.glc`, `finland_kuntajako_2026-grid-4096-1000.wgsmapset.glc`, `finland_kuntajako_2026-grid-8192-10000.wgsmapset.glc`, `finland_kuntajako_2026.giswordbook`, `finland_kuntajako_2026.utf16.giswordbook`, `finland_kuntajako_2026.names.csv` |
| 入力データまたは上流成果物 | Hallinnolliset aluejaot (vektori) / Division into administrative areas (vector)。`TietoaKuntajaosta_2026_10k.zip`内のGML行政区域データ。 |
| 入力バージョン・基準時点 | 2026年版、1:10,000、2026年6月更新版。ZIP内の行政区域XMLのファイル日時は2026-06-10。 |
| 提供者・権利者 | Maanmittauslaitos / National Land Survey of Finland（フィンランド国土測量局）。 |
| 取得日 | 未記録。 |
| 取得元 | 公式製品・配布案内：[https://www.<wbr>maanmittauslaitos.fi/<wbr>en/maps-and-spatial-<wbr>data/datasets-and-<wbr>interfaces/product-<wbr>descriptions/<wbr>division-<wbr>administrative-areas-<wbr>vector](https://www.maanmittauslaitos.fi/en/maps-and-spatial-data/datasets-and-interfaces/product-descriptions/division-administrative-areas-vector), 公式MapSite配布ページ：[https://asiointi.<wbr>maanmittauslaitos.fi/<wbr>karttapaikka/<wbr>tiedostopalvelu/<wbr>hallinnolliset_<wbr>aluejaot_vektori](https://asiointi.maanmittauslaitos.fi/karttapaikka/tiedostopalvelu/hallinnolliset_aluejaot_vektori)。採用ZIPの実取得URLは未記録。 |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://<wbr>creativecommons.org/<wbr>licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/), ライセンス全文：[https://<wbr>creativecommons.org/<wbr>licenses/by/4.0/<wbr>legalcode.en](https://creativecommons.org/licenses/by/4.0/legalcode.en)。原典製品ページに適用ライセンスと帰属表示の要件が記載されている。 |
| 再配布条件 | 商用利用を含む加工・再配布が可能。提供者名、原典データセット名、提供時点、原典・ライセンスへの参照および加工表示を維持し、提供元の保証・推奨を示唆しない。ライセンスで許される利用を制限する追加条件や技術的制限を課さない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Contains data from the National Land Survey of Finland: Division into administrative areas (vector), 2026 edition, June 2026 update. Licensed under CC BY 4.0.
>
> Selected, reprojected and converted by Galuchat. This is not an official National Land Survey of Finland product.

提供元は提供者名、データセット名および提供時点の表示を求めるが、固定の表示文言は指定していない。上記は本リリースで採用する帰属・加工表示であり、提供時点は採用した2026年6月更新版を示す。原典およびライセンスへのリンクは本NOTICE内に保持する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した製品説明およびCC BY 4.0に、原典GML、原典READMEまたはライセンス全文の同梱指定はない。帰属表示、加工表示および原典・ライセンスへの参照は本NOTICEに保持する。 |

#### 加工内容

* 原典GMLの自治体面を採用し、原典の上位区域参照からMaakunta所属と名称を対応付けた。中間の福祉サービス区域、経済開発センターおよび国はリリースの名称階層に採用していない。
* 原典の名称表記と自治体の島嶼・飛地・穴を保持し、投影座標からWGS 84経緯度へ変換した。別資料による水域・国境の補正は行っていない。
* 原典をGaluchat用の格子区域図、名称辞書および原典コード・別言語名称の対応表へ変換した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性または特定目的への適合性は保証されない。
