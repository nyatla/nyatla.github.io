# DAGI V4 Kommuneinddeling（Current_217抽出版）

## 1. 概要

DatafordelerのDAGI V4を基に、デンマークのRegionとKommuneinddeling（自治体区分）を参照できる区域図・名称辞書を収録する。教区（Sogneinddeling）は含めない。区域図の非ゼロ値は同梱GisWordBookのコードであり、原典コードとの対応は`names.csv`で確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | DAGI V4 Kommuneinddeling（Current_217抽出版） |
| リリースパッケージID | `dk-2026-datafordeler-dk-dagi-adm` |
| 対象地域 | デンマークのDAGI Kommuneinddelingが表す区域。 |
| 対象区域 | 通常の自治体98区域と、自治体区分外のChristiansø 1区域。 |
| 入力座標系 | ETRS89 / UTM zone 32N（EPSG:25832）、3次元図形。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）、2次元。 |
| 座標変換 | EPSG:25832からEPSG:4326へ再投影し、Z成分を除去する。 |
| 原典版・基準時点 | DAGI V4の現行データ`Current_217`抽出。原典GPKGの最終変更記録は2026-07-02、ZIP内GPKGのファイル日時は2026-09-27。個々の区域の`virkningfra`は異なり、これらの日付は全区域に共通する効力発生日を意味しない。 |

### 1.1 対象範囲

原典の`kommuneinddeling`全99面を採用する。98面は自治体、`kommunekode=0411`のChristiansøは原典で`udenforkommuneinddeling=1`とされる自治体区分外の面であり、通常自治体とは区別して保持する。Regionは各面に付く`regionlokalid`を`regionsinddeling.id_lokalid`に結合した名称階層であり、Region面を独立した検索対象として重ねない。

教区（Sogneinddeling）、選挙区、郵便番号区域等は収録しない。自治体の飛び地・島嶼は原典の図形に従う。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | CUSTOM | 採用した自治体区分面の外側にある海域は背景となる。面に含まれる沿岸水域は保持し、別の海岸線マスクでは除外しない。除外条件は原典の採用面の外側であること。 |
| 内水面 | NONE | 湖沼・河川を別の水域マスクで除外せず、採用面に含まれる部分を保持する。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | `kommunekode`。先頭ゼロを含む4桁の文字列として`names.csv`に保持する。 |
| 原典ID値 | remap前のGisRaster値は`kommunekode`を10進整数にした値。99面で一意。 |
| 背景値 | `0`。採用面の外側、図形の穴、サンプリングで区域が選ばれなかった画素。 |
| GisWordBookコード | 原典ID値の昇順で1から99まで採番する。0は辞書レコードを指さない。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は辞書および`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`dk-2026-datafordeler-dk-dagi-adm.zip`に次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown、UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown、UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `denmark_dagi_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした自治体区分図。 |
| `denmark_dagi_2026-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした自治体区分図。 |
| `denmark_dagi_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした自治体区分図。 |
| `denmark_dagi_2026.giswordbook` | GisWordBook/0、UTF-8 | Region名と自治体区分名の辞書。 |
| `denmark_dagi_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間・名称階層の辞書。 |
| `denmark_dagi_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、Region・自治体区分の原典コード、名称、区分外フラグの対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点の自治体区分またはChristiansøをGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[Region名, Kommuneinddeling名, 区分外フラグ]`の固定3スロット。両文字コード版は同一コード空間。 |
| names.csv | `wordbook_code,GRVALUE,REGION_CODE,REGION_NAME,KOMMUNE_CODE,KOMMUNE_NAME,OUTSIDE_KOMMUNE`の7列。採用面ごとに1行。 |

`REGION_CODE`は`regionskode`、`KOMMUNE_CODE`は`kommunekode`を先頭ゼロを保つ文字列として記録する。`OUTSIDE_KOMMUNE`は原典の`udenforkommuneinddeling`の0または1である。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Regionの原典名称。 | 不可 |
| 区域2 | Kommuneinddelingの原典名称。 | 不可 |
| 属性1 | `udenforkommuneinddeling`の値。`0`は通常自治体、`1`は自治体区分外。 | 不可 |

共通の国名は置かない。名称は原典表記を保ち、同名判定は区域1・区域2・属性1の組で行う。原典コードはStringSetに埋め込まず、`names.csv`に保持する。

## 4. WGSMapSet生成パラメータ

### denmark_dagi_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### denmark_dagi_2026-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 4096 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### denmark_dagi_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 10000 | 1/10000度単位。 |
| SHP grid cell-size | 8192 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

---

## 5. 備考・既知の制約

* 教区は自治体・Regionを必ずしも一意に含まないため、本製品の階層へ追加しない。
* Christiansøは自治体ではなく、自治体区分外の原典区域である。通常自治体と同じ行政資格を持つと解釈しない。
* `Current_217`の`217`は抽出番号であり、基準日や取得日を示す数字ではない。取得日そのものは記録されていない。
* 粗いグリッドや境界付近では小島・狭い区域が消失し、境界のずれや背景画素が生じ得る。法的な境界確定や測量の根拠として使用しない。
