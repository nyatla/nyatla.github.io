# Istat行政界（2026-01-01、非簡略化版）

## 1. 概要

Istatの2026年1月1日基準の非簡略化版行政界を基に、Regione、Provincia・Città metropolitana等の上位区域、Comuneを参照できる区域図・名称辞書を収録する。区域図の非ゼロ値は同梱GisWordBookのコードであり、原典自治体コードとの対応は`names.csv`で確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | Istat行政界（2026-01-01、非簡略化版） |
| リリースパッケージID | `it-2026-istat-it-limiti-adm` |
| 対象地域 | Istatの2026年版Comuneレイヤが表すイタリアの区域。島嶼を含む。 |
| 対象区域 | Comune 7,896区域。上位名称階層にはRegione 20区域、上位地域単位110区域を使用する。 |
| 入力座標系 | WGS 84 / UTM zone 32N（EPSG:32632）。ファイル名の`_WGS84`は経緯度座標を意味しない。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | EPSG:32632からEPSG:4326へ再投影する。 |
| 原典版・基準時点 | Istat Confini delle unità amministrative a fini statistici、2026-01-01、非簡略化版。 |

### 1.1 対象範囲

非簡略化版の`Com01012026_WGS84`にある全7,896自治体を採用する。上位の`ProvCM01012026_WGS84`と`Reg01012026_WGS84`をそれぞれ`COD_UTS`、`COD_REG`で結合し、名称階層に使用する。`COD_UTS`は県、大都市圏、自由自治体連合等を含む上位地域単位であり、単純に`COD_PROV`へ置き換えない。上位区域の面は独立した画素値として重ねない。

地理的区分`RipGeo01012026_WGS84`は行政階層に含めない。採用したComune面の飛び地・島嶼は原典のまま保持する。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | CUSTOM | 採用したComune面の外側にある海域は背景となる。面に含まれる沿岸水域は保持し、別の海岸線マスクでは除外しない。除外条件は原典の採用面の外側であること。 |
| 内水面 | NONE | 湖沼・河川・潟湖を一律に除外せず、原典のComune面に含まれる部分は区域として保持する。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 6文字のComuneコード`PRO_COM_T`。先頭ゼロを保持して`names.csv`に収録する。 |
| 原典ID値 | remap前のGisRaster値は`PRO_COM_T`を10進整数にした正の値。7,896区域で一意。 |
| 背景値 | `0`。採用面の外側、図形の穴、サンプリングで区域が選ばれなかった画素。 |
| GisWordBookコード | 原典ID値の昇順で1から7,896まで採番する。0は辞書レコードを指さない。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は辞書および`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`it-2026-istat-it-limiti-adm.zip`に次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `italy_istat_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたComune区域図。 |
| `italy_istat_2026-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたComune区域図。 |
| `italy_istat_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたComune区域図。 |
| `italy_istat_2026.giswordbook` | GisWordBook/0、UTF-8 | Regione・上位地域単位・Comune名の辞書。 |
| `italy_istat_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間・名称階層の辞書。 |
| `italy_istat_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、各階層のコード・名称、上位地域単位の種類、別名の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のComuneをGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[Regione名, 上位地域単位名, Comune名]`の固定3スロット。両文字コード版は同一コード空間。 |
| names.csv | `wordbook_code,GRVALUE,COD_REG,DEN_REG,COD_UTS,DEN_UTS,TIPO_UTS,PRO_COM_T,COMUNE,COMUNE_A`の10列。Comuneごとに1行、計7,896行。 |

`COD_UTS`は上位地域単位の原典番号、`TIPO_UTS`はその原典種別であり、後者はComuneの属性としてStringSetへは格納しない。`PRO_COM_T`は6文字を保持する。`COMUNE_A`に原典の別名がない場合は空欄とし、主名称で補完しない。原典DBFの文字列はUTF-8として復号する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | `DEN_REG`によるRegione名。 | 不可 |
| 区域2 | `DEN_UTS`による上位地域単位名。 | 不可 |
| 区域3 | `COMUNE`による自治体名。 | 不可 |

共通の国名、地理的区分、原典コードはStringSetへ埋め込まない。同名のComuneが別の上位区域にあっても、3スロットの組が異なれば別辞書コードとする。本版の7,896自治体では、この組はすべて一意であり、別自治体の名称集約は生じない。空スロットは使用しない。別名`COMUNE_A`は`names.csv`に保持し、名称階層を変更しない。

## 4. WGSMapSet生成パラメータ

### italy_istat_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大のComuneを選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### italy_istat_2026-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大のComuneを選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 4096 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### italy_istat_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大のComuneを選ぶ。 |
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

* 原典は統計目的で公開された行政界であり、法的な境界確定・地籍・測量の正本ではない。
* 上位地域単位はすべて通常のProvinciaではない。`COD_UTS`と`TIPO_UTS`を参照し、`COD_PROV`だけから所属を推定しない。
* `COMUNE`名は全国で一意ではない。異版との照合には`names.csv`の`PRO_COM_T`を用いる。
* 原典の公表後にも境界の修正があり得る。原典時点以降の変更は反映しない。
* 粗いグリッドや境界付近では小島・狭い区域が消失し、境界のずれや背景画素が生じ得る。
