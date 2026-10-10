# ro-2025-ancpi-ro-uat-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | ルーマニアANCPI地方行政区域（2025-03-26） |
| リリースパッケージID | `ro-2025-ancpi-ro-uat-adm` |
| リリース版・基準時点 | ANCPIのUnitate_administrativa_UATおよびUnitate_administrativa_judet、2025-03-26版。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### ANCPI Unități administrativ-teritoriale

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `romania_uat_2025-grid-512-100.wgsmapset.glc`, `romania_uat_2025-grid-4096-1000.wgsmapset.glc`, `romania_uat_2025-grid-8192-10000.wgsmapset.glc`, `romania_uat_2025.giswordbook`, `romania_uat_2025.utf16.giswordbook`, `romania_uat_2025.names.csv` |
| 入力データまたは上流成果物 | ANCPI Unități administrativ-teritoriale。区域形状・末端名称・種類はUnitate_administrativa_UAT、県名・県コードはUnitate_administrativa_judetのDBF属性。geo-spatial.orgによる県名補完済みの加工後製品ではなく、ANCPIの原典形式を使用する。 |
| 入力バージョン・基準時点 | 両原典のbeginVersが示す2025-03-26版。付属XMLの同期日や配布サーバーの更新日時を区域の基準日とは扱わない。 |
| 提供者・権利者 | Agenția Națională de Cadastru și Publicitate Imobiliară（ANCPI、ルーマニア国家地籍・不動産公示庁）。県DBFの配布経由はgeo-spatial.org。 |
| 取得日 | UAT原典の取得日は未記録。県DBFは2026-10-03取得。 |
| 取得元 | 公式提供画面：[https://geoportal.an<wbr>cpi.ro/portal/apps/w<wbr>ebappviewer/index.h<wbr>tml?id=faeba2d173374<wbr>445b1f13512bd477bb2](https://geoportal.ancpi.ro/portal/apps/webappviewer/index.html?id=faeba2d173374445b1f13512bd477bb2)。UATの実際の取得URLは未記録。県DBFの取得先：[https://services.geo<wbr>-spatial.org/data/br<wbr>ute/institutii_roman<wbr>ia/ancpi/limite_admi<wbr>nistrative/Unitate_a<wbr>dministrativa_judet.<wbr>dbf](https://services.geo-spatial.org/data/brute/institutii_romania/ancpi/limite_administrative/Unitate_administrativa_judet.dbf)。 |
| ライセンス・利用条件 | Licența de utilizare a informațiilor deschise（Set date spațiale: Unități administrativ-teritoriale）。Licența pentru o Guvernare Deschisă - OGL ROU 1.0を対象データに適用したANCPIの利用条件：[https://geoportal.an<wbr>cpi.ro/portal/sharin<wbr>g/rest/content/item<wbr>s/8077dd16e957477d9c<wbr>c9b457f5f17cac/data](https://geoportal.ancpi.ro/portal/sharing/rest/content/items/8077dd16e957477d9cc9b457f5f17cac/data)。県データに同条件を掲示するANCPIの提供情報：[https://geoportal.an<wbr>cpi.ro/portal/home/i<wbr>tem.html?id=640d6f6e<wbr>2f9b410086b577d2f36e<wbr>ba7d](https://geoportal.ancpi.ro/portal/home/item.html?id=640d6f6e2f9b410086b577d2f36eba7d)。 |
| 再配布条件 | 複製・公開・配布・加工および商用・非商用の再利用が認められる。提供者の出典表示と、可能な範囲で公式原典URLを維持する。公式な立場・特別な関係を示唆せず、情報を歪めたり誤解を招く表示を行ったりしない。個人情報保護、法定の機密保持その他の強行法規に従う。個人情報、許諾者が権限を持たない第三者の権利、紋章等の除外対象へこの許諾を広げない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Conține informații publice în baza Licenței pentru Guvernare Deschisă v1.0
>
> Source: Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI), Unități administrativ-teritoriale, version 2025-03-26. County attributes obtained via geo-spatial.org.
>
> Adapted by Galuchat: association of county names by source codes, coordinate transformation, rasterisation and conversion to map, dictionary and code-table formats. This is not an official or endorsed product of ANCPI or geo-spatial.org.

第1段落は、個別の出典声明がない場合等に原典利用条件が定める表示文言である。第2・第3段落は本リリースの出典・加工表示であり、提供者が本加工物向けに指定した固定文言ではない。上記表示とともに、次の原典・利用条件へのリンクを維持する。

原典：[https://geoportal.an<wbr>cpi.ro/portal/apps/w<wbr>ebappviewer/index.h<wbr>tml?id=faeba2d173374<wbr>445b1f13512bd477bb2](https://geoportal.ancpi.ro/portal/apps/webappviewer/index.html?id=faeba2d173374445b1f13512bd477bb2)。利用条件：[https://geoportal.an<wbr>cpi.ro/portal/sharin<wbr>g/rest/content/item<wbr>s/8077dd16e957477d9c<wbr>c9b457f5f17cac/data](https://geoportal.ancpi.ro/portal/sharing/rest/content/items/8077dd16e957477d9cc9b457f5f17cac/data)。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典Shapefile・付属XML・ライセンス全文の同梱指定はない。出典・利用条件への参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典のUATを採用し、ブカレストのセクターも保持する。原典コードによる所属関係から、同版の県DBFの名称を関連付ける。県境の線データLimita_administrativa_judetやINSのSIRUTAは補完原典として使用しない。
* 投影座標系定義を正規化し、WGS 84経緯度へ変換する。区域図・名称辞書・コード対応表へ変換し、区域図の値を辞書コードに対応付ける。
* 原典の名称・末端区域の種類を保持し、辞書をUTF-8・UTF-16LEへ転記する。別資料による水域・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典およびGaluchatによる加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。ANCPIの公開データを使用していることは、本加工物が公式・公認成果物であることを意味しない。
