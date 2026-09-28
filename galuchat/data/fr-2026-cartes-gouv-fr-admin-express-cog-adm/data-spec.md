# France IGN ADMIN EXPRESS COG 4.0（2026-01-01）

## 1. 概要

IGNのADMIN EXPRESS COG 4.0（2026-01-01版）の行政区域を、GisWordBookコードで参照する区域図と名称辞書として収録する。通常のCommuneはCommune単位、Paris・Lyon・MarseilleはArrondissement municipal単位で表す。区域図の非ゼロ画素値は同梱辞書のコードであり、原典のINSEEコードとの対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | France IGN ADMIN EXPRESS COG 4.0（2026-01-01） |
| リリースパッケージID | `fr-2026-cartes-gouv-fr-admin-express-cog-adm` |
| 対象地域 | フランス本土（Corseを含む）、5つのDROM、Saint-Pierre-et-Miquelon |
| 対象区域 | CommuneおよびArrondissement municipal、計34,919区域 |
| 入力座標系 | WGS 84経緯度。GeoParquetのOGC:CRS84（経度・緯度順）、EPSG:4326互換。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326） |
| 座標変換 | 入力の経緯度を保持し、測地系変換・再投影は行わない。出力の座標参照系をEPSG:4326として扱う。 |
| 原典版・基準時点 | ADMIN EXPRESS COG 4.0 / 2026-01-01 / WGS84G / FRA、GeoParquet版。 |

### 1.1 対象範囲

34,874の通常Communeと45のArrondissement municipalを採用する。Paris・Lyon・Marseilleでは親Communeの面を子のArrondissement municipalで置換しており、親と子を重ねて収録しない。名称辞書では親Commune名を階層として保持する。

DROMはGuadeloupe、Martinique、Guyane、La Réunion、Mayotteである。Saint-Pierre-et-MiquelonのMiquelon-LangladeとSaint-Pierreも含める。この2区域にはRégion・Départementの階層を設けない。

本リリースは採用素材のCommuneとArrondissement municipalの範囲に限る。Saint-Barthélemy、Saint-Martin、その他の海外領域は含まない。旧・委任Communeを表すCommune associée ou déléguéeは独立した区域として含めず、Canton、EPCI、Arrondissementなどの別種の行政区分も返さない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | CUSTOM | 原典のCommune・Arrondissement municipalの面に含まれない外水面は背景とし、面に含まれる沿岸水域は区域として保持する。原典の区域形状を採用し、追加の海岸線マスクは適用しない。 |
| 内水面 | NONE | 湖沼・河川を一律に除外しない。原典の区域面に含まれる水域は区域として保持し、追加の内水面マスクは適用しない。 |

### 1.3 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 採用レイヤ（CommuneまたはArrondissement municipal）と、そのレイヤの`code_insee`の組。最下位区域のコードはnames.csvの`ADM_CODE`に保持する。 |
| 原典ID値 | remap前のGisRaster値は`GRVALUE=GID`。採用区域を`RGN_CODE, DEP_CODE, COM_CODE, ARR_CODE`の順で、欠損を先に置いて安定ソートし、1から34,919まで付けた連番。INSEEコードを数値化した値ではない。 |
| 背景値 | `0`。採用区域外およびサンプリングで区域が採用されなかった画素。 |
| GisWordBookコード | 固定4スロットの名称パスごとに採番する。各パスに対応する最小GIDの昇順で1から連番を付ける。現在の採用区域では34,919種類のパスがあり、コード範囲は1〜34,919。 |
| マップコード | GRVALUEをGisWordBookコードへremapした値。非ゼロ値は同梱辞書のレコードとnames.csvの`wordbook_code`に対応する。 |

---

## 2. リリースパッケージ構成ファイル

単一の`fr-2026-cartes-gouv-fr-admin-express-cog-adm.zip`に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `france_admin_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした行政区域図。 |
| `france_admin_2026-grid-1024-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした行政区域図。 |
| `france_admin_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした行政区域図。 |
| `france_admin_2026.giswordbook` | GisWordBook/0、UTF-8 | Région、Département、Commune、Arrondissement municipalの名称辞書。 |
| `france_admin_2026.utf16.giswordbook` | GisWordBook/0、UTF-16LE | UTF-8版と同じコード空間・名称パスを持つ辞書。 |
| `france_admin_2026.names.csv` | CSV、UTF-8 | 辞書コード、直接値、INSEEコード、名称および区域種別の対応表。 |

`NOTICE.md`は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 各地点の通常CommuneまたはArrondissement municipalを、GisWordBookコードで表す。`0`は背景。 |
| GisWordBook | `[Région, Département, Commune, Arrondissement municipal]`の固定4スロット。両文字コード版は同一のコードと名称パスを持つ。 |
| names.csv | `wordbook_code, GID, GRVALUE, RGN_CODE, RGN_NAME, DEP_CODE, DEP_NAME, COM_CODE, COM_NAME, ARR_CODE, ARR_NAME, ADM_CODE, ADM_NAME, ADM_LVL`の14列。各行は採用区域1件に対応する。 |

names.csvの`ADM_CODE`・`ADM_NAME`は最下位区域のコード・名称、`ADM_LVL`は`COMMUNE`または`ARR_MUNI`を表す。通常Communeでは`ADM_*`が`COM_*`に対応し、Arrondissement municipalでは`ADM_*`が`ARR_*`に対応する。`GRVALUE`は直接値、`wordbook_code`は最終マップ値である。INSEEコードは文字列として扱い、先頭ゼロを保持する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | Régionの原典名称。 | 可 |
| 区域2 | Départementの原典名称。 | 可 |
| 区域3 | Communeの原典名称。市内行政区の場合は親Commune名。 | 不可 |
| 区域4 | Arrondissement municipalの原典名称。 | 可 |

スロットは省略可能な名称がなくても詰めずに4個を保持し、空文字列を格納する。通常Communeは`[RGN_NAME, DEP_NAME, COM_NAME, ""]`、市内行政区は`[RGN_NAME, DEP_NAME, COM_NAME, ARR_NAME]`となる。Saint-Pierre-et-Miquelonの2区域は`["", "", COM_NAME, ""]`となる。

共通の国名`France`やINSEEコードはStringSetに含めない。名称は原典のフランス語表記を保持する。同名判定は区域1〜4の全名称パスの組で行い、区域3だけが同名でも集約しない。現在の採用区域には全名称パスの重複はない。

## 4. WGSMapSet生成パラメータ

### france_admin_2026-grid-512-100.wgsmapset.glc

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

### france_admin_2026-grid-1024-1000.wgsmapset.glc

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

### france_admin_2026-grid-8192-10000.wgsmapset.glc

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

* GID・GRVALUE・GisWordBookコードは本版の採用区域に対する値であり、原典の版や採用範囲が変わると同じ区域でも値が変わり得る。外部データとの対応にはnames.csvの原典コードを用いる。
* 同じ4スロットの名称パスを持つ区域は同じ辞書コードへ集約する仕様である。現在の34,919区域ではその集約は生じていない。
* 海岸線・水際線の表現は採用した原典の区域形状に依存する。すべての水域を背景とする陸域マスクではない。
* 粗いグリッドや境界付近では、小島・狭い区域の消失、境界のずれ、背景画素が生じ得る。解像度は原典の位置精度を保証するものではない。
