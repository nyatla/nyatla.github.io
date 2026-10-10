# geoBoundaries CGAZ best-available行政区域データセット

## 1. 概要

本データセットは、geoBoundariesのComprehensive Global Administrative Zones（CGAZ）を、Galuchatのオフライン逆ジオコーディング用に加工したリリースパッケージである。各shapeGroupについて利用できる最も詳細な行政区域を選び、WGSMapSet/3の区域地図とGisWordBook/0の名称辞書として提供する。

| 項目 | 内容 |
| --- | --- |
| データセット名 | geoBoundaries CGAZ best-available行政区域データ |
| リリースパッケージID | `world-2024-geoboundaries-org-cgaz-adm` |
| 対象地域 | 世界全域 |
| 対象区域 | shapeGroupごとに選択したADM2、ADM1、ADM0またはDISP区域 |
| 入力座標系 | WGS 84地理座標（EPSG:4326） |
| 出力座標系 | WGS 84互換の緯度経度格子 |
| 座標変換 | なし。入力のWGS 84座標値を再投影・測地系変換せずに格納する。 |
| 原典版・基準時点 | CGAZ ADM2（版番号なし） |

### 1.1 対象範囲

世界の各shapeGroupについて、`ADM2`、`ADM1`、`ADM0`、`DISP`の順に、存在する最初の区域種別を採用する。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `SIMPLE` | 原典CGAZは境界を簡略化した全球合成データであり、採用した区域の水際線に従う。別の海岸線データによる補正は行わない。 |
| 内水面 | `NONE` | 湖沼が区域外となる場所と区域内に残る場所が混在する。原典に従い、追加の湖沼・河川データによる除外は行わない。 |

### 1.3 領域・境界

世界の各shapeGroupについて、第1.1節で採用する原典CGAZ区域の収録範囲を対象とする。係争地域の表現はgeoBoundariesが採用する定義に基づき、すべての国・地域の公式見解と一致するとは限らない。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 原典準拠 | 原典CGAZの簡略化された区域境界に従う。複数国を収録するため、国境の他国側も採用区域であれば区域コードを持ち、領域外とは限らない。 |
| 対象領域外 | 背景値 | 採用した全shapeGroupの区域面の外側。他国であることだけを領域外の条件としない。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

背景値だけでは領域外、水域、内部の未割当地点を区別できない。区域コードも陸域のみを示す値ではなく、水域の扱いは第1.2節に従う。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | geoBoundariesの`shapeID`。 |
| 原典ID値 | 採用した`shapeID`へ1から順に割り当てる整数`GBCGAZ_ID`。ADM系区域を`shapeGroup`、`shapeName`、`shapeID`順で採番し、DISP区域をその後へ追加する。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | `GBCGAZ_ID`と同じ値。再採番しない。 |
| マップコード | `GBCGAZ_ID`と同じ値。対応するGisWordBookのレコードを示す。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `world-2024-geoboundaries-org-cgaz-adm-rev1.zip` に含める全ファイルは次のとおりである。全ファイルをZIPのルートディレクトリに配置する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示および加工表示。 |
| `geoboundaries-cgaz-best-admin-grid-1024-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84互換の緯度経度格子を1/100度でサンプリングした区域地図。 |
| `geoboundaries-cgaz-best-admin-grid-8192-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84互換の緯度経度格子を1/1000度でサンプリングした区域地図。 |
| `geoboundaries-cgaz-best-admin.giswordbook` | GisWordBook/0, UTF-8 | 地図画素値を区域名へ対応付ける既定の辞書。 |
| `geoboundaries-cgaz-best-admin.utf16.giswordbook` | GisWordBook/0, UTF-16LE | 同じ辞書のUTF-16LE版。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域に属する採用区域を、同じコードのGisWordBookレコードに対応する`GBCGAZ_ID`で表す。 |
| GisWordBook | shapeGroup、区域種別および区域名から成る固定3スロットの辞書。 |

### 3.2 StringSet

GisWordBookの各レコードは次の3スロットを持つ。

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | `shapeGroup`。原典の区域グループ識別子。 | 不可 |
| 属性1 | `shapeType`。採用した`ADM2`、`ADM1`、`ADM0`または`DISP`。 | 不可 |
| 区域2 | `shapeName`。空の場合は`shapeID`。 | 不可 |

CP932で表現できない名称があるため、Shift_JIS版は提供しない。

## 4. WGSMapSet生成パラメータ

### geoboundaries-cgaz-best-admin-grid-1024-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セル内で最大面積を占める区域を採用する。 |
| minimum rate | `0.01` | `MAX_AREA`の最小採用率。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap生成時の格納設定。 |
| unit-inv | `100` | サンプリング単位は1/100度。 |
| SHP grid cell-size | `1024` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### geoboundaries-cgaz-best-admin-grid-8192-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セル内で最大面積を占める区域を採用する。 |
| minimum rate | `0.01` | `MAX_AREA`の最小採用率。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap生成時の格納設定。 |
| unit-inv | `1000` | サンプリング単位は1/1000度。 |
| SHP grid cell-size | `8192` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

---

## 5. 備考・既知の制約

- 詳細な測量・法的境界の用途を想定しない。
