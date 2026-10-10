# シンガポールMaster Plan 2019計画区域（No Sea）

## 1. 概要

Urban Redevelopment Authority（URA）のMaster Plan 2019 Subzone Boundary（No Sea）を基に、Region、Planning Area、Subzoneを参照できる都市計画区域図・名称辞書を収録する。これらは計画上の区域階層であり、行政自治体の階層ではない。非ゼロの画素値は同梱GisWordBookのコードである。

| 項目 | 内容 |
| --- | --- |
| データセット名 | シンガポールMaster Plan 2019計画区域（No Sea） |
| リリースパッケージID | `sg-2019-data-gov-sg-master-plan-subzone-no-sea` |
| 対象地域 | 原典No Sea版のSubzoneが表すシンガポールの範囲。原典に収録された島嶼を含む。 |
| 対象区域 | Subzone 332区域。上位名称階層はRegion 5区域とPlanning Area 55区域。 |
| 入力座標系 | WGS 84経緯度（EPSG:4326、GeoJSON）。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | 入力・出力ともWGS 84経緯度であり、再投影・測地系変換は行わない。 |
| 原典版・基準時点 | Master Plan 2019のURA_MP19_SUBZONE_NO_SEA_PL。採用原典はFMEL_UPD_Dが2019-12-23と2021-09-10のレコードを含む。公式ページのData fromは2021年9月。計画版の2019とデータ更新時点を区別する。 |

### 1.1 対象範囲

原典の332 Subzoneを採用する。名称階層と上位コードは各FeatureのREGION_N・REGION_C、PLN_AREA_N・PLN_AREA_C、SUBZONE_N・SUBZONE_Cに従う。Region・Planning Areaを独立した画素値として重ねない。

計画区域は現況の開発範囲や街区と一致するとは限らない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `SIMPLE` | No Sea版の計画区域の外縁を簡略な海岸側水際線として扱い、海域を除外した区域図とする。原典は概略的な計画境界であり、詳細実測の海岸線としては扱わない。追加の海岸線資料は使用しない。 |
| 内水面 | `NONE` | No Seaは内水面の全面除外を意味しない。貯水池・河川等を一律に除外せず、原典のSubzoneに含まれる水面はその区域として保持する。水に関する名称の区域も保持するが、名称から水面と陸域を区別する値は作らない。 |

### 1.3 領域・境界

シンガポールのMaster Plan 2019 Subzone境界No Sea版の収録範囲を対象とし、原典の島嶼・全図形部分・穴を保持する。Seaを含む別版や後年の計画境界は追加しない。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 該当なし | 収録対象に隣接する国・地域との陸上の国境区間はない。海岸側の扱いは第1.2節に従う。 |
| 対象領域外 | 背景値 | 採用区域面の外側。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

背景値だけから水域と領域外・内部の未割当地点を区別できず、区域コードは陸域専用の値ではない。CA_INDや水に関する名称も水面フラグではない。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 原典のSUBZONE_C。英数字のSubzoneコードであり、採用332区域で一意。 |
| 原典ID値 | remap前のGisRaster値はSUBZONE_CをASCII辞書順に並べた1始まりの順位（1～332）。英数字コードそのものを整数と解釈しない。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | 同じSUBZONE_Cの順に1から332まで採番する。 |
| マップコード | 原典ID値と同値のGisWordBookコード。値対応は恒等であり、非ゼロ値は同梱辞書の葉レコードとnames.csvのwordbook_codeに対応する。 |

原典のSUBZONE_NOには同じ値を持つ複数区域があり、単独の区域識別子ではない。原典区域との照合にはnames.csvのSUBZONE_CODEを使用する。

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `sg-2019-data-gov-sg-master-plan-subzone-no-sea-rev1.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `singapore_masterplan_2019-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたSubzoneの区域図。 |
| `singapore_masterplan_2019-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたSubzoneの区域図。 |
| `singapore_masterplan_2019-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたSubzoneの区域図。 |
| `singapore_masterplan_2019.giswordbook` | GisWordBook/0, UTF-8 | 区域階層・属性の名称辞書。 |
| `singapore_masterplan_2019.utf16.giswordbook` | GisWordBook/0, UTF-16LE | 同じコード空間・レコード順序の辞書。 |
| `singapore_masterplan_2019.names.csv` | CSV, UTF-8 | 辞書コード、原典ID値、原典コードおよび名称の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、末端区域をGisWordBookコードで表す。 |
| GisWordBook | [Region名, Planning Area名, Subzone名]の固定3スロット。 UTF-8版とUTF-16LE版は同一のコード空間・レコード順序を持つ。 |
| names.csv | `wordbook_code,GRVALUE,REGION_CODE,REGION_NAME,PLANNING_AREA_CODE,PLANNING_AREA_NAME,SUBZONE_CODE,SUBZONE_NAME`の8列。ヘッダーを除くデータ行は末端区域ごとに1行、計332行。 |

GRVALUEはSUBZONE_Cから定めた原典ID値。各CODE・NAMEはREGION_C・REGION_N、PLN_AREA_C・PLN_AREA_N、SUBZONE_C・SUBZONE_Nに対応する。名称・英数字コードは原典の表記を保持する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Region（計画地域）の名称。 | 不可 |
| 区域2 | Planning Area（計画区域）の名称。 | 不可 |
| 区域3 | Subzone（計画下位区域）の名称。 | 不可 |

国名等の共通ノード、原典コード、その他の属性はStringSetに含めない。区域1・区域2・区域3の組で辞書レコードを識別する。採用332区域ではこの組がすべて一意であり、別Subzoneの名称集約は生じない。同じSubzoneの飛地・複数の図形部分には同じ辞書コードを割り当てる。

## 4. WGSMapSet生成パラメータ

### singapore_masterplan_2019-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大の末端区域を選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `100` | サンプリング単位は1/100度。 |
| SHP grid cell-size | `512` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### singapore_masterplan_2019-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大の末端区域を選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `1000` | サンプリング単位は1/1000度。 |
| SHP grid cell-size | `4096` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### singapore_masterplan_2019-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大の末端区域を選ぶ。 |
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

- 土地の用途・権利や行政自治体を直接判定するデータではない。
- 小島・細い区域・飛地は、粗い格子で画素として選ばれない場合がある。
- GisWordBookコードは本版の辞書レコードを参照する値であり、異なる版の恒久的な区域IDとして使用しない。照合にはnames.csvに保持した原典コードを用いる。
- 原典名称の文字を保持するためCP932版の辞書は収録しない。名称・区域は採用した原典版に依存し、その後の変更は反映しない。本区域図は法的な境界位置や土地の権利を確定するものではない。
