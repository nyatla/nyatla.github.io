# Spain IGN/CNIG BDDAE（2026-07-28版）

## 1. 概要

IGN/CNIGのBase de Datos de Divisiones Administrativas de España（BDDAE）の区域を、GisWordBookコードで参照する区域図と名称辞書として収録する。通常の市町村と共有管轄地等の特殊区域を独立した区域として保持し、存在しない上位行政階層は空文字列で表す。区域図の非ゼロ画素値は同梱辞書のコードであり、原典の区域コードとの対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | Spain IGN/CNIG BDDAE（2026-07-28版） |
| リリースパッケージID | `es-2026-cnig-es-lilim-adm` |
| 対象地域 | スペイン本土、Illes Balears、Canarias、Ceuta、Melilla、および原典のTerritorio収録範囲。 |
| 対象区域 | 市町村相当の区域ポリゴン8,220区域。通常市町村8,132、共有管轄地等81、Territorio 7を含む。 |
| 入力座標系 | 本土・Illes Balears・Ceuta・MelillaはETRS89経緯度（EPSG:4258）。Canariasは配布SHP上WGS 84経緯度（EPSG:4326）。提供元の説明ではCanariasをWGS 84互換のREGCAN95としている。 |
| 出力座標系 | WGS 84互換の緯度経度格子。 |
| 座標変換 | 入力の経緯度を再投影・測地系変換せず、WGS 84互換の座標値として統合・格納する。 |
| 原典版・基準時点 | Límites municipales, provinciales y autonómicosの現行Shapefile、2026-07-28更新版。継続更新される区域データであり、全境界が同一日に確定したことを意味しない。 |

### 1.1 対象範囲

原典のRecintos municipalesに収録された8,220区域を採用する。自治州相当・県相当の名称は、それぞれの原典区域から対応付ける。自治州・自治都市は区域1、県・自治都市相当の区分は区域2に置き、独立した市町村または特殊区域の名称を区域3に置く。

共有管轄地等は、管理に関わる特定の市町村へ吸収せず、原典の区域コードと形状を持つ独立区域として扱う。区域種別は第3章の対応表で区別し、名称階層へ種別名のノードを追加しない。

原典のTerritorio 7区域も独立して収録する。原典で自治州・県の所属先がないことを示す「Territorios no asociados a ninguna autonomía」「Territorios no asociados a ninguna provincia」は行政階層の名称として採用せず、区域1・2を空文字列とする。

過去の境界線、市町村より上位の面、Ceuta・Melilla付近の中立地帯を表す独立した線データは、別の最下位区域として収録しない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | CUSTOM | 採用区域面の外側の外水面だけを除外し、面内の沿岸水域は区域として保持する。水際形状は原典に従い、追加の海岸線マスクは適用しない。 |
| 内水面 | NONE | 湖沼・河川を一律に除外しない。原典の区域面に含まれる水域は区域として保持し、追加の内水面マスクは適用しない。 |

### 1.3 領域・境界

スペイン本土、Balears、Canarias、Ceuta、Melillaと、原典Territorio 7区域を含むRecintos municipalesの収録範囲を対象とする。Gibraltarなどの収録は原典の区域集合を踏襲するものであり、領有関係や国際的地位について本データが判断するものではない。島嶼・飛地・離れたポリゴンも原典どおり採用する。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 原典準拠 | 採用する原典区域の境界に従い、別の国境資料による補正は行わない。 |
| 対象領域外 | 背景値 | 採用区域面の外側。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

背景値だけでは領域外、水域、内部の未割当地点を区別できない。区域コードも陸域のみを示す値ではなく、水域の扱いは第1.2節に従う。

