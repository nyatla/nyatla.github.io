# si-2026-ipi-eprostor-gov-si-rpe-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | スロベニアRPE集落区域（2026-09-27配布版） |
| リリースパッケージID | `si-2026-ipi-eprostor-gov-si-rpe-adm` |
| リリース版・基準時点 | RPE_SLO_PROSTORSKE_ENOTE_20260927.zipの2026-09-27配布版。ファイル名の版識別日であり、各区域のDATUM_SYSとは区別する。全区域共通の法的な行政界基準日とは断定しない。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### GURS Register prostorskih enot

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `slovenia_rpe_2026-grid-512-100.wgsmapset.glc`, `slovenia_rpe_2026-grid-4096-1000.wgsmapset.glc`, `slovenia_rpe_2026-grid-8192-10000.wgsmapset.glc`, `slovenia_rpe_2026.giswordbook`, `slovenia_rpe_2026.utf16.giswordbook`, `slovenia_rpe_2026.names.csv` |
| 入力データまたは上流成果物 | Register prostorskih enot（RPE）。採用するレイヤーはnaseljaとobcine。 |
| 入力バージョン・基準時点 | RPE_SLO_PROSTORSKE_ENOTE_20260927.zipの2026-09-27配布版。ファイル名の版識別日であり、各区域のDATUM_SYSとは区別する。全区域共通の法的な行政界基準日とは断定しない。 |
| 提供者・権利者 | Geodetska uprava Republike Slovenije（GURS、スロベニア測量地図局）。 |
| 取得日 | 未記録。配布版日付・区域更新日を取得日には読み替えない。 |
| 取得元 | [https://www.e-prosto<wbr>r.gov.si/podrocja/pr<wbr>ostorske-enote-in-na<wbr>slovi/register-prost<wbr>orskih-enot/](https://www.e-prostor.gov.si/podrocja/prostorske-enote-in-naslovi/register-prostorskih-enot/), [https://ipi.eprostor<wbr>.gov.si/jgp/](https://ipi.eprostor.gov.si/jgp/) |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。提供条件：[https://www.e-prosto<wbr>r.gov.si/en/access-t<wbr>o-geodetic-data/](https://www.e-prostor.gov.si/en/access-to-geodetic-data/)。 |
| 再配布条件 | 商用利用を含む複製・加工・再配布が可能。提供者への帰属、原典・ライセンスへの参照、提供された権利・免責表示および変更表示を維持する。原典に対する許諾を制限する追加条件・技術的制限を課さず、公式性・公認・推薦を示唆しない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示と本NOTICEに記載した原典・ライセンス参照を維持すること。

> Geodetska uprava Republike Slovenije, Register prostorskih enot (RPE), source distribution edition 2026-09-27. CC BY 4.0.
>
> Adapted by Galuchat. This is not an official or endorsed product of the original provider.

GURSは、提供者名、データの種類、対象時点またはデータベースの時点を示す出典表示を求める。上記はその要素を含む本リリースの表示文であり、全文が提供元の指定する固定文言ではない。2026-09-27は採用ZIPの配布版識別日であり、各区域共通の法的な境界基準日ではない。

CC BY 4.0は帰属表示と変更表示を求める。加工表示の詳細は次の「加工内容」に記載する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典ファイル・ライセンス全文・原典メタデータの同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の集落面を採用し、原典の親コードに基づいて自治体名称を関連付ける。その他の区割りは収録しない。
* 原典の主名称を保持し、別言語名称を名称対応表へ転記する。投影座標からWGS 84経緯度に変換して、区域図・名称辞書・コード対応表へ変換する。辞書はUTF-8・UTF-16LEで収録する。
* 別資料による水域・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

GURSは原典とサービスを現状のまま提供し、内容の誤り・欠陥、利用・誤解釈に伴う損害および継続的な利用可能性について免責を掲げる。原典の免責を維持する。原典およびGaluchatの加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。
