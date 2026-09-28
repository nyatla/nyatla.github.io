# Statistics Canada 2021 Census Subdivision Cartographic Boundary File

## 1. 概要

Statistics Canadaの2021年Census Subdivision（CSD）Cartographic Boundary File（英語版）から、カナダ全域のCSDを表す区域図と名称辞書を収録する。CSDは自治体、Indian reserve、unorganized territoryなど、自治体相当として扱う区域の総称である。区域図の非ゼロ画素値は同梱GisWordBookのコードであり、原典のCSD識別子との対応は`names.csv`で確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | Statistics Canada 2021 Census Subdivision Cartographic Boundary File |
| リリースパッケージID | `ca-2021-statcan-gc-ca-csd-cbf-stat-csd` |
| 対象地域 | Canadaの13州・準州 |
| 対象区域 | 2021年Census Subdivision、計5,161区域 |
| 入力座標系 | NAD83 / Statistics Canada Lambert（EPSG:3347） |
| 出力座標系 | WGS 84経緯度（EPSG:4326） |
| 座標変換 | GeoPandas/PROJによってEPSG:3347からEPSG:4326へ再投影する。 |
| 原典版・基準時点 | 2021 Census Cartographic Boundary File。地理的基準日は2021-01-01。 |

### 1.1 対象範囲

原典のCSD 5,161区域をすべて採用する。対象は13州・準州に属する自治体および統計上の自治体相当区域である。原典は英語版Shapefileであり、名称辞書にはその英語名称と原典の`CSDTYPE`を採用する。沿岸の島嶼も原典に含まれる範囲で採用するが、細小な区域がすべてのサンプリング解像度で画素化されるとは限らない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | FULL | 沿岸水域は区域図から除外されている。原典のCartographic Boundary Fileは詳細な沿岸水文地物で海域を除外して作られており、本リリースで追加の海岸線マスクは適用しない。 |
| 内水面 | NONE | 湖沼・河川を一律に除外する水域クリップは適用していない。原典のCSD形状を追加の内水面マスクで切り抜かない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | `CSDUID`。州・準州2桁、Census Division 2桁、CSD 3桁からなる7桁の文字列。原典の`DGUID`は`2021A0005`と`CSDUID`の連結である。 |
| 原典ID値 | remap前のGisRaster値は`int(CSDUID)`。5,161区域で一意な正の整数。 |
| 背景値 | `0`。採用区域外、またはサンプリングで区域が選ばれなかった画素を表す。 |
| GisWordBookコード | 1から5,154までの連番。名称パス`[州・準州名, CSDNAME, CSDTYPE]`の辞書順と、同一パスで別コードを持つ場合の`CSDUID`昇順で採番する。同名別地と確認された9組にはCSDごとに別コードを付け、`(Part)`を含む7組は各組で1コードを共有する。`0`は辞書の区域を指さない。 |
| マップコード | `int(CSDUID)`をGisWordBookコードへremapした値。非ゼロ値は同梱GisWordBookのレコードと`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`ca-2021-statcan-gc-ca-csd-cbf-stat-csd.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示および加工表示。 |
| `statcan-csd-2021-wgs84-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/100度単位でサンプリングしたCSD区域図。 |
| `statcan-csd-2021-wgs84-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/1000度単位でサンプリングしたCSD区域図。 |
| `statcan-csd-2021-wgs84-grid-16384-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/10000度単位でサンプリングしたCSD区域図。 |
| `statcan-csd-2021.giswordbook` | GisWordBook/0、UTF-8 | 州・準州名、CSD名、CSD種別の順に格納した名称・属性辞書。 |
| `statcan-csd-2021.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間と名称パスを持つUTF-16LE辞書。 |
| `statcan-csd-2021.names.csv` | CSV、UTF-8 | 辞書コード、CSDUID、DGUID、表示名、種別、原典属性および直接値の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とする。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のCSDをGisWordBookコードで表す。`0`は背景。 |
| GisWordBook | `[州・準州名, CSDNAME, CSDTYPE]`の固定3スロット（区域1、区域2、属性1）。同じ名称パスでも、別コードを持つレコードがある。両文字コード版は同じコード空間を持つ。 |
| names.csv | `wordbook_code,CSDUID,DGUID,CSDNAME,CSDTYPE,LANDAREA,PRUID,direct_value`の8列。各行は原典の1 CSDに対応し、計5,161行。 |
| codemap | 製造時に`int(CSDUID)`をGisWordBookコードへ変換する対応表。リリースZIPには含めない。 |

`names.csv`の`CSDUID`と`DGUID`は原典の区域識別子である。名称パスだけで異なるCSDを識別できない場合があるため、個別CSDの照合には`names.csv`を用いる。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | `PRUID`に対応する英語の州・準州名。 | 不可 |
| 区域2 | 原典の英語`CSDNAME`。 | 不可 |
| 属性1 | 原典の`CSDTYPE`。 | 不可 |

共通の`Canada`ノードは含めない。`Census Division`も名称階層には含めない。同じ3スロットの組を持つ別CSDのうち、別コードを持つものは辞書コードで区別できる。コードを共有するものの個別識別には`names.csv`の`CSDUID`を用いる。

## 4. WGSMapSet生成パラメータ

### statcan-csd-2021-wgs84-grid-512-100.wgsmapset.glc

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

### statcan-csd-2021-wgs84-grid-4096-1000.wgsmapset.glc

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

### statcan-csd-2021-wgs84-grid-16384-10000.wgsmapset.glc

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

* 同じ州・準州、`CSDTYPE`、`CSDNAME`を持つ16組のうち、地理的に離れた同名別地と確認した9組には、それぞれのCSDに異なる辞書コードを割り当てる。名称パスは同じままである。
* 名称に`(Part)`を含む残り7組は、別々の`CSDUID`を持つが、同一の辞書コードを共有する。この共有は同一の法的・行政的区域だと確定したことを意味しない。個別CSDの識別には`names.csv`の`CSDUID`を用いる。
* 原典に含まれる無効geometryは、preparedデータへの変換時に補正する。原典ZIP自体は変更しない。
* 粗いグリッドや境界付近では、小さな島嶼・狭い区域が画素化されなかったり、背景値`0`が現れたりする。原典の境界基準日以降の変更は反映しない。
* この区域図は統計・地図表示用であり、土地の権利、法的境界、測量、航海、緊急対応または工学上の位置を確定するものではない。