原典には暫定的な境界が含まれる。提供元は境界の位置不確かさを一般に約40mと説明しており、精度改善された境界を除いて詳細な測量境界として扱えない。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 最下位区域の11桁のNATCODE。INSPIREIDもnames.csvに保持する。原典コードは文字列で扱う。 |
| 原典ID値 | remap前のGisRaster値はGRVALUE=GID。採用区域をNATCODEの文字列昇順で安定ソートし、1から8,220まで付与した連番。NATCODEを整数化した値ではない。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | 第3.2節の名称パスごとに、対応する最小GIDの昇順で1から採番する。コード範囲は1〜8,220。 |
| マップコード | GRVALUEをGisWordBookコードへremapした値。非ゼロ値は同梱辞書のレコードとnames.csvのwordbook_codeに対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`es-2026-cnig-es-lilim-adm-rev1.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `spain_bddae_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした区域図。 |
| `spain_bddae_2026-grid-1024-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした区域図。 |
| `spain_bddae_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした区域図。 |
| `spain_bddae_2026.giswordbook` | GisWordBook/0、UTF-8 | 自治州相当、県相当、市町村・特殊区域の固定3スロットの名称辞書。 |
| `spain_bddae_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | UTF-8版と同じコード空間・名称パスを持つ辞書。 |
| `spain_bddae_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、原典コード、名称および区域種別の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、市町村または特殊区域をGisWordBookコードで表す。 |
| GisWordBook | 自治州相当、県相当、市町村・特殊区域名の固定3スロット。両文字コード版は同一のコードと名称パスを持つ。 |
| names.csv | wordbook_code, GID, GRVALUE, NATCODE, INSPIREID, AUT_CODE, AUT_NAME, PROV_CODE, PROV_NAME, AREA_NAME, AREA_TYPE, NATLEVNAMEの12列。各行は採用区域1件に対応する。 |

names.csvのwordbook_codeは最終マップ値、GRVALUEは直接値、GIDはその採用区域の内部連番である。NATCODE・INSPIREID・NATLEVNAMEは原典の値、AREA_NAMEは原典のNAMEUNITである。AUT_CODE・PROV_CODEは原典の自治州相当・県相当の2桁コードで、実在する所属階層がない場合は名称とともに空文字列にする。先頭ゼロは保持する。

AREA_TYPEは本製品の区画分類であり、原典のNATLEVNAMEとは区別する。

| AREA_TYPE | 意味 | 本版の件数 |
| --- | --- | ---: |
| MUNICIPIO | 通常の市町村。原典のNATLEVNAMEがMunicipioで、下記SHARED_AREAに該当しない区域。 | 8,132 |
| SHARED_AREA | 共有管轄地等の特殊区域。NATCODEの末尾5桁の先頭が53となる区域。原典のNATLEVNAMEはMunicipioである。 | 81 |
| TERRITORIO | 原典のNATLEVNAMEがTerritorioである区域。 | 7 |

codemapは直接値とGisWordBookコードの変換に使用するが、リリースパッケージには含めない。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 自治州または自治都市の原典名称。 | 可。実在する所属階層がない場合は空文字列。 |
| 区域2 | 県または自治都市相当の原典名称。 | 可。実在する所属階層がない場合は空文字列。 |
| 区域3 | 市町村または特殊区域の原典名称。 | 不可。 |

名称がなくてもスロットを詰めず、3個を保持する。通常市町村と共有管轄地等は`[AUT_NAME, PROV_NAME, AREA_NAME]`、上位所属のないTerritorioは`["", "", AREA_NAME]`となる。共有管轄地等を管理する個別市町村の名称は、親階層として追加しない。

共通の国名、原典コード、区域種別およびNUTS区分はStringSetに含めない。名称は原典の綴り・アクセント・併記表記を保持する。同名判定は区域1〜3の全名称パスの組で行い、区域3だけが同名でも集約しない。本版の8,220区域には全名称パスの重複はない。

## 4. WGSMapSet生成パラメータ

### spain_bddae_2026-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 100 | 1/100度単位。 |
| SHP grid cell-size | 512 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

### spain_bddae_2026-grid-1024-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 1000 | 1/1000度単位。 |
| SHP grid cell-size | 1024 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

### spain_bddae_2026-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | MAX_AREA | セルと交差する個別ポリゴン片の面積が最大の区域を選ぶ。 |
| minimum rate | 0.01 | 全ポリゴン片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | auto / all / lzss | WGSMap/3 + GI01をWGSMapSet/3へ格納。 |
| unit-inv | 10000 | 1/10000度単位。 |
| SHP grid cell-size | 8192 | Shapefile分割格子のセルサイズ。 |
| block-size | 512 | WGSMap格納ブロックサイズ。 |

---

## 5. 備考・既知の制約

- GID・GRVALUE・GisWordBookコードは本版の採用区域に対する値であり、原典の版や採用範囲が変わると同じ区域でも値が変わり得る。外部データとの対応にはnames.csvの原典コードを用いる。
- 辞書コードは区域を参照する値であり、同一区域の飛地・島嶼などの個別ポリゴン片を識別する値ではない。
- 小島・細い区域は、粗い格子で画素として選ばれない場合がある。サンプリング解像度は原典の位置精度を保証するものではない。
- 原典名称を保持するため、CP932版の辞書は収録しない。CP932ではアクセント等を含む名称を網羅的に表現できない。
