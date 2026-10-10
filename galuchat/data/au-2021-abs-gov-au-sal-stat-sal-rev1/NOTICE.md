# au-2021-abs-gov-au-sal-stat-sal NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Australian Bureau of Statistics ASGS Edition 3 Suburbs and Localities 2021 |
| リリースパッケージID | `au-2021-abs-gov-au-sal-stat-sal` |
| リリース版・基準時点 | ASGS Edition 3、Suburbs and Localities 2021。原典の公表日・基準日は2021-10-06。 |

このリリースパッケージは、Australian Bureau of Statistics（ABS）のSuburbs and Localities 2021をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Australian Bureau of Statistics ASGS Edition 3 Suburbs and Localities 2021

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `abs-asgs-2021-sal-wgs84-grid-512-100.wgsmapset.glc`, `abs-asgs-2021-sal-wgs84-grid-4096-1000.wgsmapset.glc`, `abs-asgs-2021-sal-wgs84-grid-16384-10000.wgsmapset.glc`, `abs-asgs-2021-sal.giswordbook`, `abs-asgs-2021-sal.utf16.giswordbook`, `abs-asgs-2021-sal.names.csv`, `data-spec.md` |
| 入力データまたは上流成果物 | Australian Statistical Geography Standard（ASGS）Edition 3、Suburbs and Localities（SAL）2021、GDA2020 Shapefile（`SAL_2021_AUST_GDA2020`） |
| 入力バージョン・基準時点 | 2021年版。原典の公表日・基準日は2021-10-06。 |
| 提供者・権利者 | Australian Bureau of Statistics。著作権表示は© Commonwealth of Australia。 |
| 取得日 | 未記録 |
| 取得元 | [ABS ASGS Edition 3デジタル境界ファイル配布ページ](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files) |
| ライセンス・利用条件 | 原典ZIPのXMLメタデータに示された[Creative Commons Attribution 4.0 International（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/)。[ABSの著作権・ライセンス説明](https://www.abs.gov.au/website-privacy-copyright-and-disclaimer)も参照。 |
| 再配布条件 | ABSを出典として表示し、原典およびライセンスへのリンクを示し、変更を加えたことを明示する。ABSによる承認・推奨を示唆しない。原典に含まれない第三者の権利、商標、ロゴ等は別途扱う。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source: Australian Bureau of Statistics, Australian Statistical Geography Standard (ASGS) Edition 3, Suburbs and Localities 2021. Licensed under CC BY 4.0.
>
> Derived and processed by the Galuchat project. This product is not endorsed by the Australian Bureau of Statistics.

ABSがこの原典向けの固定された帰属文言を指定していることは確認できないため、上記は本リリースで採用する出典・加工表示である。原典へのリンクとライセンスへのリンクは上表に記載する。CC BY 4.0が要求する出典表示と変更表示を、この文言および本NOTICEで満たす。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 本リリースは原典Shapefile ZIPを再梱包せず、原典XMLの同梱を求める条件も確認されていない。出典とライセンスへのリンクは本NOTICEに記載する。 |

#### 加工内容

* 原典の非空間特別用途レコードを除外した。
* 原典の境界をGDA2020からWGS 84へ座標変換した。
* 原典の区域識別子を直接値として区域図に採用し、辞書コードへの対応付けと地図形式への変換を行った。原典とは別の水域マスクによる追加クリップは行っていない。

## 利用条件と注意

各成果物には、上記の出典表示とライセンス条件が適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典は現状有姿で提供され、ABSは正確性、完全性、最新性または特定目的への適合性を保証しない。境界データは法的境界の確定、測量、航海、緊急対応または工学用途に用いるものではない。
