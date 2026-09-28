# U.S. Census Bureau 2025 TIGER/Line State（50州・District of Columbia）

## 1. 概要

米国国勢調査局の2025年版TIGER/Line® State and Equivalent Entitiesから、50州とDistrict of Columbiaの境界を採用した行政区域図と名称辞書を収録する。区域図の非ゼロ画素値は同梱GisWordBookのコードであり、原典の州コードとの対応は`names.csv`で確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | U.S. Census Bureau 2025 TIGER/Line State（50州・District of Columbia） |
| リリースパッケージID | `us-2025-census-gov-tl-state-adm1` |
| 対象地域 | United Statesの50州およびDistrict of Columbia |
| 対象区域 | 州50区域と州相当区域のDistrict of Columbia、計51区域 |
| 入力座標系 | NAD83経緯度（EPSG:4269） |
| 出力座標系 | WGS 84経緯度（EPSG:4326） |
| 座標変換 | NAD83からWGS 84へ地域に応じたPROJの座標操作を適用。本土等には`NAD83 to WGS 84 (1)`、Alaska西部Aleutian Islandsには`NAD83 to WGS 84 (2)`、Hawaiiには`NAD83 to WGS 84 (3)`を用いる。 |
| 原典版・基準時点 | 2025 TIGER/Line Shapefiles。境界・名称の基準日は2025-01-01。 |

### 1.1 対象範囲

原典のState and Equivalent Entitiesには56区域がある。本リリースは50州とDistrict of Columbiaを採用し、Puerto Rico、American Samoa、Guam、Commonwealth of the Northern Mariana Islands、United States Virgin Islandsは含めない。AlaskaのAleutian Islandsも採用範囲に含むが、サンプリングにより小島が各解像度で必ず表現されるわけではない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | NONE | 州・州相当区域の境界を別の海岸線マスクで切り抜いていない。原典の法定・統計境界が沿岸水域へ及ぶ部分は区域として扱う。 |
| 内水面 | NONE | 湖沼・河川などを別の水域マスクで切り抜いていない。原典の区域境界が水上に及ぶ部分は区域として扱う。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | `STATEFP`。州・州相当区域を識別する2桁の文字列で、先頭ゼロを保持する。 |
| 原典ID値 | remap前のGisRaster値は`int(STATEFP)`。対象51区域で一意だが、連番ではない。 |
| 背景値 | `0`。採用区域外およびサンプリングで区域が採用されなかった画素を表す。 |
| GisWordBookコード | 対象区域を直接値の昇順に並べ、1から51まで採番する。`0`は辞書の区域を指さない。 |
| マップコード | 直接値をGisWordBookコードへremapした値。非ゼロ値は同梱GisWordBookのレコードと`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`us-2025-census-gov-tl-state-adm1.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、利用条件、必須表示および加工表示。 |
| `tl_2025_us_state_WGS84-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/100度単位でサンプリングした州区域図。 |
| `tl_2025_us_state_WGS84-grid-8192-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/1000度単位でサンプリングした州区域図。 |
| `tl_2025_us_state_WGS84-grid-16384-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | WGS 84経緯度を1/10000度単位でサンプリングした州区域図。 |
| `tl_2025_us_state.giswordbook` | GisWordBook/0、UTF-8 | 英語の州・州相当区域名を収録する辞書。 |
| `tl_2025_us_state.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間と名称階層を持つUTF-16LE辞書。 |
| `tl_2025_us_state.names.csv` | CSV、UTF-8 | 辞書コード、直接値、州コード、GEOID、USPS略号、英語名、ANSIコードの対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とする。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点の州またはDistrict of ColumbiaをGisWordBookコードで表す。`0`は背景。 |
| GisWordBook | `[州・州相当区域名]`の固定1階層。両文字コード版は同一のコードと名称パスを持つ。 |
| names.csv | `wordbook_code,direct_value,STATEFP,GEOID,STUSPS,NAME,STATENS`の7列。各行は1区域に対応する。 |
| codemap | 製造時に`int(STATEFP)`をGisWordBookコードへ変換する対応表。リリースZIPには含めない。 |

`STATEFP`と`GEOID`は本原典レイヤでは同じ2桁の文字列である。`STUSPS`は2文字の略号、`STATENS`はANSIコードであり、名称階層には加えない。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 原典の`NAME`による英語の州・州相当区域名。 | 不可 |

共通の`United States`ノード、Census Region、Census Divisionは含めない。区域の外部識別には名称だけでなく`names.csv`の`STATEFP`を使用する。

## 4. WGSMapSet生成パラメータ

### tl_2025_us_state_WGS84-grid-512-100.wgsmapset.glc

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

### tl_2025_us_state_WGS84-grid-8192-1000.wgsmapset.glc

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
| SHP grid cell-size | 8192 | Shapefile分割格子のセルサイズ。 |
| block-size | 1024 | WGSMap格納ブロックサイズ。 |

### tl_2025_us_state_WGS84-grid-16384-10000.wgsmapset.glc

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

* 原典の法定・統計境界を使用しており、物理的な海岸線に沿う陸域図ではない。
* AlaskaのAleutian Islandsは180度経線の両側に分布する。単純な全体boundsを連続した地理的範囲として解釈しない。
* 粗いグリッドや区域境界付近では、サンプリングにより小さな島嶼が消失したり、背景値`0`が現れたりする。
* 原典の境界・名称の基準日より後の変更は反映しない。
