# BKG Verwaltungsgebiete 1:250 000 VG250（2026-01-01）

## 1. 概要

BKGのVG250（2026-01-01版）を基に、ドイツのGemeindeおよび自治体非所属区域をGisWordBookコードで参照する区域図と名称辞書として収録する。名称は原典のまま保持し、自治体非所属区域を同名の自治体へ統合しない。区域図の非ゼロ画素値は同梱辞書のコードであり、原典AGSとの対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | BKG Verwaltungsgebiete 1:250 000 VG250（2026-01-01） |
| リリースパッケージID | `de-2026-gdz-bkg-bund-de-vg250-adm` |
| 対象地域 | ドイツ連邦共和国の原典Gemeindeレイヤが表す陸域。 |
| 対象区域 | GemeindeおよびGemeindefreies Gebiet、計10,939区域。 |
| 入力座標系 | ETRS89 / UTM zone 32N（EPSG:25832）。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | GeoPandas/PROJによるEPSG:25832からEPSG:4326への座標変換。観測時点を指定した地殻変動補正は行わない。 |
| 原典版・基準時点 | Verwaltungsgebiete 1:250 000, Stand 01.01.2026。UTM32s、Shape、Ebenen版。 |

### 1.1 対象範囲

最下位区域は原典のVG250_GEMで表すGemeindeとGemeindefreies Gebietである。陸側区域を収録し、原典の水面側区域は含めない。上位のLand、Regierungsbezirk、KreisおよびVerwaltungsgemeinschaft等の情報は名称階層として参照できるが、それぞれの面を独立した検索対象として重ねて収録しない。

Gemeindefreies Gebietは自治体非所属区域として独立したAGSと辞書コードを持つ。同名の通常自治体があっても、その自治体の一部または飛び地として扱わない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | SIMPLE | 北海・バルト海・ボーデン湖の水面側区域を背景とする。ボーデン湖の水面も本製品では外洋扱いとする。これは本製品固有の扱いであり、湖一般を外水面に分類する規則ではない。原典の`GF=2`を除外し、`GF=4`の地図用・縮尺1:250,000の水際形状を保持した結果であり、別の詳細水際線マスクは追加しない。 |
| 内水面 | NONE | 上記の外洋扱いとする水面を除き、湖沼・河川・運河を一律に背景としない。原典の陸側区域に含まれる水域を保持し、追加の内水面マスクは適用しない。 |

### 1.3 領域・境界

ドイツのVG250_GEM陸側区域の収録範囲を対象とし、原典が表さない領域は補完しない。ドイツ・ルクセンブルクの共同主権区域は原典の一般化により含まれない。ボーデン湖は原典の技術的な区域境界に従い、水面側区域の扱いは第1.2節に定める。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 原典準拠 | 採用する原典区域の境界に従い、別の国境資料による補正は行わない。 |
| 対象領域外 | 背景値 | 採用する陸側区域面の外側。原典に含まれない共同主権区域や、第1.2節で除外する水面側区域を含む。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

