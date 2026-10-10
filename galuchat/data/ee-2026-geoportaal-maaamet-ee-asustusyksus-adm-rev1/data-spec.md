# Maa- ja Ruumiamet Asustusüksused（2026-09-02）

## 1. 概要

エストニアMaa- ja Ruumiametの集落区域データを基に、Maakond（郡）、Omavalitsus（自治体）、Asustusüksus（集落区域）の所属を参照できる区域図・名称辞書を収録する。区域図の非ゼロ値は同梱GisWordBookコードであり、原典EHAKコードとの対応は`names.csv`で確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | Maa- ja Ruumiamet Asustusüksused（2026-09-02） |
| リリースパッケージID | `ee-2026-geoportaal-maaamet-ee-asustusyksus-adm` |
| 対象地域 | エストニアの原典集落区域が表す範囲。島嶼を含む。 |
| 対象区域 | 原典4,717図形からなる4,715の集落区域。 |
| 入力座標系 | L-EST97 / Estonian National Grid（EPSG:3301）。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | EPSG:3301からEPSG:4326へ再投影する。 |
| 原典版・基準時点 | `EKSPORT=2026-09-02`。Maa- ja Ruumiametの2026-09-02公開SHP。 |

### 1.1 対象範囲

原典`asustusyksus`の全4,717図形を採用する。`AKOOD=6953`のRidakülaと`AKOOD=8140`のTapa linnは、それぞれ同一区域コードに属する2図形を持つ。各組は同じ名称・自治体・郡を持ち、別の区域IDを付けず、一つの集落区域として扱う。

上位の郡15区分と自治体78区分は原典の`MKOOD/MNIMI`、`OKOOD/ONIMI`による所属階層として保持する。上位区域の面を独立した検索対象として重ねない。別配布の沖合区域や非公式地域のレイヤは含めない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | FULL | 採用した原典の陸地形状に含まれない海域は背景とする。原典はETAKの水際線に基づく陸地形状のクリップマスクを使用している。追加の海岸線マスクは適用しない。 |
| 内水面 | CUSTOM | 原典の陸地形状マスクで除外された湖沼等だけが背景となり、マスクで除外されなかった水域は集落区域として残る。すべての内水面を一律に除外する仕様ではない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 集落区域のEHAKコード`AKOOD`。文字列として`names.csv`に保持し、同一コードの複数図形を一つの区域とする。 |
| 原典ID値 | remap前のGisRaster値は`AKOOD`を10進整数にした正の値。4,715区域で一意。 |
| 背景値 | `0`。採用面の外側、原典で除外された水面、図形の穴、サンプリングで区域が選ばれなかった画素。 |
| GisWordBookコード | 数値化した`AKOOD`の昇順で1から4,715まで採番する。同一コードの2図形は同じ辞書コードに対応する。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は辞書および`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`ee-2026-geoportaal-maaamet-ee-asustusyksus-adm.zip`に次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown、UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown、UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `estonia_asustusyksus_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした集落区域図。 |
| `estonia_asustusyksus_2026-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした集落区域図。 |
| `estonia_asustusyksus_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした集落区域図。 |
| `estonia_asustusyksus_2026.giswordbook` | GisWordBook/0、UTF-8 | 郡・自治体・集落区域名と区域種別の辞書。 |
| `estonia_asustusyksus_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間・名称階層の辞書。 |
| `estonia_asustusyksus_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、各階層のEHAKコード・名称、区域種別の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点の集落区域をGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[郡名, 自治体名, 集落区域名, TYYP]`の固定4スロット。両文字コード版は同一コード空間。 |
| names.csv | `wordbook_code,GRVALUE,MKOOD,MNIMI,OKOOD,ONIMI,AKOOD,ANIMI,TYYP`の9列。集落区域ごとに1行、計4,715行。 |

原典DBFの文字列はCP1257として復号した名称を保持する。収録する`names.csv`と標準GisWordBookはUTF-8であり、文字化けした名称やCP1257バイト列をそのまま格納しない。`MKOOD`、`OKOOD`、`AKOOD`は先頭ゼロを保つ文字列として記録する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 原典`MNIMI`によるMaakond名。 | 不可 |
| 区域2 | 原典`ONIMI`によるOmavalitsus名。 | 不可 |
| 区域3 | 原典`ANIMI`によるAsustusüksus名。 | 不可 |
| 属性1 | 原典`TYYP`の区域種別コード。 | 不可 |

共通の国名とEHAKコードはStringSetへ埋め込まない。原典のエストニア語表記と発音記号を保持する。同名判定は3区域スロットと属性1の組で行い、末端の名称だけで異なる区域を集約しない。

## 4. WGSMapSet生成パラメータ

### estonia_asustusyksus_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の集落区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### estonia_asustusyksus_2026-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の集落区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 4096 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### estonia_asustusyksus_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の集落区域を選ぶ。 |
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

* 本版の2区域は一つのEHAKコードが複数図形に対応する。同一コードの図形を別区域・別辞書コードとして扱わない。
* 原典SHPには`.cpg`がなく、DBFをUTF-8として直接読ませると復号に失敗する。原典文字列をCP1257で正しく解釈した名称を収録する。
* 原典の陸地形状は、水面をすべて同じ方式で扱っていない。非ゼロ画素値を陸地判定に用いず、背景0だけから海域・湖沼・国外を判別しない。
* 粗いグリッドや境界付近では小島・狭い区域が消失し、境界のずれや背景画素が生じ得る。法的な境界確定や測量の根拠として使用しない。
