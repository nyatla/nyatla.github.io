# フィンランド行政区域区分（2026年、1:10,000 GML版）

## 1. 概要

フィンランド国土測量局（Maanmittauslaitos）の2026年版行政区域区分を基に、Maakunta（地域）とKunta（自治体）を参照できる区域図・名称辞書を収録する。区域図は自治体を表し、非ゼロ値は同梱GisWordBookのコードである。原典コードおよびフィンランド語・スウェーデン語名称との対応は、同梱のnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | フィンランド行政区域区分（2026年、1:10,000 GML版） |
| リリースパッケージID | `fi-2026-maanmittauslaitos-fi-kuntajako-adm` |
| 対象地域 | 原典の自治体区域が表すフィンランド全域。オーランド諸島を含む。 |
| 対象区域 | Kunta 308自治体。上位の名称階層にはMaakunta 19地域を使用する。 |
| 入力座標系 | ETRS89 / TM35FIN(E,N)（EPSG:3067）。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | EPSG:3067からEPSG:4326へ再投影・測地系変換する。 |
| 原典版・基準時点 | 行政区域区分の2026年版、1:10,000、GML形式、2026年6月更新版。2026年の行政区分に、フィンランド・ノルウェー国境の2026年6月更新を含む。 |

### 1.1 対象範囲

原典の全308自治体を採用する。島嶼、飛地、離れた区域部分、内側の穴は原典の自治体形状に従う。同じ自治体に属する複数の部分は、同じ区域コードを持つ。

所属Maakuntaは、原典の上位区域参照に従う。Hyvinvointialue（福祉サービス区域）は原典の所属関係に含まれる中間区域であり、本リリースの名称階層には含めない。Maakunta、Hyvinvointialue、Elinvoimakeskus（経済開発センター）および国の面は、自治体とは別の画素値として収録しない。

隣国との境界は原典準拠とし、別の国境資料による補正は行わない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `NONE` | 自治体区域に含まれる海域は、その自治体の区域として保持する。原典は海岸線を含まず、区域内の陸域と海域を区別できない。追加の水域クリップは行わない。 |
| 内水面 | `NONE` | 自治体区域に含まれる湖沼・河川は、その自治体の区域として保持する。原典は水際線を含まず、区域内の陸域と内水面を区別できない。追加の水域クリップは行わない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 自治体の`nationalCode`。3桁の文字列であり、先頭ゼロを保持してnames.csvに収録する。Maakuntaの`nationalCode`は別体系の2桁コードである。 |
| 原典ID値 | remap前のGisRaster値は、自治体の`nationalCode`を10進整数にした正の値。採用した308自治体で一意。 |
| 背景値 | `0`。自治体区域の外側、原典図形の穴、サンプリングで区域が選ばれなかった画素。水域専用の値ではない。 |
| GisWordBookコード | 自治体の原典ID値の昇順で、1から308まで採番する。0は辞書レコードを指さない。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は同梱辞書の葉レコードおよびnames.csvの`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `fi-2026-maanmittauslaitos-fi-kuntajako-adm.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `finland_kuntajako_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした自治体区域図。 |
| `finland_kuntajako_2026-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした自治体区域図。 |
| `finland_kuntajako_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした自治体区域図。 |
| `finland_kuntajako_2026.giswordbook` | GisWordBook/0, UTF-8 | Maakunta名・Kunta名から成るフィンランド語名称辞書。 |
| `finland_kuntajako_2026.utf16.giswordbook` | GisWordBook/0, UTF-16LE | 同じコード空間・名称階層の辞書。 |
| `finland_kuntajako_2026.names.csv` | CSV, UTF-8 | 辞書コード、直接値、Maakunta・Kuntaの原典コード、フィンランド語・スウェーデン語名称の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のKuntaをGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[Maakuntaのフィンランド語名, Kuntaのフィンランド語名]`の固定2スロット。UTF-8版とUTF-16LE版は同一のコード空間・レコード順序を持つ。 |
| names.csv | `wordbook_code,GRVALUE,REGION_CODE,REGION_NAME_FIN,REGION_NAME_SWE,MUNICIPALITY_CODE,MUNICIPALITY_NAME_FIN,MUNICIPALITY_NAME_SWE`の8列。自治体ごとに1行、計308行。 |

`GRVALUE`は自治体の原典ID値、`REGION_CODE`と`MUNICIPALITY_CODE`はそれぞれMaakuntaとKuntaの`nationalCode`であり、先頭ゼロを保つ文字列として記録する。`REGION_NAME_FIN`と`MUNICIPALITY_NAME_FIN`は原典の`fin`名称、`REGION_NAME_SWE`と`MUNICIPALITY_NAME_SWE`は原典の`swe`名称を表す。名称は原典の表記を保持し、翻訳・表記の置換は行わない。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Maakuntaのフィンランド語名称。 | 不可 |
| 区域2 | Kuntaのフィンランド語名称。 | 不可 |

国名などの共通ノード、Hyvinvointialue、Elinvoimakeskus、原典コードおよびスウェーデン語名称はStringSetに含めない。スウェーデン語名称はnames.csvから辞書コードに対応付けて参照できる。

区域の名称パスは区域1・区域2の組で識別する。本版の308自治体では、この組はすべて一意であり、別自治体の名称集約は生じない。同じ自治体の飛地や複数の図形部分は別の辞書レコードとしない。

## 4. WGSMapSet生成パラメータ

### finland_kuntajako_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大の自治体を選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `100` | サンプリング単位は1/100度。 |
| SHP grid cell-size | `512` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### finland_kuntajako_2026-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大の自治体を選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `1000` | サンプリング単位は1/1000度。 |
| SHP grid cell-size | `4096` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### finland_kuntajako_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大の自治体を選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `10000` | サンプリング単位は1/10000度。 |
| SHP grid cell-size | `8192` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

---

## 5. 備考・既知の制約

* 区域図は陸域専用のマスクではない。区域コードだけから陸域・海域・内水面を判定できず、背景値だけから水域や外国を判定することもできない。
* オーランド諸島も原典のMaakunta・Kuntaとして収録する。自治上の地位によって別の名称階層を追加しない。
* 原典の島嶼、飛地、図形の穴およびリングの接触などの形状上の特徴は保持する。これらは区域を除外する条件ではない。
* 区域図は原典のベクトル区域を格子化したものであり、境界付近では判定が元の境界と一致しない場合がある。小島、細い区域、飛地は粗い格子で画素化されない場合がある。
* 原典自治体コードは区域照合の識別子、GisWordBookコードは本版の辞書レコードを参照する値である。異なる版の辞書コードを恒久的な区域IDとして使用しない。
* 名称中のフィンランド語・スウェーデン語の文字を保持するため、CP932版の辞書は収録しない。
* 名称と区域は原典版に依存し、その後の変更は反映しない。本区域図は法的な境界位置や土地の権利を確定するものではない。