背景値だけでは領域外、水域、内部の未割当地点を区別できない。区域コードも陸域のみを示す値ではなく、水域の扱いは第1.2節に従う。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 最下位区域のAGS（Amtlicher Gemeindeschlüssel）。names.csvの`GEM_CODE`に文字列として保持する。 |
| 原典ID値 | remap前のGisRaster値は`GRVALUE=GID`。採用区域を`LAND_CODE, RBZ_CODE, KRS_CODE, VWG_CODE, GEM_CODE`の順で、欠損コードを空文字列として安定ソートし、1から10,939まで付けた連番。AGSの数値化ではない。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | 第3.2節の識別単位ごとに、対応する最小GIDの昇順で1から採番する。コード範囲は1〜10,939。 |
| マップコード | GRVALUEをGisWordBookコードへremapした値。非ゼロ値は同梱辞書のレコードとnames.csvの`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`de-2026-gdz-bkg-bund-de-vg250-adm-rev1.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `germany_vg250_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした行政区域図。 |
| `germany_vg250_2026-grid-1024-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした行政区域図。 |
| `germany_vg250_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした行政区域図。 |
| `germany_vg250_2026.giswordbook` | GisWordBook/0、UTF-8 | 区域1〜5の名称と属性1の区域種別を持つ辞書。 |
| `germany_vg250_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | UTF-8版と同じコード空間・StringSetを持つ辞書。 |
| `germany_vg250_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、各階層の原典コード・名称および最下位区域種別の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、GemeindeまたはGemeindefreies Gebietを、GisWordBookコードで表す。 |
| GisWordBook | 区域1〜5に行政階層の名称、属性1に最下位区域の種別を格納する固定6スロット。両文字コード版は同一のコードとStringSetを持つ。 |
| names.csv | `wordbook_code, GID, GRVALUE, LAND_CODE, LAND_NAME, RBZ_CODE, RBZ_NAME, KRS_CODE, KRS_NAME, VWG_CODE, VWG_NAME, GEM_CODE, GEM_NAME, GEM_TYPE`の14列。採用区域1件につき1行。 |

names.csvの`GEM_CODE`はAGS、`GEM_NAME`は最下位区域名、`GEM_TYPE`は原典の区域種別である。`LAND_CODE, RBZ_CODE, KRS_CODE, VWG_CODE`は原典の行政地域キーARSに基づく。`GRVALUE`は直接値、`wordbook_code`は最終マップ値に対応する。原典コードは文字列として扱い、先頭ゼロを保持する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Landの原典名称。 | 不可 |
| 区域2 | Regierungsbezirkの原典名称。原典に対応する階層がなければ空文字列。 | 可 |
| 区域3 | KreisまたはKreisfreie Stadtの原典名称。 | 不可 |
| 区域4 | Verwaltungsgemeinschaft等の原典名称。 | 可 |
| 区域5 | GemeindeまたはGemeindefreies Gebietの原典名称。 | 不可 |
| 属性1 | 最下位区域種別`GEM_TYPE`。本版は`Gemeinde`、`Stadt`、`Gemeindefreies Gebiet`。 | 不可 |

スロットは`[LAND_NAME, RBZ_NAME, KRS_NAME, VWG_NAME, GEM_NAME, GEM_TYPE]`の順で6個を保持する。省略可能な階層が欠けても詰めずに空文字列を格納する。国名`Deutschland`と原典コードはStringSetに含めない。

区域4は、実際の自治体連合の名称だけでなく、原典の対応表が設けたGemeinschaftsfreie Gemeinde、Einheitsgemeinde、Gemeindefreies Gebiet等の枠も含む。そのため、同じ自治体名が区域3〜5へ繰り返し現れても、実際に複数の組織へ所属することを意味しない。原典に名称・キーがある枠を独自に空欄へ置き換えない。

名称は原典表記を保持し、ウムラウト、ß等をASCII化しない。区域1〜5の名称と属性1の組で辞書レコードを識別する。本版の10,939区域ではこの組がすべて一意であり、全名称が同じでも属性1が異なれば別コードとなる。名称へAGSや独自の識別接尾辞を付加しない。

## 4. WGSMapSet生成パラメータ

### germany_vg250_2026-grid-512-100.wgsmapset.glc

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

### germany_vg250_2026-grid-1024-1000.wgsmapset.glc

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

### germany_vg250_2026-grid-8192-10000.wgsmapset.glc

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

- 本リリースは地図用行政区域データに基づく。原典の基準縮尺は1:250,000であり、細かいサンプリング解像度が原典の位置精度を向上させるものではない。法的な境界確定、地籍、測量、航法および緊急対応の根拠として用いない。
- GID・GRVALUE・GisWordBookコードは原典の版と採用集合に依存する。版をまたぐ対応にはnames.csvの原典コードを用いる。
- 小島・細い区域・飛地は、粗い格子で画素として選ばれない場合がある。
