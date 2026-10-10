# cz-2026-cuzk-gov-cz-ruian-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | チェコRÚIAN自治体区域（2026年） |
| リリースパッケージID | `cz-2026-cuzk-gov-cz-ruian-adm` |
| リリース版・基準時点 | RÚIAN国別SHP、保存済みAtomの更新時刻2026-09-27T20:32:18+02:00に対応する原典。これは2026-01-01基準の行政界ではない。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### ČÚZK RÚIAN国別SHP

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `czechia_ruian_2026-grid-512-100.wgsmapset.glc`, `czechia_ruian_2026-grid-4096-1000.wgsmapset.glc`, `czechia_ruian_2026-grid-8192-10000.wgsmapset.glc`, `czechia_ruian_2026.giswordbook`, `czechia_ruian_2026.utf16.giswordbook`, `czechia_ruian_2026.names.csv` |
| 入力データまたは上流成果物 | RUIAN stát - SHP: Česká republika [1]。採用するレイヤーはOBCE_P、VUSC_P、OKRESY_P。 |
| 入力バージョン・基準時点 | RÚIAN国別SHP、保存済みAtomの更新時刻2026-09-27T20:32:18+02:00に対応する原典。これは2026-01-01基準の行政界ではない。 |
| 提供者・権利者 | Český úřad zeměměřický a katastrální（ČÚZK）。 |
| 取得日 | 未記録。 |
| 取得元 | [https://services.cuz<wbr>k.gov.cz/](https://services.cuzk.gov.cz/), [https://atom.cuzk.go<wbr>v.cz/RUIAN-STATY-SHP<wbr>/datasetFeeds/CZ-000<wbr>25712-CUZK_RUIAN-STA<wbr>TY-SHP_1.xml](https://atom.cuzk.gov.cz/RUIAN-STATY-SHP/datasetFeeds/CZ-00025712-CUZK_RUIAN-STATY-SHP_1.xml), [https://services.cuz<wbr>k.gov.cz/shp/stat/ep<wbr>sg-5514/1.zip](https://services.cuzk.gov.cz/shp/stat/epsg-5514/1.zip) |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。提供条件：[https://www.cuzk.gov<wbr>.cz/Uvod/Produkty-a-<wbr>sluzby/Otevrena-data<wbr>/Otevrena-data-zakla<wbr>dni-informace.aspx](https://www.cuzk.gov.cz/Uvod/Produkty-a-sluzby/Otevrena-data/Otevrena-data-zakladni-informace.aspx)。 |
| 再配布条件 | 商用利用を含む複製・加工・再配布が可能。提供者への帰属、原典・ライセンスへの参照、提供された権利・免責表示および変更表示を維持する。原典に対する許諾を制限する追加条件・技術的制限を課さず、公式性・公認・推薦を示唆しない。 |

保存済みAtomのrightsには条件なしとの記述があるが、本リリースでは現行の公式提供条件に従いCC BY 4.0を適用条件として案内する。条件なしの表記から、帰属表示が不要であるとは扱わない。

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示と本NOTICEに記載した原典・ライセンス参照を維持すること。

> Source: Český úřad zeměměřický a katastrální (ČÚZK), RÚIAN, source update 2026-09-27. CC BY 4.0.
>
> Adapted by Galuchat. This is not an official or endorsed product of the original provider.

CC BY 4.0は帰属表示と変更表示を求める。確認した提供条件では、この製品専用の固定文言は指定されていない。上記は本リリースの帰属・加工表示である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典ファイル・ライセンス全文の同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 自治体相当の原典面を採用し、原典コードで広域自治体・郡の名称を結合する。軍事区域を保持し、同名別コードを区別する。
* CP1250の原典名称をUTF-8・UTF-16LEへ転記し、投影座標からWGS 84経緯度に変換して、区域図・名称辞書・コード対応表へ変換する。
* 別資料による水域・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。原典ライセンス・提供条件の免責を維持し、利用者の責任で利用すること。
