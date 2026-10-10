# br-2022-ibge-gov-br-distritos-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | ブラジルIBGE地区区域（Censo Demográfico 2022） |
| リリースパッケージID | `br-2022-ibge-gov-br-distritos-adm` |
| リリース版・基準時点 | Censo Demográfico 2022のMalha de Distritos。区域の基準日は2022年7月31日。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### IBGE Censo Demográfico 2022：Malha de Distritos

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `brazil_distritos_2022-grid-512-100.wgsmapset.glc`, `brazil_distritos_2022-grid-4096-1000.wgsmapset.glc`, `brazil_distritos_2022-grid-8192-10000.wgsmapset.glc`, `brazil_distritos_2022.giswordbook`, `brazil_distritos_2022.utf16.giswordbook`, `brazil_distritos_2022.names.csv` |
| 入力データまたは上流成果物 | Censo Demográfico 2022：Malha de Distritos – Brasil。原典ファイルは`BR_distritos_CD2022.zip`。 |
| 入力バージョン・基準時点 | Censo Demográfico 2022の確定版区域資料。区域の基準日は2022年7月31日。原典ZIP内のファイル時刻2024年11月8日を区域の基準日とは扱わない。 |
| 提供者・権利者 | Instituto Brasileiro de Geografia e Estatística（IBGE、ブラジル地理統計院）。 |
| 取得日 | 未記録。原典ファイルの時刻や手元のファイル更新時刻を取得日には読み替えない。 |
| 取得元 | 公式製品ページ：[https://www.ibge.gov.<wbr>br/estatisticas/soci<wbr>ais/populacao/22827-<wbr>censo-demografico-20<wbr>22.html?edicao=41851<wbr>&t=resultados](https://www.ibge.gov.br/estatisticas/sociais/populacao/22827-censo-demografico-2022.html?edicao=41851&t=resultados)。固定配布URL：[https://geoftp.ibge.<wbr>gov.br/organizacao_d<wbr>o_territorio/malhas_<wbr>territoriais/malhas_<wbr>de_setores_censitari<wbr>os__divisoes_intramu<wbr>nicipais/censo_2022/<wbr>distritos/shp/BR/BR_<wbr>distritos_CD2022.zip](https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_de_setores_censitarios__divisoes_intramunicipais/censo_2022/distritos/shp/BR/BR_distritos_CD2022.zip)。 |
| ライセンス・利用条件 | ブラジル連邦政府の公開データ自由利用規定を利用根拠とする。政令Decreto nº 8.777/2016の第3条・第4条（2019年改正を含む）：[https://www.planalto.<wbr>gov.br/ccivil_03/_at<wbr>o2015-2018/2016/dec<wbr>reto/d8777.htm](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8777.htm)。法律Lei nº 14.129/2021の第2条・第29条：[https://www.planalto.<wbr>gov.br/ccivil_03/_at<wbr>o2019-2022/2021/lei<wbr>/l14129.htm](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm)。IBGEの適用方針：[https://www.ibge.gov.<wbr>br/acesso-informacao<wbr>/acoes-e-programas/i<wbr>nfraestrutura-nacion<wbr>al-de-dados-abertos-<wbr>inda.html?lang=pt-BR](https://www.ibge.gov.br/acesso-informacao/acoes-e-programas/infraestrutura-nacional-de-dados-abertos-inda.html?lang=pt-BR)。本原典について個別のCCライセンス指定は未確認であり、別年のMMDのCC BY 4.0互換条件を本原典へ転用しない。 |
| 再配布条件 | 上記法令に基づく公開データの自由利用・再利用を根拠として加工・再配布する。本NOTICEの出典・加工表示を維持し、IBGEの公式・公認成果物と誤認させない。第三者の権利および法令で保護される情報に自由利用規定を拡張しない。確認した条件に個別の事前許可取得要求はないが、法令上の利用根拠は個別のCCライセンス取得を意味しない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Fonte: IBGE, Censo Demográfico 2022, Malha de Distritos – Brasil.
>
> Adapted by Galuchat: coordinate transformation, rasterisation and conversion to map, dictionary and code-table formats. This is not an official or endorsed product of IBGE.

上記は本リリースの出典・加工表示であり、IBGEが本加工物向けに指定した固定文言ではない。確認した法令・製品資料には、固定の帰属文言や加工表示文言の指定はない。原典と本加工物を区別するために表示を保持する。原典へのリンクは「取得元」、利用根拠へのリンクは「ライセンス・利用条件」に記載したものを維持する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に、原典Shapefile、技術資料、法令本文またはライセンス全文の同梱指定はない。出典・加工表示と利用根拠への参照は本NOTICEに保持する。 |

#### 加工内容

* 原典の地区区域と州・自治体相当区域への所属情報から、区域図、名称辞書およびコード対応表を構成する。名称は原典のポルトガル語表記を保持する。
* 原典の州所属の湖面運用区域も保持し、地区・自治体の原典コードと名称の欠損はそのまま保持する。無名称の運用区域には、原典コードとは別の加工用IDと辞書表示名を付与する。
* SIRGAS 2000経緯度をWGS 84経緯度へ変換し、区域を格子化してGaluchatの形式へ変換する。名称辞書はUTF-8・UTF-16LEへ転記する。
* 別資料による海岸線・内水面・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

Galuchatによる加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。原典および本加工物は、法的な行政境界、土地・島嶼の所有または行政上の所属を確定する証明資料として使用しない。IBGEは原典を別目的で利用した結果について責任を負わない。原典の利用上の留意事項は、Censo Demográfico 2022：Malha de Setores Censitáriosの技術資料（本文60〜61ページ）も参照する：[https://biblioteca.i<wbr>bge.gov.br/visualiza<wbr>cao/livros/liv102138<wbr>.pdf](https://biblioteca.ibge.gov.br/visualizacao/livros/liv102138.pdf)。
