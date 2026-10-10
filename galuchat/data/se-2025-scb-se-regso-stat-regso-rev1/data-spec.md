# スウェーデン地域統計区域 RegSO 2025

## 1. 概要

スウェーデン統計局（Statistiska centralbyrån、SCB）のRegSO 2025を基に、Län（県）、Kommun（自治体）、RegSO（地域統計区域）を参照できる区域図・名称辞書を収録する。RegSOの境界・所属コード・名称は2025年版、県・自治体の名称はSCBの2026年版コード名称表に従う。区域図の非ゼロ値は同梱GisWordBookのコードであり、原典コードとの対応は同梱のnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | スウェーデン地域統計区域 RegSO 2025 |
| リリースパッケージID | `se-2025-scb-se-regso-stat-regso` |
| 対象地域 | RegSO 2025が表すスウェーデン全域。島嶼および原典に含まれる領海内の区域を含む。 |
| 対象区域 | RegSO 3,363区域。上位の名称階層にはLän 21県、Kommun 290自治体を使用する。 |
| 入力座標系 | SWEREF99 TM（EPSG:3006）。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | EPSG:3006からEPSG:4326へ再投影・測地系変換する。 |
| 原典版・基準時点 | 境界・RegSO名称・所属コードは`RegSO_2025`、`version=2025_v2`、`referensdatum=20250101`。県・自治体名称は`kommunlankod-2026.xlsx`の2026年版。 |

### 1.1 対象範囲

原典の全3,363 RegSOを採用する。県・自治体への所属はRegSO原典の`lanskod`、`kommunkod`に従い、名称はそれぞれのコードに対応する2026年版コード名称表の表記を使用する。全県・自治体コードが名称表に対応し、所属の不整合はない。

区域地図の検索対象はRegSOであり、県や自治体の面を別の画素値として重ねない。RegSOは統計区域であり、自治体より下位の行政組織を表すものではない。DeSO（人口統計区域）は名称階層・区域地図に含めない。

島嶼、飛地、離れた区域部分、内側の穴は原典の形状に従う。同じRegSOに属する複数の図形部分は同じ区域コードを持つ。隣国との境界は原典準拠とし、別の国境資料による補正は行わない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `NONE` | RegSO区域に含まれる海域は、そのRegSOの区域として保持する。原典の2025年版は領海境界まで区域を含める仕様であり、区域コードから陸域と海域を区別できない。追加の水域クリップは行わない。 |
| 内水面 | `NONE` | RegSO区域に含まれる湖沼・河川は、そのRegSOの区域として保持する。採用データには陸域・内水面を区別する属性がなく、追加の水域クリップは行わない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | `regsokod`。4桁の自治体コード、文字`R`、3桁の区域番号から成る8文字のコード。先頭ゼロを保持してnames.csvに収録する。 |
| 原典ID値 | remap前のGisRaster値は、`regsokod`から`R`を取り除いて10進整数にした値。`int(kommunkod) × 1000 + int(regsokodの末尾3桁)`に等しい。3,363区域で一意である。 |
| 背景値 | `0`。RegSO区域の外側、原典図形の穴、サンプリングで区域が選ばれなかった画素。水域専用の値ではない。 |
| GisWordBookコード | 原典ID値の昇順で、1から3,363まで採番する。0は辞書レコードを指さない。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は同梱辞書の葉レコードおよびnames.csvの`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `se-2025-scb-se-regso-stat-regso.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `sweden_regso_2025-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたRegSO区域図。 |
| `sweden_regso_2025-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたRegSO区域図。 |
| `sweden_regso_2025-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたRegSO区域図。 |
| `sweden_regso_2025.giswordbook` | GisWordBook/0, UTF-8 | Län名・Kommun名・RegSO名の辞書。 |
| `sweden_regso_2025.utf16.giswordbook` | GisWordBook/0, UTF-16LE | 同じコード空間・名称階層の辞書。 |
| `sweden_regso_2025.names.csv` | CSV, UTF-8 | 辞書コード、直接値、Län・Kommun・RegSOの原典コードおよび名称の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点のRegSOをGisWordBookコードで表す。背景は0。 |
| GisWordBook | `[Län名, Kommun名, RegSO名]`の固定3スロット。UTF-8版とUTF-16LE版は同一のコード空間・レコード順序を持つ。 |
| names.csv | `wordbook_code,GRVALUE,LAN_CODE,LAN_NAME,KOMMUN_CODE,KOMMUN_NAME,REGSO_CODE,REGSO_NAME`の8列。RegSOごとに1行、計3,363行。 |

`GRVALUE`はRegSOの原典ID値である。`LAN_CODE`と`KOMMUN_CODE`は原典の`lanskod`と`kommunkod`に対応し、それぞれ2桁・4桁の文字列として先頭ゼロを保持する。`REGSO_CODE`は原典の`regsokod`、`REGSO_NAME`は原典の`regsonamn`である。`LAN_NAME`と`KOMMUN_NAME`は2026年版コード名称表に従う。名称のアクセント付き文字、空白、ハイフンなどの原典表記を保持する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Län（県）の名称。 | 不可 |
| 区域2 | Kommun（自治体）の名称。 | 不可 |
| 区域3 | RegSO（地域統計区域）の名称。 | 不可 |

国名などの共通ノード、DeSO、原典コードおよびその他の属性はStringSetに含めない。名称パスは区域1・区域2・区域3の組で識別する。本版の3,363区域では、この組はすべて一意であり、別RegSOの名称集約は生じない。異なる自治体にある同名RegSOは、上位名称を含むパスで区別する。同じRegSOの飛地や複数の図形部分は別の辞書レコードとしない。

## 4. WGSMapSet生成パラメータ

### sweden_regso_2025-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大のRegSOを選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `100` | サンプリング単位は1/100度。 |
| SHP grid cell-size | `512` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### sweden_regso_2025-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大のRegSOを選ぶ。 |
| minimum rate | `0.01` | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `1000` | サンプリング単位は1/1000度。 |
| SHP grid cell-size | `4096` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMapSetブロックサイズ。 |

### sweden_regso_2025-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルと交差する個別ポリゴン片の面積が最大のRegSOを選ぶ。 |
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

* 境界・RegSO名称・所属コードの基準日は2025年1月1日であり、県・自治体名称は2026年版名称表による。名称表の採用によって境界が2026年版へ更新されたことを意味しない。
* RegSOは県・自治体へ集約できる統計区域であり、行政組織の完全な3層階層を表すものではない。DeSO 2018・RegSO 2020などの旧版と区域コードや境界をそのまま対応付けない。
* RegSO名だけでは区域を一意に識別できない。表示・検索には上位名称を含むパスを、原典との照合にはnames.csvの`REGSO_CODE`を使用する。
* 区域図は陸域専用のマスクではない。区域コードから海域・内水面を判別できず、背景値だけから水域や外国を判定することもできない。
* 島嶼、飛地、穴などの形状上の特徴は原典に従う。小島や細い区域は粗い格子で画素化されない場合があり、格子化した境界付近の判定は元のベクトル境界と一致しない場合がある。
* 原典RegSOコードは区域照合の識別子、GisWordBookコードは本版の辞書レコードを参照する値である。異なる版の辞書コードを恒久的な区域IDとして使用しない。
* 原典名称の文字を保持するため、CP932版の辞書は収録しない。本区域図は法的な境界位置や土地の権利を確定するものではない。
