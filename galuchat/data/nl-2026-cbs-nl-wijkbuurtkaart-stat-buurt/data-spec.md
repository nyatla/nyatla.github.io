# CBS Wijk- en Buurtkaart 2026 District

## 1. 概要

CBSのWijk- en Buurtkaart 2026 versie 0を基に、Buurtを最小単位とするオランダの詳細区域図と名称辞書を収録する。Provincie・Gemeenteに続いてWijk・Buurtを参照でき、原典の陸地・水域区分をWATER属性に保持する。同じ名称階層とWATER属性を持つ原典区域は同じ辞書コードで表す。地図の非ゼロ画素値は同梱GisWordBookのコードであり、原典コードとの対応はnames.csvに保持する。

| 項目 | 内容 |
| --- | --- |
| データセット名 | CBS Wijk- en Buurtkaart 2026 District |
| リリースパッケージID | `nl-2026-cbs-nl-wijkbuurtkaart-stat-buurt` |
| 対象地域 | 欧州側オランダの原典採用区域。カリブ地域は含まない。 |
| 対象区域 | 14,913 Buurt面（陸地14,820面、水域93面）。342自治体、3,524 Wijkに属する。 |
| 入力座標系 | Amersfoort / RD New（EPSG:28992）。原典geometryはZ成分を持つ。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）、2次元。 |
| 座標変換 | GeoPandas/PROJによりEPSG:28992からEPSG:4326へ変換し、Z成分を除去する。観測時点を指定した地殻変動補正は行わない。 |
| 原典版・基準時点 | Wijk- en Buurtkaart 2026 versie 0の`buurten`レイヤ。自治体・州対応表は2026-01-01基準。 |

### 1.1 対象範囲

原典のbuurtenレイヤにあるBuurt面を対象とする。WijkとBuurtはCBSの統計・地域区分であり、Provincie・Gemeenteと同じ行政階層として解釈しない。上位区域は名称階層として参照できるが、WijkやGemeenteの面を独立した検索対象として重ねない。

原典の`water=NEE`と`water=JA`をともに含み、`water=B`の外国領Buitenland（`BU09989999`）は含めない。水域として設けられた区域も採用し、コード末尾だけを理由に除外しない。

本製品はBuurtレイヤに基づく。別製品のMunicipalityを細分化した地図ではなく、Municipalityのコード空間を共有しない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | EXPLICIT | 原典で水域として区分された海域を、WATER属性で識別できる区域として保持する。水域側にも区域コードを持つ。 |
| 内水面 | NONE | 大水域はWATER属性で識別できる区域として保持する。一方、陸地区域に含まれる小水域は独立して区分されておらず、そのまま含む。 |

WATERは原典の陸地と大きな水域の区分であり、外水面・内水面の別や、すべての水域の網羅的な判定を表すものではない。外国領の除外は水域クリップではない。

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | Buurtコードbu_code（BUURT_CODE）。WijkコードとGemeenteコードは上位区域の原典コードとして保持する。 |
| 原典ID値 | remap前のGisRaster値は`GRVALUE=GID`。採用面を`BUURT_CODE`の昇順でソートし、1から14,913まで付けた連番。原典コードの数値化ではない。 |
| 背景値 | `0`。採用区域外、除外した外国領およびサンプリングで区域が採用されなかった画素。水域を一律に表す値ではない。 |
| GisWordBookコード | 第3章の名称スロットとWATER属性の組ごとに採番する。GIDの昇順で初めて現れる組から1始まりの連番を付ける。本版のコード数は14,910。 |
| マップコード | GRVALUEをGisWordBookコードへremapした値。非ゼロ値は同梱辞書のレコードとnames.csvの`wordbook_code`に対応する。 |

複数のBUURT_CODEが同じ名称階層・WATERを持つ場合、同じ辞書コードへ対応する。本版では14,913面が14,910辞書レコードに対応する。名称パスの一致を原典区域の同一性や合併と解釈しない。両文字コード版は同一の辞書コード空間を持つ。原典のfid・jrstatcodeはマップ値や辞書コードに用いない。

