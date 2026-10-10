# hr-2026-dgu-gov-hr-au-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | クロアチアDGU集落区域（2026年） |
| リリースパッケージID | `hr-2026-dgu-gov-hr-au-adm` |
| リリース版・基準時点 | 2026年の区域版を含むDGU INSPIRE Administrative Units GML。採用原典の応答生成時刻は2026-09-27T04:27:23.155Z。各区域の版開始時点は個別であり、応答時刻や2026-01-01を全区域共通の行政界基準日とは扱わない。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### DGU INSPIRE Administrative Units

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `croatia_au_2026-grid-512-100.wgsmapset.glc`, `croatia_au_2026-grid-4096-1000.wgsmapset.glc`, `croatia_au_2026-grid-8192-10000.wgsmapset.glc`, `croatia_au_2026.giswordbook`, `croatia_au_2026.utf16.giswordbook`, `croatia_au_2026.names.csv` |
| 入力データまたは上流成果物 | Upravne jedinice INSPIRE（INSPIRE Administrative Units）。DGUのRegistar prostornih jedinicaに由来する行政・集落・統計区域のGML。 |
| 入力バージョン・基準時点 | 2026年の区域版を含むDGU INSPIRE Administrative Units GML。採用原典の応答生成時刻は2026-09-27T04:27:23.155Z。全区域共通の行政界基準日およびデータセット全体の最終変更日は未確認。 |
| 提供者・権利者 | Državna geodetska uprava（DGU、クロアチア国家測地局）。 |
| 取得日 | 未記録。GMLの応答生成時刻を取得日には読み替えない。 |
| 取得元 | [https://dgu.gov.hr/<wbr>otvoreni-podaci/6596](https://dgu.gov.hr/otvoreni-podaci/6596), [https://geoportal.dg<wbr>u.hr/services/atom/a<wbr>u/xml](https://geoportal.dgu.hr/services/atom/au/xml)。対象メタデータ：[https://registri.nip<wbr>p.hr/tcpdf/print/izv<wbr>or_javno.php?id=446](https://registri.nipp.hr/tcpdf/print/izvor_javno.php?id=446)。 |
| ライセンス・利用条件 | Otvorena dozvola（OD、クロアチアのオープンライセンス）。提供者の条件：[https://dgu.gov.hr/<wbr>otvoreni-podaci/6596](https://dgu.gov.hr/otvoreni-podaci/6596)。ライセンス参照：[https://data.gov.hr/<wbr>otvorena-dozvola](https://data.gov.hr/otvorena-dozvola)。法令本文・Prilog I：[https://narodne-novi<wbr>ne.nn.hr/clanci/sluz<wbr>beni/2017_07_67_1577<wbr>.html](https://narodne-novine.nn.hr/clanci/sluzbeni/2017_07_67_1577.html)。 |
| 再配布条件 | 商用・非商用の複製、配布、変更、他データとの統合および製品・アプリケーションへの組込みが認められる。提供者、公開原典URI、ODへの参照および加工表示を維持し、提供者が指定した出典表示・最終変更日がある場合はその表示を維持する。DGUによる公式な支持・公認を示唆しない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Sadrži informacije tijela javne vlasti u skladu s Otvorenom dozvolom
>
> Source: Državna geodetska uprava (DGU), Upravne jedinice INSPIRE. Otvorena dozvola (OD).
>
> Adapted by Galuchat: settlement selection, association of parent names, coordinate transformation, rasterisation and conversion to map, dictionary and code-table formats. This is not an official or endorsed product of DGU.

第1段落は、出典表示が指定されていない場合にODが定める表示文言である。第2・第3段落は本リリースの出典・加工表示であり、DGUが本加工物向けに指定した固定文言ではない。上記表示とともに、次の原典・ライセンスへのリンクを維持する。

原典：[https://geoportal.dg<wbr>u.hr/services/atom/a<wbr>u/xml](https://geoportal.dgu.hr/services/atom/au/xml)。ライセンス：[https://data.gov.hr/<wbr>otvorena-dozvola](https://data.gov.hr/otvorena-dozvola)。

採用原典の応答生成時刻は2026-09-27T04:27:23.155Zであるが、データセット全体の最終変更日を意味しない。原典にある個別区域のbeginLifespanVersionも、全体の最終変更日としては表示しない。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に原典GML・ライセンス全文の同梱指定はない。出典・ライセンス参照と必要な帰属・加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の集落区域を採用し、原典の上位区域への参照関係に基づいて県相当区域と市・自治体の名称を関連付ける。国の共通ノード、統計区・国勢調査区は収録しない。
* 投影座標からWGS 84経緯度へ変換し、区域図・名称辞書・コード対応表へ変換する。原典のクロアチア語名称を保持し、辞書はUTF-8・UTF-16LEへ転記する。
* 別資料による水域・国境の補正は行わない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

Galuchatによる加工物の正確性、完全性、最新性、特定目的への適合性は保証しない。原典がDGUの公開データであることは、本加工物がDGUの公式・公認成果物であることを意味しない。
