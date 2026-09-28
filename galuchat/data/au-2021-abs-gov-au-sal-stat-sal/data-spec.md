# Australian Bureau of Statistics ASGS Edition 3 Suburbs and Localities 2021

## 1. 概要

Australian Bureau of Statistics（ABS）のAustralian Statistical Geography Standard（ASGS）Edition 3、Suburbs and Localities（SAL）2021から、オーストラリアのsuburb・localityを表す区域図と名称辞書を収録する。SALは公的に定められた地名区域をABSがMesh Blockで近似した統計用区域であり、法的境界そのものではない。区域図の非ゼロ画素値は同梱GisWordBookのコードである。

| 項目 | 内容 |
| --- | --- |
| データセット名 | Australian Bureau of Statistics ASGS Edition 3 Suburbs and Localities 2021 |
| リリースパッケージID | `au-2021-abs-gov-au-sal-stat-sal` |
| 対象地域 | Australiaの州・準州およびOther Territories |
| 対象区域 | 2021年Suburbs and Localities、空間形状を持つ15,334区域 |
| 入力座標系 | GDA2020経緯度（EPSG:7844） |
| 出力座標系 | WGS 84経緯度（EPSG:4326） |
| 座標変換 | GeoPandas/PROJによってEPSG:7844からEPSG:4326へ座標変換する。 |
| 原典版・基準時点 | ASGS Edition 3、SAL 2021。公表日・原典の基準日は2021-10-06。 |

### 1.1 対象範囲

原典15,353レコードのうち、空間形状を持たない19件の特別用途コードを除いた15,334区域を採用する。除外対象は`Outside Australia`、`No usual address`、`Migratory - Offshore - Shipping`に対応するレコードである。Other TerritoriesのCocos (Keeling) Islands、Christmas Island、Norfolk Island、Jervis Bayを含む。原典で未定義の島嶼や水域を補完せず、細小な区域がすべてのサンプリング解像度で画素化されるとは限らない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | CUSTOM | 原典SALで区域が割り当てられない外水面は背景とし、SAL区域に含まれる水域は保持する。追加の海岸線マスクは適用しない。 |
| 内水面 | NONE | 湖沼・河川を一律に除外していない。原典SAL形状を追加の内水面マスクで切り抜かない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | `SAL_CODE21`。州・準州を表す先頭1桁と、区域を表す後続4桁からなる5桁の文字列。採用区域内で一意。 |
| 原典ID値 | remap前のGisRaster値は`int(SAL_CODE21)`。採用区域ごとに一意な正の整数。 |
| 背景値 | `0`。採用区域外、またはサンプリングで区域が選ばれなかった画素を表す。 |
| GisWordBookコード | 1から15,334までの連番。名称パス`[STE_NAME21, SAL_NAME21]`の辞書順で採番する。採用区域では名称パスも一意である。`0`は辞書の区域を指さない。 |
| マップコード | `int(SAL_CODE21)`をGisWordBookコードへremapした値。非ゼロ値は同梱GisWordBookのレコードと`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`au-2021-abs-gov-au-sal-stat-sal.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown、UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown、UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示および加工表示。 |
| `abs-asgs-2021-sal-wgs84-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/100度単位でサンプリングしたSAL区域図。 |
| `abs-asgs-2021-sal-wgs84-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/1000度単位でサンプリングしたSAL区域図。 |
| `abs-asgs-2021-sal-wgs84-grid-16384-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/10000度単位でサンプリングしたSAL区域図。 |
| `abs-asgs-2021-sal.giswordbook` | GisWordBook/0、UTF-8 | 州・準州名とSAL名の名称辞書。 |
| `abs-asgs-2021-sal.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間と名称パスを持つUTF-16LE辞書。 |
| `abs-asgs-2021-sal.names.csv` | CSV、UTF-8 | 辞書コード、SAL識別子、名称、原典属性および直接値の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とする。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のSALをGisWordBookコードで表す。`0`は背景。 |
| GisWordBook | `[STE_NAME21, SAL_NAME21]`の固定2スロット。両文字コード版は同じコード空間を持つ。 |
| names.csv | `wordbook_code,SAL_CODE21,SAL_NAME21,STE_CODE21,STE_NAME21,AUS_CODE21,AUS_NAME21,AREASQKM21,LOCI_URI21,SHAPE_Leng,SHAPE_Area,direct_value`の12列。各行は原典の1 SALに対応し、計15,334行。 |
| codemap | 製造時に`int(SAL_CODE21)`をGisWordBookコードへ変換する対応表。リリースZIPには含めない。 |

`names.csv`の`SAL_CODE21`は原典の区域識別子である。辞書コードから原典の識別子・属性を照合する場合に用いる。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 原典の英語`STE_NAME21`。州・準州またはOther Territoriesの名称。 | 不可 |
| 区域2 | 原典の英語`SAL_NAME21`。suburbまたはlocalityの名称。 | 不可 |

共通の`Australia`ノードは含めず、空スロットも設けない。採用区域では、区域1と区域2の組で名称パスを区別できる。

## 4. WGSMapSet生成パラメータ

### abs-asgs-2021-sal-wgs84-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全区域との交差面積合計がセル面積の1%以下なら背景値`0`。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

### abs-asgs-2021-sal-wgs84-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全区域との交差面積合計がセル面積の1%以下なら背景値`0`。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 4096 | Shapefile分割格子のセルサイズ。 |
| block-size | 1024 | WGSMap格納ブロックサイズ。 |

### abs-asgs-2021-sal-wgs84-grid-16384-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全区域との交差面積合計がセル面積の1%以下なら背景値`0`。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 10000 | 1/10000度単位。 |
| SHP grid cell-size | 16384 | Shapefile分割格子のセルサイズ。 |
| block-size | 1024 | WGSMap格納ブロックサイズ。 |

---

## 5. 備考・既知の制約

* SALは公式のsuburb・locality境界をMesh Blockで近似したもので、法的または行政上の境界そのものではない。原典で未定義の島嶼・沿岸水域がある。
* SAL名には、同名区域を区別するため州・準州やLocal Government Areaの名称を括弧書きしたものがある。括弧書きは原典の`SAL_NAME21`をそのまま採用する。
* 粗いグリッドや境界付近では、小さな区域が画素化されなかったり、背景値`0`が現れたりする。原典の基準時点以降の変更は反映しない。
* 本区域図は統計・地図表示用であり、土地の権利、法的境界、測量、航海、緊急対応または工学上の位置を確定するものではない。
