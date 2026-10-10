# lv-2026-data-gov-lv-varis-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | ラトビア住所登録行政区域（2026年） |
| リリースパッケージID | `lv-2026-data-gov-lv-varis-adm` |
| リリース版・基準時点 | 日次更新のAW_SHP.zip。採用原典のZIPメンバー時刻とDBF更新日は2026-09-29。2026-01-01基準の行政界ではない。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### VZD Valsts adrešu reģistrs

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `latvia_varis_2026-grid-512-100.wgsmapset.glc`, `latvia_varis_2026-grid-4096-1000.wgsmapset.glc`, `latvia_varis_2026-grid-8192-10000.wgsmapset.glc`, `latvia_varis_2026.giswordbook`, `latvia_varis_2026.utf16.giswordbook`, `latvia_varis_2026.names.csv` |
| 入力データまたは上流成果物 | Valsts adrešu reģistra atvērtie dati — Adrešu reģistra telpiskie dati（AW_SHP.zip）。採用レイヤーはPagasti、Pilsetas、Novadi。 |
| 入力バージョン・基準時点 | 日次更新のAW_SHP.zip。採用原典のZIPメンバー時刻とDBF更新日は2026-09-29。2026-01-01基準の行政界ではない。 |
| 提供者・権利者 | Valsts zemes dienests（VZD、ラトビア国家土地局）。 |
| 取得日 | 未記録。 |
| 取得元 | [https://data.gov.lv/<wbr>dati/eng/dataset/var<wbr>is-atvertie-dati](https://data.gov.lv/dati/eng/dataset/varis-atvertie-dati), [https://data.gov.lv/<wbr>dati/eng/dataset/var<wbr>is-atvertie-dati/res<wbr>ource/b643b1b3-223f-<wbr>4394-9beb-18524f8b0b<wbr>82](https://data.gov.lv/dati/eng/dataset/varis-atvertie-dati/resource/b643b1b3-223f-4394-9beb-18524f8b0b82), [https://data.gov.lv/<wbr>dati/dataset/6b06a7e<wbr>8-dedf-4705-a47b-2a7<wbr>c51177473/resource/b<wbr>643b1b3-223f-4394-9b<wbr>eb-18524f8b0b82/down<wbr>load/aw_shp.zip](https://data.gov.lv/dati/dataset/6b06a7e8-dedf-4705-a47b-2a7c51177473/resource/b643b1b3-223f-4394-9beb-18524f8b0b82/download/aw_shp.zip) |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。提供条件：[https://data.gov.lv/<wbr>dati/eng/dataset/var<wbr>is-atvertie-dati/res<wbr>ource/b643b1b3-223f-<wbr>4394-9beb-18524f8b0b<wbr>82](https://data.gov.lv/dati/eng/dataset/varis-atvertie-dati/resource/b643b1b3-223f-4394-9beb-18524f8b0b82)。 |
| 再配布条件 | 商用利用を含む複製・加工・再配布が可能。提供者への帰属、原典・ライセンスへの参照、提供された権利・免責表示および変更表示を維持する。原典に対する許諾を制限する追加条件・技術的制限を課さず、公式性・公認・推薦を示唆しない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示と本NOTICEに記載した原典・ライセンス参照を維持すること。

> Source: Valsts zemes dienests (VZD), Valsts adrešu reģistra telpiskie dati, local source revision 2026-09-29. CC BY 4.0.
>
> Adapted by Galuchat. This is not an official or endorsed product of the original provider.

CC BY 4.0は帰属表示と変更表示を求める。対象ZIPの公開条件では、この製品専用の固定文言は指定されていない。上記は本リリースの帰属・加工表示である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典ファイル・ライセンス全文の同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

VZDの技術仕様PDF（公式参照：[https://www.vzd.gov.<wbr>lv/lv/media/5020/<wbr>download?attachment=](https://www.vzd.gov.lv/lv/media/5020/download?attachment=)）はデータ本体とは別の著作物であり、文書自体に転載制限がある。データのCC BY 4.0を根拠に同PDFの転載・同梱を許諾するものではない。

#### 加工内容

* 市・Pagastsの原典面を採用し、住所登録の親コードに従ってNovadsの名称を結合する。国に直接所属する市も保持する。
* 原典コードと名称を保持し、投影座標からWGS 84経緯度へ変換して、区域図・名称辞書・コード対応表へ変換する。
* 別資料による水域・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。原典ライセンス・提供条件の免責を維持し、利用者の責任で利用すること。