---

## 2. リリースパッケージ構成ファイル

単一の`nl-2026-cbs-nl-wijkbuurtkaart-stat-buurt.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `netherlands_district_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたBuurt区域図。 |
| `netherlands_district_2026-grid-1024-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたBuurt区域図。 |
| `netherlands_district_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたBuurt区域図。 |
| `netherlands_district_2026.giswordbook` | GisWordBook/0、UTF-8 | 区域1〜4の名称と属性1のWATERを持つ辞書。 |
| `netherlands_district_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | UTF-8版と同じコード空間・StringSetを持つ辞書。 |
| `netherlands_district_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、原典コード・名称およびWATERの対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のBuurt面をGisWordBookコードで表す。`0`は背景。 |
| GisWordBook | 区域1〜4に名称階層、属性1に原典のWATERを格納する固定5スロット。 |
| names.csv | `wordbook_code, GID, GRVALUE, PROV_CODE, PROV_NAME, GEM_CODE, GEM_NAME, WIJK_CODE, WIJK_NAME, BUURT_CODE, BUURT_NAME, WATER`の12列。採用面1件につき1行。 |

names.csvの`PROV_CODE/PROV_NAME`はCBS自治体・州対応表の州コード・名称、`GEM_CODE/GEM_NAME`は自治体コード・名称である。WIJK_CODE/WIJK_NAMEとBUURT_CODE/BUURT_NAMEは原典のWijk・Buurtコードと名称である。`GRVALUE`は直接値、`wordbook_code`は最終マップ値に対応する。原典コードは文字列として扱い、接頭辞と先頭ゼロを保持する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Provincieの名称。 | 不可 |
| 区域2 | Gemeenteの原典名称。 | 不可 |
| 区域3 | Wijkの原典名称。統計・地域区分。 | 不可 |
| 区域4 | Buurtの原典名称。名称が欠損する場合は空文字列。 | 可 |
| 属性1 | 原典のWATER。`NEE`は陸地区分、`JA`は水域区分。 | 不可 |

スロットは`[PROV_NAME, GEM_NAME, WIJK_NAME, BUURT_NAME, WATER]`の順で5個を保持する。WATERは区域階層ではなく、末尾の面属性である。国名`Nederland`と原典コードはStringSetに含めない。

Buurt名称が欠けてもスロットを詰めず、空文字列を保持して名称を補作しない。本版の採用面に空のBuurt名称はない。同じ州・自治体・Wijk・Buurt名およびWATERを持つ面は、BUURT_CODEが異なっても同じ辞書コードとする。名称は原典表記を保持し、アクセント記号等をASCII化せず、原典コードや独自の識別接尾辞を付加しない。

## 4. WGSMapSet生成パラメータ

### netherlands_district_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値`0`。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

### netherlands_district_2026-grid-1024-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値`0`。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 1024 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

### netherlands_district_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値`0`。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 10000 | 1/10000度単位。 |
| SHP grid cell-size | 8192 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

---

## 5. 備考・既知の制約

* 水域を含む区域図であり、非ゼロ値を陸地判定として用いない。WATER=`NEE`も、水域を一切含まないことを保証するものではない。
* 名称指向の辞書コード図であり、原典Buurtごとの識別図ではない。本版では名称階層・WATERが一致する3組の異なるBuurtコードが集約される。原典コードとの多対一対応はnames.csvで確認できるが、同じ辞書コードとなった原典面をマップ値だけで区別できない。
* 水域Buurtには原典が大水域を区分するために設けた区域も含む。Wijk・Buurtを住所制度上の行政階層と同一視しない。
* 原典の境界を一般化・簡略化せずに採用しているが、サンプリング解像度が原典の位置精度を向上させるものではない。法的な境界確定、地籍、測量、航法および緊急対応の根拠として用いない。
* 粗いグリッドや境界付近では、小島・狭い区域の消失、境界のずれ、背景画素が生じ得る。
* GID・GRVALUE・GisWordBookコードは原典の版と採用集合に依存する。版をまたぐ対応にはnames.csvの原典コードを用いる。
