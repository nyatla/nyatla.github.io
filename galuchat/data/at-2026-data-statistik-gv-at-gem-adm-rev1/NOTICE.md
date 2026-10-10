# at-2026-data-statistik-gv-at-gem-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | オーストリア自治体・ウィーン市区（2026-01-01） |
| リリースパッケージID | `at-2026-data-statistik-gv-at-gem-adm` |
| リリース版・基準時点 | STATISTIK_AUSTRIA_GEM_20260101、基準日2026-01-01。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Statistik Austria Gemeinden 2026

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `austria_gem_2026-grid-512-100.wgsmapset.glc`, `austria_gem_2026-grid-4096-1000.wgsmapset.glc`, `austria_gem_2026-grid-8192-10000.wgsmapset.glc`, `austria_gem_2026.giswordbook`, `austria_gem_2026.utf16.giswordbook`, `austria_gem_2026.names.csv` |
| 入力データまたは上流成果物 | Gliederung Österreichs in Gemeinden — Gemeinden 2026-01-01（STATISTIK_AUSTRIA_GEM_20260101）。州名・コード構成の確認には、同提供者のRegionale Gliederungenと区域コードの説明を参照する。 |
| 入力バージョン・基準時点 | STATISTIK_AUSTRIA_GEM_20260101、基準日2026-01-01。 |
| 提供者・権利者 | Statistik Austria, Bundesanstalt Statistik Österreich。 |
| 取得日 | 未記録。 |
| 取得元 | [https://data.statist<wbr>ik.gv.at/web/meta.js<wbr>p?dataset=OGDEXT_GEM<wbr>_1](https://data.statistik.gv.at/web/meta.jsp?dataset=OGDEXT_GEM_1), [https://www.statisti<wbr>k.gv.at/gs-open/GEOD<wbr>ATA/ows?service=WFS&<wbr>version=1.0.0&reques<wbr>t=GetFeature&typeNam<wbr>e=GEODATA:STATISTIK_<wbr>AUSTRIA_GEM_20260101<wbr>&outputFormat=SHAPE-<wbr>ZIP&format_options=C<wbr>HARSET:UTF-8](https://www.statistik.gv.at/gs-open/GEODATA/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GEODATA:STATISTIK_AUSTRIA_GEM_20260101&outputFormat=SHAPE-ZIP&format_options=CHARSET:UTF-8) |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。提供条件：[https://data.statist<wbr>ik.gv.at/web/meta.js<wbr>p?dataset=OGDEXT_GEM<wbr>_1](https://data.statistik.gv.at/web/meta.jsp?dataset=OGDEXT_GEM_1)。 |
| 再配布条件 | 商用利用を含む複製・加工・再配布が可能。提供者への帰属、原典・ライセンスへの参照、提供された権利・免責表示および変更表示を維持する。原典に対する許諾を制限する追加条件・技術的制限を課さず、公式性・公認・推薦を示唆しない。 |

提供者の一般利用条件：[https://data.statistik.<wbr>gv.at/web/?page=terms](https://data.statistik.gv.at/web/?page=terms)。許諾本体はCC BY 4.0であり、併記されたNetiquetteでは、利用したアプリ・サービスについて提供者への情報提供が呼びかけられている。

州名の公式参照：[https://www.statistik.<wbr>at/services/tools/<wbr>regionale-internationale-<wbr>daten/regionale-daten-<wbr>und-gliederungen/<wbr>regionale-gliederungen](https://www.statistik.at/services/tools/regionale-internationale-daten/regionale-daten-und-gliederungen/regionale-gliederungen)。コード構成の公式参照：[https://www.statistik.<wbr>at/fileadmin/pages/<wbr>489/HandbuchC2<wbr>Merkmalskatalog2024_04.pdf](https://www.statistik.at/fileadmin/pages/489/HandbuchC2Merkmalskatalog2024_04.pdf)。これらの確認資料自体は同梱しない。

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示と本NOTICEに記載した原典・ライセンス参照を維持すること。

> Datenquelle: Statistik Austria - data.statistik.gv.at
>
> Adapted by Galuchat. This is not an official or endorsed product of the original provider.

原典メタデータのFull name of data sourceに指定された出典表記を維持する。CC BY 4.0に基づく変更表示およびライセンス参照も維持する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典ファイル・ライセンス全文の同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 自治体面とウィーン市区の原典面を採用し、原典の州コードに対応する公式州名を付ける。ウィーン市区を統合しない。
* 原典のUTF-8名称を保持し、投影座標からWGS 84経緯度に変換して、区域図・名称辞書・コード対応表へ変換する。
* 別資料による水域・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。原典ライセンス・提供条件の免責を維持し、利用者の責任で利用すること。
