# nl-2026-cbs-nl-wijkbuurtkaart-stat-buurt NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | CBS Wijk- en Buurtkaart 2026 District |
| リリースパッケージID | `nl-2026-cbs-nl-wijkbuurtkaart-stat-buurt` |
| リリース版・基準時点 | Wijk- en Buurtkaart 2026 versie 0。自治体・州対応表は2026-01-01基準。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### CBS Wijk- en Buurtkaart 2026 versie 0

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。文書については、その中の原典由来の情報に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `netherlands_district_2026-grid-512-100.wgsmapset.glc`, `netherlands_district_2026-grid-1024-1000.wgsmapset.glc`, `netherlands_district_2026-grid-8192-10000.wgsmapset.glc`, `netherlands_district_2026.giswordbook`, `netherlands_district_2026.utf16.giswordbook`, `netherlands_district_2026.names.csv` |
| 入力データまたは上流成果物 | CBS Wijk- en Buurtkaart 2026 versie 0の`buurten`レイヤ。 |
| 入力バージョン・基準時点 | 2026年版、versie 0。原典ZIP名は`WijkBuurtkaart_2026_v0.zip`。 |
| 提供者・権利者 | Centraal Bureau voor de Statistiek（CBS）。自治体境界の原典はKadasterであり、CBSとKadasterの両者を出典表示する。 |
| 取得日 | 未記録。 |
| 取得元 | 公式配布ページ：[https://www.cbs.nl/n<wbr>l-nl/dossier/nederla<wbr>nd-regionaal/geograf<wbr>ische-data/wijk-en-b<wbr>uurtkaart-2026](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/wijk-en-buurtkaart-2026)。直接配布先：[https://geodata.cbs.<wbr>nl/files/Wijkenbuurt<wbr>kaart/WijkBuurtkaart<wbr>_2026_v0.zip](https://geodata.cbs.nl/files/Wijkenbuurtkaart/WijkBuurtkaart_2026_v0.zip)。 |
| ライセンス・利用条件 | 配布ページは、CBSとKadasterを出典表示することを条件としてデジタルgeometryの公開を認めている。CBSの一般Copyright方針は、別段の指定がないコンテンツにCC BY 4.0を適用する。CC BY 4.0：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。CBSのCopyright方針：[https://www.cbs.nl/e<wbr>n-gb/about-us/websit<wbr>e/copyright](https://www.cbs.nl/en-gb/about-us/website/copyright)。 |
| 再配布条件 | CBSとKadasterの出典表示を維持する。適用されるCC BY 4.0に従い、原典とライセンスへの参照、加工表示を保持し、許諾された再利用を制限する追加条件を課さない。提供元が加工物を公認・推奨していると示さない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source: CBS and Kadaster, Wijk- en Buurtkaart 2026 versie 0.
>
> Derived and processed by Galuchat. Not endorsed by CBS or Kadaster.

原典はCBSとKadasterの両者の出典表示を求めるが、固定の表示文言は指定していない。上記はその条件を満たす本リリースの表示である。原典および適用ライセンスへの参照は、上表のURLとともに保持する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した利用条件に原典ファイルやライセンス全文のファイル同梱義務はない。出典、原典・ライセンスへの参照および加工表示を本NOTICEに保持する。 |

#### 加工内容

* `buurten`レイヤを採用し、外国領として区分された面を除外した。原典の陸地面・水域面は保持した。
* 座標をWGS 84経緯度へ変換してZ成分を除去し、区域図、名称辞書および原典コードとの対応表へ変換した。
* 名称階層と陸地・水域属性を名称辞書へ対応付け、同じ組を持つ原典区域を同じ辞書レコードへ集約した。

### CBS Gemeentelijke indeling op 1 januari 2026

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。文書については、その中の原典由来の情報に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `netherlands_district_2026-grid-512-100.wgsmapset.glc`, `netherlands_district_2026-grid-1024-1000.wgsmapset.glc`, `netherlands_district_2026-grid-8192-10000.wgsmapset.glc`, `netherlands_district_2026.giswordbook`, `netherlands_district_2026.utf16.giswordbook`, `netherlands_district_2026.names.csv` |
| 入力データまたは上流成果物 | Gemeentelijke indeling op 1 januari 2026。自治体コード・名称と州コード・名称の対応表。 |
| 入力バージョン・基準時点 | 2026-01-01。原典ファイル名は`gemeenten-alfabetisch-2026.xlsx`。 |
| 提供者・権利者 | Centraal Bureau voor de Statistiek（CBS）。 |
| 取得日 | 未記録。 |
| 取得元 | 公式配布ページ：[https://www.cbs.nl/n<wbr>l-nl/onze-diensten/m<wbr>ethoden/classificati<wbr>es/overig/gemeenteli<wbr>jke-indelingen-per-j<wbr>aar/indeling-per-jaa<wbr>r/gemeentelijke-inde<wbr>ling-op-1-januari-20<wbr>26](https://www.cbs.nl/nl-nl/onze-diensten/methoden/classificaties/overig/gemeentelijke-indelingen-per-jaar/indeling-per-jaar/gemeentelijke-indeling-op-1-januari-2026)。直接配布先：[https://www.cbs.nl/-<wbr>/media/cbs/onze-dien<wbr>sten/methoden/classi<wbr>ficaties/overig/geme<wbr>enten-alfabetisch-20<wbr>26.xlsx](https://www.cbs.nl/-/media/cbs/onze-diensten/methoden/classificaties/overig/gemeenten-alfabetisch-2026.xlsx)。 |
| ライセンス・利用条件 | CBSの一般Copyright方針に基づくCreative Commons Attribution 4.0 International（CC BY 4.0）。CC BY 4.0：[https://creativecomm<wbr>ons.org/licenses/by/<wbr>4.0/](https://creativecommons.org/licenses/by/4.0/)。CBSのCopyright方針：[https://www.cbs.nl/e<wbr>n-gb/about-us/websit<wbr>e/copyright](https://www.cbs.nl/en-gb/about-us/website/copyright)。 |
| 再配布条件 | CBSを出典表示し、原典・ライセンスへの参照と加工表示を保持する。許諾された再利用を制限する追加条件を課さず、CBSが加工物を公認・推奨していると示さない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source: CBS, Gemeentelijke indeling op 1 januari 2026.
>
> Derived and processed by Galuchat. Not endorsed by CBS.

CBSの出典表示は必須であるが、固定の表示文言は指定されていない。上記は本リリースの表示である。原典およびライセンスへの参照は、上表のURLとともに保持する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した利用条件に原典ファイルやライセンス全文のファイル同梱義務はない。出典、原典・ライセンスへの参照および加工表示を本NOTICEに保持する。 |

#### 加工内容

* 自治体コードで地理データに州コード・名称を対応付け、名称辞書および原典コードとの対応表へ反映した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

CBSまたはKadasterによる本加工物の公認・保証を意味しない。Galuchatは正確性、完全性、最新性または特定目的への適合性を保証しない。
