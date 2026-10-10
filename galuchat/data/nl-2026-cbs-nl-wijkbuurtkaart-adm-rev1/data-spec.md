# CBS Wijk- en Buurtkaart 2026 Municipality

## 1. 概要

CBSのWijk- en Buurtkaart 2026 versie 0を基に、オランダのProvincie（州）とGemeente（自治体）を名称辞書コードで参照する区域図を収録する。同じ自治体でも原典の陸地面と水域面を区別し、WATER属性を持つ別の辞書レコードとして保持する。地図の非ゼロ画素値は同梱GisWordBookのコードであり、原典コードとの対応はnames.csvに保持する。

| 項目 | 内容 |
| --- | --- |
| データセット名 | CBS Wijk- en Buurtkaart 2026 Municipality |
| リリースパッケージID | `nl-2026-cbs-nl-wijkbuurtkaart-adm` |
| 対象地域 | 欧州側オランダの原典採用区域。カリブ地域は含まない。 |
| 対象区域 | 342自治体の423面（陸地342面、水域81面）。 |
| 入力座標系 | Amersfoort / RD New（EPSG:28992）。原典geometryはZ成分を持つ。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）、2次元。 |
| 座標変換 | GeoPandas/PROJによりEPSG:28992からEPSG:4326へ変換し、Z成分を除去する。観測時点を指定した地殻変動補正は行わない。 |
| 原典版・基準時点 | Wijk- en Buurtkaart 2026 versie 0の`gemeenten`レイヤ。自治体・州対応表は2026-01-01基準。 |

### 1.1 対象範囲

原典のgemeentenレイヤにある自治体面を対象とする。原典の陸地面と水域面は別面のまま保持し、両者を自治体ごとに統合しない。261自治体は陸地面だけを持ち、81自治体は陸地面と水域面を持つ。州は名称階層として参照できるが、州の面を独立した検索対象として重ねない。

原典の`water=NEE`と`water=JA`をともに含む。水域として設けられた区域も採用し、コード末尾だけを理由に除外しない。

本製品は自治体レイヤに基づく。別製品のDistrictからBuurtを統合した地図ではなく、Districtのコード空間を共有しない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | EXPLICIT | 原典で水域として区分された海域を、WATER属性で識別できる区域として保持する。水域側にも区域コードを持つ。 |
| 内水面 | NONE | 大水域はWATER属性で識別できる区域として保持する。一方、陸地区域に含まれる小水域は独立して区分されておらず、そのまま含む。 |

### 1.3 領域・境界

欧州オランダの原典収録範囲を対象とし、カリブ海の領域は含めない。`water=B`の外国領Buitenland（`GM0998`）は除外する。採用区域の島嶼・飛地・水域面は原典の形状に従う。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 原典準拠 | 採用する原典区域の境界に従い、別の国境資料による補正は行わない。 |
| 対象領域外 | 背景値 | 採用区域面の外側と、除外した外国領。外国領の除外は水域クリップではない。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

第1.2節のWATER区分は外水面・内水面の別や全水域を網羅するものではない。背景値だけから外国・水域・内部の未割当地点を区別できず、WATER=`NEE`や区域コードを陸地判定に用いない。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 自治体コードgm_code（GEM_CODE）。原典面の識別にはwater（WATER）も合わせて用いる。同じGEM_CODEの陸地・水域面は別面。 |
| 原典ID値 | remap前のGisRaster値は`GRVALUE=GID`。採用面を`GEM_CODE, WATER`の昇順でソートし、1から423まで付けた連番。原典コードの数値化ではない。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | 第3.2節の識別・集約単位に、GIDの昇順で初めて現れるものから1始まりの連番を付ける。本版のコード数は423。 |
| マップコード | GRVALUEをGisWordBookコードへremapした値。非ゼロ値は同梱辞書のレコードとnames.csvの`wordbook_code`に対応する。 |

原典のfid・jrstatcodeはマップ値や辞書コードに用いない。

---

## 2. リリースパッケージ構成ファイル

単一の`nl-2026-cbs-nl-wijkbuurtkaart-adm-rev1.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `netherlands_municipality_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした自治体区域図。 |
| `netherlands_municipality_2026-grid-1024-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした自治体区域図。 |
| `netherlands_municipality_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした自治体区域図。 |
| `netherlands_municipality_2026.giswordbook` | GisWordBook/0、UTF-8 | 区域1〜2の名称と属性1のWATERを持つ辞書。 |
| `netherlands_municipality_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | UTF-8版と同じコード空間・StringSetを持つ辞書。 |
| `netherlands_municipality_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、原典コード・名称およびWATERの対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、自治体面をGisWordBookコードで表す。 |
| GisWordBook | 区域1〜2に名称階層、属性1に原典のWATERを格納する固定3スロット。 |
| names.csv | `wordbook_code, GID, GRVALUE, PROV_CODE, PROV_NAME, GEM_CODE, GEM_NAME, WATER`の8列。採用面1件につき1行。 |

names.csvの`PROV_CODE/PROV_NAME`はCBS自治体・州対応表の州コード・名称、`GEM_CODE/GEM_NAME`は自治体コード・名称である。`GRVALUE`は直接値、`wordbook_code`は最終マップ値に対応する。原典コードは文字列として扱い、接頭辞と先頭ゼロを保持する。

陸地面・水域面を自治体単位で照合する場合は、names.csvのGEM_CODEを使用する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Provincieの名称。 | 不可 |
| 区域2 | Gemeenteの原典名称。 | 不可 |
| 属性1 | 原典のWATER。`NEE`は陸地区分、`JA`は水域区分。 | 不可 |

スロットは`[PROV_NAME, GEM_NAME, WATER]`の順で3個を保持する。WATERは区域階層ではなく、末尾の面属性である。国名`Nederland`と原典コードはStringSetに含めない。

州・自治体名とWATERの組を識別・集約単位とする。名称は原典表記を保持し、アクセント記号等をASCII化せず、原典コードや独自の識別接尾辞を付加しない。

## 4. WGSMapSet生成パラメータ

### netherlands_municipality_2026-grid-512-100.wgsmapset.glc

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

### netherlands_municipality_2026-grid-1024-1000.wgsmapset.glc

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

### netherlands_municipality_2026-grid-8192-10000.wgsmapset.glc

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

- 原典の境界を一般化・簡略化せずに採用しているが、サンプリング解像度が原典の位置精度を向上させるものではない。法的な境界確定、地籍、測量、航法および緊急対応の根拠として用いない。
- 小島・細い区域は、粗い格子で画素として選ばれない場合がある。
- GID・GRVALUE・GisWordBookコードは原典の版と採用集合に依存する。版をまたぐ対応にはnames.csvの原典コードを用いる。
