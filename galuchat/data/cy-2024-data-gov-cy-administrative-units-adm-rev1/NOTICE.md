# cy-2024-data-gov-cy-administrative-units-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | キプロス行政区域（2024年8月版） |
| リリースパッケージID | `cy-2024-data-gov-cy-administrative-units-adm` |
| リリース版・基準時点 | Administrative_Units_GR_Shapefiles_AUGUST2024、2024年8月版。2024年7月の自治体再編を原典に収録された範囲で反映する。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### キプロス土地・測量局の行政区域

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `cyprus_admin_2024-grid-512-100.wgsmapset.glc`, `cyprus_admin_2024-grid-4096-1000.wgsmapset.glc`, `cyprus_admin_2024-grid-8192-10000.wgsmapset.glc`, `cyprus_admin_2024.giswordbook`, `cyprus_admin_2024.utf16.giswordbook`, `cyprus_admin_2024.names.csv` |
| 入力データまたは上流成果物 | Διοικητικά Όρια Δήμων και Κοινοτήτων - Διοικητικός Χάρτης（市・共同体の行政界―行政地図）。配布リソース：Διοικητικά Όρια - Όλα (Άπο 1/7/2024) (shp)。 |
| 入力バージョン・基準時点 | Administrative_Units_GR_Shapefiles_AUGUST2024、2024年8月版。2024年7月の自治体再編を原典に収録された範囲で反映する。 |
| 提供者・権利者 | Republic of Cyprus, Department of Lands and Surveys（Τμήμα Κτηματολογίου και Χωρομετρίας、キプロス土地・測量局）。国家オープンデータポータルdata.gov.cyを通じて配布。 |
| 取得日 | 2026-10-06。取得したZIPのファイルスタンプに基づく（日本時間）。 |
| 取得元 | 公式配布ページ：[https://www.data.gov<wbr>.cy/en/dataset/187](https://www.data.gov.cy/en/dataset/187)。固定ダウンロードURL：[https://www.data.gov<wbr>.cy/sites/default/fi<wbr>les/Administrative_U<wbr>nits_GR_Shapefiles_A<wbr>UGUST2024_0.zip](https://www.data.gov.cy/sites/default/files/Administrative_Units_GR_Shapefiles_AUGUST2024_0.zip)。 |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International（CC BY 4.0）：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。ライセンス本文：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/legalcode.en](https://creativecommons.org/licenses/by/4.0/legalcode.en)。原典への適用は上記公式配布ページに明記されている。 |
| 再配布条件 | 商用利用を含む複製・加工・再配布が可能。提供者への帰属、原典・ライセンスへの参照、提供された権利・免責表示および変更表示を維持する。原典に対する許諾を制限する追加条件・技術的制限を課さず、公式性・公認・推薦を示唆しない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示と本NOTICEに記載した原典・ライセンス参照を維持すること。

> Source: Republic of Cyprus, Department of Lands and Surveys. Administrative boundaries, August 2024 edition. Licensed under CC BY 4.0. Download date: 2026-10-06, based on the downloaded ZIP file timestamp (Asia/Tokyo).
>
> Adapted by Galuchat. This is not an official or endorsed product of the original provider.

提供者名とCC BY 4.0の指定は公式配布ページに基づく。この配布物専用の固定帰属文は確認されていない。上記は本リリースの出典・版・加工表示である。CC BY 4.0は帰属表示と変更表示を求める。加工表示の詳細は次の「加工内容」に記載する。

この公開配布物のCC BY 4.0に従った複製・加工・再配布には、別途の個別申請は不要である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典Shapefile・ライセンス全文・付属XMLの同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の県、市・共同体等の細区画、街区および再編後の市名を採用し、合併後の所属を原典の名称表記に基づいて関連付ける。合併前の細区画を構成地区として保持し、街区のある区画では下位の街区を採用する。共同体群を自治体として追加しない。
* 原典のギリシャ語名称を使用する。途中までしか収録されていない名称の補完や識別用の名称変更は行わず、同名の別領域を保持する。原典コードとギリシャ語・ラテン文字名称の対応を付属表に保持する。
* 投影座標からWGS 84経緯度へ変換し、区域図・名称辞書・コード対応表へ変換する。辞書はUTF-8・UTF-16LEで収録する。
* 別資料による水域・国境の補正、政治的な支配範囲による区域除外および別年の区域・名称による更新は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典ライセンスの免責を維持する。原典およびGaluchatの加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。
