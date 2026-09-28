# Local Authority Districts (December 2025) Boundaries UK BFC

## 1. 概要

英国の2025年12月時点のLocal Authority District（LAD）境界を、Galuchat用の行政区域図とGisWordBookとして収録する。区域図の画素値は同梱GisWordBookのコードであり、原典のGSSコードや名称は同梱の名称表から参照できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | Local Authority Districts (December 2025) Boundaries UK BFC |
| リリースパッケージID | `gb-2025-geoportal-statistics-gov-uk-lad-adm-bfc` |
| 対象地域 | United Kingdom（England、Scotland、Wales、Northern Ireland） |
| 対象区域 | LAD相当の地方自治体区域、361区域 |
| 入力座標系 | OSGB36 / British National Grid（EPSG:27700） |
| 出力座標系 | WGS 84経緯度（EPSG:4326） |
| 座標変換 | Great BritainはBNG逆投影とOSTN15によるOSGB36→ETRS89変換。Northern Irelandは原典の経緯度表示に合わせ、BNG逆投影のみを適用。 |
| 原典版・基準時点 | 2025年12月版（原典公開日：2026-04-29） |

### 1.1 対象範囲

EnglandのUnitary Authorities、Non-metropolitan Districts、Metropolitan Districts、London Boroughs、ScotlandのCouncil Areas、WalesのUnitary Authorities、Northern IrelandのLocal Government Districtsを含む。国別の区域数はEngland 296、Scotland 32、Wales 22、Northern Ireland 11である。Channel IslandsとIsle of Manは含まない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | FULL | 原典のBFC境界はMean High Water markに沿うフル解像度の海岸線でクリップされている。追加の海岸線クリップは行っていない。 |
| 内水面 | NONE | 湖沼・河川を別の水域マスクで除外していない。原典の行政区域ポリゴンが水上に及ぶ部分は区域として扱う。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 9文字のGSSコード `LAD25CD`。361区域で一意。 |
| 原典ID値 | ラスタ化時の直接値は「国番号 × 100,000,000 ＋ `LAD25CD` の先頭文字を除いた8桁の整数」。国番号はE=1、S=2、W=3、N=4。例：`E06000001` → `106000001`。 |
| 背景値 | `0`。区域外、海域、サンプリングで採用されなかった画素を含む。 |
| GisWordBookコード | 直接値の昇順で区域を並べ、1から361まで採番する。0は辞書の区域を指さない。 |
| マップコード | 直接値をGisWordBookコードへ変換した値。非ゼロの画素値は同梱の両GisWordBookと`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIPに、以下の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `LAD_DEC_2025_UK_BFC_WGS84-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位の行政区域図。 |
| `LAD_DEC_2025_UK_BFC_WGS84-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位の行政区域図。 |
| `LAD_DEC_2025_UK_BFC_WGS84-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位の行政区域図。 |
| `LAD_DEC_2025_UK_BFC.giswordbook` | GisWordBook/0、UTF-8 | 区域名を英語で収録する辞書。 |
| `LAD_DEC_2025_UK_BFC.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同一コード空間・同一階層のUTF-16LE辞書。 |
| `LAD_DEC_2025_UK_BFC.names.csv` | CSV、UTF-8 | 辞書コード、直接値、GSSコード、構成国、区域種別、英語名、ウェールズ語名、County情報の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とする。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のLAD相当区域をGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[構成国, County名または空文字, LAD25NM]`の固定3階層。両文字コード版で同じコードとパスを使う。 |
| names.csv | `wordbook_code,direct_value,LAD25CD,country_code,country_name,area_type,LAD25NM,LAD25NMW,county_code,county_name`の10列。各行は一つの区域に対応する。 |

`LAD25NMW`はWalesの22区域のみ値を持ち、それ以外は空欄とする。英語名で補完しない。CountyはEnglandの164のNon-metropolitan Districtsに対する上位の行政Countyであり、儀礼上のCountyではない。その他の197区域のCounty名は空文字とする。区域種別は包含階層ではなく`area_type`で表す。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 構成国名（England、Scotland、Wales、Northern Ireland） | 不可 |
| 区域2 | 上位の行政County名。 | 可。該当しない場合は空文字列`""`。 |
| 区域3 | `LAD25NM`による英語の区域名。 | 不可 |

共通のUnited Kingdomノードは置かない。同名の区域は、3スロットを組み合わせたパスおよび`names.csv`のGSSコードで識別する。ウェールズ語名はStringSetには含めず、`names.csv`の`LAD25NMW`に保持する。

## 4. WGSMapSet生成パラメータ

### LAD_DEC_2025_UK_BFC_WGS84-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全区域との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### LAD_DEC_2025_UK_BFC_WGS84-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全区域との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 4096 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### LAD_DEC_2025_UK_BFC_WGS84-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全区域との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 10000 | 1/10000度単位。 |
| SHP grid cell-size | 8192 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

---

## 5. 備考・既知の制約

* BFCはMean High Water markに沿う海岸線クリップ版であり、海域まで含むBFE版と同じ区域範囲ではない。
* Northern Irelandの座標変換は、当該ONS境界データの経緯度表示との整合を優先したものであり、一般のEPSG:27700変換方式を規定するものではない。
* 1/100度などの粗いグリッドや区域境界付近では、サンプリングによって小区域・島嶼が消失したり、背景値0が現れたりする。
* 原典の対象時点以降の行政区域改編は反映していない。法的な行政界、地籍境界、住所照合の正本として使用しない。
