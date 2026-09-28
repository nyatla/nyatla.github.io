# world-2024-geoboundaries-org-cgaz-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | geoBoundaries CGAZ best-available行政区域データ |
| リリースパッケージID | `world-2024-geoboundaries-org-cgaz-adm` |
| リリース版・基準時点 | CGAZ ADM2（版番号なし） |

このリリースパッケージは、William & Mary geoLabおよびgeoBoundaries communityが提供するComprehensive Global Administrative Zones（CGAZ）をGaluchat用に加工したものである。提供者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### geoBoundaries Comprehensive Global Administrative Zones

このグループは、リリースパッケージに含まれるCGAZ由来の全成果物に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `NOTICE.md`を除く、data-spec.md第2章に列挙した全成果物 |
| 入力データまたは上流成果物 | Comprehensive Global Administrative Zones（CGAZ）ADM2 global Shapefile |
| 入力バージョン・基準時点 | 版番号のないスナップショット。入力アーカイブのSHA-256は`598f6c70893d60a35b96eb0dc31fd1c045e69177e4b8203407710306f6585de1`、メンバー日時は2024-04-20。 |
| 提供者・権利者 | William & Mary geoLab、geoBoundaries community |
| 取得日 | 2026-07-25 |
| 取得元 | [https://www.geoboundaries.org/<wbr>globalDownloads.html](https://www.geoboundaries.org/globalDownloads.html) |
| ライセンス・利用条件 | [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)。[geoBoundariesの利用案内](https://www.geoboundaries.org/index.html#getData)および[プロジェクトのライセンス表示](https://github.com/wmgeolab/geoBoundaries/blob/main/LICENSE)を参照。 |
| 再配布条件 | 適切なクレジット、原典およびライセンスへのリンクならびに加工した旨の表示を維持し、ライセンスが認める利用を制限する追加条件または技術的制限を課さない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Contains information from geoBoundaries, produced by the William & Mary geoLab and the geoBoundaries community, licensed under CC BY 4.0. Adapted for Galuchat.

原典を研究・分析で利用する場合、提供元は次の論文の引用を推奨している。

> Runfola, D. et al. (2020). geoBoundaries: A global database of political administrative boundaries. PLOS ONE 15(4): e0231866. https://doi.org/10.1371/journal.pone.0231866

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 提供元が本リリースへの別ファイルの同梱を求める条件は確認されていない。 |

#### 加工内容

* shapeGroupごとに`ADM2`、`ADM1`、`ADM0`、`DISP`の順で利用可能な区域を選択した。
* 採用区域へ`GBCGAZ_ID`を割り当て、同じコード空間を持つGisWordBookを作成した。
* 原典図形を緯度経度格子へ分割・ラスタ化し、WGSMapSetへ変換・圧縮した。

## 利用条件と注意

各成果物には、上記の出典・利用条件が適用される。必須帰属表示および加工表示を維持し、CC BY 4.0に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

CGAZは簡略化された全球合成データであり、係争地域にはgeoBoundariesが採用する定義が用いられる。行政境界および名称は、すべての国・地域について権威あるものとは限らない。本リリースパッケージについて、正確性、完全性、最新性または特定目的への適合性を保証しない。
