# swissBOUNDARIES3D（2026-01-01）スイス区域

## 1. 概要

swisstopoのswissBOUNDARIES3D 2026年版を基に、スイスのKanton、該当するBezirk、基礎区域を参照できる区域図・名称辞書を収録する。国外区域は除外する。自治体に属さない湖面・共有地等のスイス側の基礎区域は保持し、通常自治体と区別する。非ゼロ画素値は同梱GisWordBookコードであり、原典番号との対応は`names.csv`で確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | swissBOUNDARIES3D（2026-01-01）スイス区域 |
| リリースパッケージID | `ch-2026-swisstopo-admin-ch-swissboundaries3d-adm` |
| 対象地域 | スイス連邦の原典基礎区域。国外区域は含まない。 |
| 対象区域 | 通常自治体2,110区域、Kantonsgebiet 11区域、Kommunanz 2区域、計2,123区域。 |
| 入力座標系 | CH1903+ / LV95 + LN02 height（水平EPSG:2056、鉛直EPSG:5728）、3次元図形。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）、2次元。 |
| 座標変換 | 水平座標をEPSG:2056からEPSG:4326へ変換し、鉛直座標Zは出力に持ち込まない。 |
| 原典版・基準時点 | swissBOUNDARIES3D 2026-01、2026-01-01時点。 |

### 1.1 対象範囲

`TLM_HOHEITSGEBIET`のうち`ICC=CH`の2,123面を採用し、リヒテンシュタイン、ドイツ、イタリアに属する13面は除外する。スイスの通常自治体に加え、湖面やStaatswald Galmを含む11の`Kantonsgebiet`、2つの`Kommunanz`を、別の原典IDを持つ区域として残す。国外側の水面は含めない。

KantonとBezirkの名称は原典の各面レイヤを番号で結合する。Bezirk番号を持たない区域では中間階層を空文字列にし、架空のBezirkを設けない。Kanton・Bezirk面は独立した画素値として重ねない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | NONE | 外洋は対象地域にない。外国側を除外するのは国コードによる区域選別であり、水域クリップではない。 |
| 内水面 | NONE | 湖沼・河川を一律に除外しない。大きな湖面の一部は独立した`Kantonsgebiet`として明示的に区別できる一方、自治体面に含まれる水域は別IDでは区別できないため、混合状態のうち低い方式を採る。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | `TLM_HOHEITSGEBIET.BFS_NUMMER`。採用した2,123面で一意。区域種別は`OBJEKTART`で区別する。 |
| 原典ID値 | remap前のGisRaster値は正の整数`BFS_NUMMER`そのもの。 |
| 背景値 | `0`。採用面の外側、除外した国外区域、図形の穴、サンプリングで区域が選ばれなかった画素。 |
| GisWordBookコード | `BFS_NUMMER`の昇順で1から2,123まで採番する。0は辞書レコードを指さない。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は辞書および`names.csv`の`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`ch-2026-swisstopo-admin-ch-swissboundaries3d-adm.zip`に次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown、UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown、UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `switzerland_swissboundaries3d_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位のスイス基礎区域図。 |
| `switzerland_swissboundaries3d_2026-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位のスイス基礎区域図。 |
| `switzerland_swissboundaries3d_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位のスイス基礎区域図。 |
| `switzerland_swissboundaries3d_2026.giswordbook` | GisWordBook/0、UTF-8 | Kanton・Bezirk・基礎区域名と区域種別の辞書。 |
| `switzerland_swissboundaries3d_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | 同じコード空間・名称階層の辞書。 |
| `switzerland_swissboundaries3d_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、原典番号、区域名・種別、Kanton・Bezirk番号と名称の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のスイス側基礎区域をGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[Kanton名, Bezirk名または空文字列, 基礎区域名, OBJEKTART]`の固定4スロット。両文字コード版は同一コード空間。 |
| names.csv | `wordbook_code,GRVALUE,BFS_NUMMER,KANTONSNUM,KANTON_NAME,BEZIRKSNUM,BEZIRK_NAME,NAME,OBJEKTART,ICC`の10列。採用面ごとに1行。 |

`BEZIRKSNUM`と`BEZIRK_NAME`は対応するBezirkを持たない場合に空欄とする。`ICC`は全行`CH`であるが、除外判定の根拠を明示するため保持する。原典番号と辞書コードは別の値空間である。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 原典Kanton名。 | 不可 |
| 区域2 | 原典Bezirk名。該当しなければ空文字列`""`。 | 可 |
| 区域3 | `TLM_HOHEITSGEBIET.NAME`による基礎区域名。 | 不可 |
| 属性1 | 原典`OBJEKTART`。`Gemeindegebiet`、`Kantonsgebiet`、`Kommunanz`。 | 不可 |

共通の国名と原典番号はStringSetに含めない。区域名だけが同じでも、Kanton・Bezirk・区域種別を含む組が異なれば別辞書コードとする。湖面と同名の自治体も、同一区域へ集約しない。

## 4. WGSMapSet生成パラメータ

### switzerland_swissboundaries3d_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の基礎区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### switzerland_swissboundaries3d_2026-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の基礎区域を選ぶ。 |
| minimum rate | 0.01 | 全採用面との交差面積合計がセル面積の1%以下なら0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01を格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 4096 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMapSetブロックサイズ。 |

### switzerland_swissboundaries3d_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルとの交差面積が最大の基礎区域を選ぶ。 |
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

* 本製品の最下位区域は通常自治体だけではない。湖面を含む`Kantonsgebiet`と`Kommunanz`は独立した区域として解釈する。
* 独立区域になっていない湖沼・河川は、水域であることを画素値だけから判別できない。非ゼロ値を陸地判定に用いない。
* Bezirkを持たない通常自治体と特殊区域がある。区域2の空文字列を欠落データと誤解しない。
* スイス国外に属する原典区域は背景となる。背景0だけから湖面、国外、図形の穴を区別できない。
* サンプリングにより小区域が消失し、境界のずれや背景画素が生じ得る。法的な境界確定や測量の根拠として使用しない。
