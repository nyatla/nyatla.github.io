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

世界の各shapeGroupについて、`ADM2`、`ADM1`、`ADM0`、`DISP`の順に、存在する最初の区域種別を採用する。通常のADM区域が存在するshapeGroupでは`DISP`を採用せず、ADM区域が存在しない場合だけ`DISP`を採用する。

CGAZは全球合成データであり、境界を簡略化している。係争地域はgeoBoundariesが採用する定義に基づくため、すべての国・地域の公式見解と一致するとは限らない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `SIMPLE` | 原典CGAZは境界を簡略化した全球合成データであり、採用した区域の水際線に従う。別の海岸線データによる補正は行わない。 |
| 内水面 | `NONE` | 元データには湖沼が区域外となる場所と区域内に残る場所が混在する。追加の湖沼・河川データによる除外は行わない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | geoBoundariesの`shapeID`。 |
| 原典ID値 | 採用した`shapeID`へ1から順に割り当てる整数`GBCGAZ_ID`。ADM系区域を`shapeGroup`、`shapeName`、`shapeID`順で採番し、DISP区域をその後へ追加する。 |
| 背景値 | `0`。区域が設定されていない地点。 |
| GisWordBookコード | `GBCGAZ_ID`と同じ値。再採番しない。 |
| マップコード | `GBCGAZ_ID`と同じ値。対応するGisWordBookのレコードを示す。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `world-2024-geoboundaries-org-cgaz-adm.zip` に含める全ファイルは次のとおりである。全ファイルをZIPのルートディレクトリに配置する。

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
| 区域地図 | 各地点に`GBCGAZ_ID`を格納する区域地図。`0`は背景であり、非0値は同じコードを持つGisWordBookレコードを示す。 |
| GisWordBook | shapeGroup、区域種別および区域名から成る固定3スロットの辞書。 |

### 3.2 StringSet

GisWordBookの各レコードは次の3スロットを持つ。`shapeName`が空の場合は、区域を識別できるように`shapeID`を使用する。

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | `shapeGroup`。原典の区域グループ識別子。 | 不可 |
| 属性1 | `shapeType`。採用した`ADM2`、`ADM1`、`ADM0`または`DISP`。 | 不可 |
| 区域2 | `shapeName`。空の場合は`shapeID`。 | 不可 |

世界各地の名称を収録するため、GisWordBookはUTF-8版とUTF-16LE版を提供する。CP932で表現できない名称があるため、Shift_JIS版は提供しない。

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

* CGAZは利用しやすいファイルサイズにするため境界を簡略化した全球合成データであり、詳細な測量・法的境界の用途を想定しない。
* 係争地域の表現はgeoBoundariesが採用する定義に基づき、他の見解と一致しない場合がある。
* WGSMapSetは原典図形を緯度経度格子へサンプリングした成果物であり、境界付近の判定は元図形と完全には一致しない場合がある。
