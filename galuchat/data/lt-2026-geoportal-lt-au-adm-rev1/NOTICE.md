# lt-2026-geoportal-lt-au-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | リトアニアINSPIRE行政区域（2026-09-01版） |
| リリースパッケージID | `lt-2026-geoportal-lt-au-adm` |
| リリース版・基準時点 | AU_ADMINISTRATIVE_UNITS.gml、AdministrativeUnitのversionIdが示す2026-09-01版。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### リトアニアINSPIRE Administrative Units

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `lithuania_au_2026-grid-512-100.wgsmapset.glc`, `lithuania_au_2026-grid-4096-1000.wgsmapset.glc`, `lithuania_au_2026-grid-8192-10000.wgsmapset.glc`, `lithuania_au_2026.giswordbook`, `lithuania_au_2026.utf16.giswordbook`, `lithuania_au_2026.names.csv` |
| 入力データまたは上流成果物 | Annex I. Administraciniai vienetai（INSPIRE Administrative Units）、AU_ADMINISTRATIVE_UNITS.gml。Registrų centrasの行政区域データに基づくSSVAのINSPIRE派生製品。 |
| 入力バージョン・基準時点 | AdministrativeUnitのversionIdが示す2026-09-01版。beginLifespanVersionはnilであり、全区域共通の法的な行政界基準日は未確認。取得日・ZIP保存日時・メタデータ更新日を区域版へ読み替えない。 |
| 提供者・権利者 | 原典作成者：Valstybės įmonė Registrų centras（RC、登記センター）。INSPIRE派生製品の作成・配布者：Viešoji įstaiga Statybos sektoriaus vystymo agentūra（SSVA、建設部門開発庁）。 |
| 取得日 | 未記録。ZIPメンバーの保存日時を取得日とは扱わない。 |
| 取得元 | 公式データセットメタデータ：[https://www.geoporta<wbr>l.lt/metadata-catalo<wbr>g/catalog/search/re<wbr>source/details.page<wbr>?uuid=%7B4795E964-7E<wbr>AC-42BC-8692-376F676<wbr>AAE1F%7D](https://www.geoportal.lt/metadata-catalog/catalog/search/resource/details.page?uuid=%7B4795E964-7EAC-42BC-8692-376F676AAE1F%7D)。公式配布ZIP：[https://inspire-geop<wbr>ortal.lt/resources/<wbr>atom/au/data/AU_ADMI<wbr>NISTRATIVE_UNITS.zip](https://inspire-geoportal.lt/resources/atom/au/data/AU_ADMINISTRATIVE_UNITS.zip)。 |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）。対象原典への適用は上記公式メタデータのUse Limitationによる。ライセンス：[https://creativecom<wbr>mons.org/licenses/b<wbr>y/4.0/](https://creativecommons.org/licenses/by/4.0/)、本文：[https://creativecom<wbr>mons.org/licenses/b<wbr>y/4.0/legalcode.en](https://creativecommons.org/licenses/by/4.0/legalcode.en)。 |
| 再配布条件 | 商用・非商用の複製・加工・配布が認められる。提供された著作者・著作権・ライセンス・免責表示および原典への参照を維持し、CC BY 4.0への参照、変更内容および既存の加工表示を保持する。提供者の公認・支持を示唆せず、下流の権利行使を妨げる追加条件や技術的制限を設けない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source data: Valstybės įmonė Registrų centras (Centre of Registers, Lithuania). INSPIRE Administrative Units dataset created and distributed by Viešoji įstaiga Statybos sektoriaus vystymo agentūra (Construction Sector Development Agency, Lithuania). Source version: 2026-09-01. Licensed under CC BY 4.0.
>
> Adapted by Galuchat: association of parent names, restriction of district areas to their parent municipalities, representation of areas without district assignment, coordinate transformation, rasterisation and conversion to map, dictionary and code-table formats. This is not an official or endorsed product of Registrų centras or SSVA.

確認した公式メタデータには、本加工物向けの固定の帰属表示文言は指定されていない。上記はCC BY 4.0の帰属・変更表示条件に対応する本リリースの表示である。原典に付された追加の帰属・著作権・免責表示がある場合は、それも維持する。

上記表示とともに、次の原典・ライセンスへのリンクを維持する。

原典：[https://inspire-geop<wbr>ortal.lt/resources/<wbr>atom/au/data/AU_ADMI<wbr>NISTRATIVE_UNITS.zip](https://inspire-geoportal.lt/resources/atom/au/data/AU_ADMINISTRATIVE_UNITS.zip)。ライセンス：[https://creativecom<wbr>mons.org/licenses/b<wbr>y/4.0/](https://creativecommons.org/licenses/by/4.0/)。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典GML・ライセンス全文・公式メタデータ全文の同梱指定はない。出典・ライセンスへの参照と帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の行政区域面を採用し、親区域への参照関係から上位名称を関連付ける。国の共通ノード、境界線および行政機関所在地の点は収録しない。
* 地区の採用範囲を所属自治体内に制限し、自治体内で地区が付されていない部分を自治体所属として表す。架空の地区名・地区コードを付けない。別資料による水域・国境の補正は行わない。
* ETRS89経緯度をWGS 84経緯度へ変換し、区域図・名称辞書・コード対応表へ変換する。原典のリトアニア語名称を保持し、辞書をUTF-8・UTF-16LEへ転記する。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典およびGaluchatによる加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。原典の公開機関が本加工物の内容を確認・公認したことを意味しない。
