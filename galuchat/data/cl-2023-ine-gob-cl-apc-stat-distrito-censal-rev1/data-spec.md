# チリ国勢調査District（APC2023）

## 1. 概要

INEのActualización Precensal 2023（APC2023）を基に、Region、Provincia、Comuna、Distrito censalを参照できる区域図と名称辞書を収録する。末端は行政自治体ではなく国勢調査・統計区画である。非ゼロ画素値は同梱GisWordBookコードで、原典コードとの対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | チリ国勢調査District（APC2023） |
| リリースパッケージID | `cl-2023-ine-gob-cl-apc-stat-distrito-censal` |
| 対象地域 | 取得済み16地域のDistritalが表すチリの範囲。原典にある太平洋島嶼を含み、南極大陸の区域は含まない。 |
| 対象区域 | 16 Region、56 Provincia、345 Comunaの所属を持つ2,768 Distrito censal。 |
| 入力座標系 | SIRGAS 2000経緯度（EPSG:4674）。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | SIRGAS 2000 to WGS 84 (1)（EPSG:15894）でEPSG:4674からEPSG:4326へ対応付ける。この操作では経緯度の数値を変更しない。入力をEPSG:4326と誤認したCRS宣言の変更ではない。 |
| 原典版・基準時点 | Actualización Precensal 2023（APC2023）。Censo 2024の準備用地図であり、2017年境界でも2024年の最終国勢調査区画でもない。 |

### 1.1 対象範囲

16地域の詳細Distritalレイヤーに収録された全2,768面を採用する。Region、Provincia、Comunaの所属・名称は同じ原典の列に従う。ComunalとのCUT対応が表す上位行政自治体を名称階層に保持し、Comunalの面を別の末端値として重ねない。

Distrito censalのRURAL、MIXTO、URBANOは統計区画の分類であり、行政階層とは別に末端属性として返す。Aldea、都市範囲、Manzana、道路線、建築物点はこの区域図に含めない。

Distrito censalは行政Comunaの下位自治体を表すものではない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `CUSTOM` | 原典の採用District面の外側の海域だけを除外し、面内の水域はその区域として保持する。別の海岸線による水面の一律除外はしない。 |
| 内水面 | `NONE` | 湖沼・河川を一律に除外せず、原典District面に含まれる水面を区域として保持する。TIPO_DISTRは都市・農村分類であり、水面と非水面を識別するものではない。 |

### 1.3 領域・境界

チリの原典16地域・345 Comunaに属する詳細Distrital面の収録範囲を対象とする。原典にある太平洋の島嶼を含むが、未収録の海外・南極区域は追加しない。島嶼・飛地・全Polygon部分は原典どおり保持し、別の領域マスクや簡略化は適用しない。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 原典準拠 | 採用する原典区域の境界に従い、別の国境資料による補正は行わない。 |
| 対象領域外 | 背景値 | 採用区域面の外側。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

背景値だけでは領域外、水域、内部の未割当地点を区別できない。区域コードも陸域のみを示す値ではなく、水域の扱いは第1.2節に従う。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | ComunaコードCUTと、Comuna内District番号COD_DISTRIの組。元のコードをnames.csvに保持する。 |
| 原典ID値 | GRVALUE = CUT × 100 + COD_DISTRI。COD_DISTRIは本原典の整数値1〜33であり、2,768区域で一意の正の整数となる。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | GRVALUEの整数昇順に1〜2,768を採番する。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は両辞書の同じ葉レコードとnames.csvのwordbook_codeを指す。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `cl-2023-ine-gob-cl-apc-stat-distrito-censal-rev1.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `chile_ine_apc_2023-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたDistrito censal区域図。 |
| `chile_ine_apc_2023-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたDistrito censal区域図。 |
| `chile_ine_apc_2023-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたDistrito censal区域図。 |
| `chile_ine_apc_2023.giswordbook` | GisWordBook/0, UTF-8 | 原典名称を保持した区域階層・属性の辞書。 |
| `chile_ine_apc_2023.utf16.giswordbook` | GisWordBook/0, UTF-16LE | UTF-8版と同じコード空間・レコード順序・文字列の辞書。 |
| `chile_ine_apc_2023.names.csv` | CSV, UTF-8 | 辞書コード、原典ID値、原典コード・名称・所属の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、末端区域をGisWordBookコードで表す。 |
| GisWordBook | [Region名, Provincia名, Comuna名, Distrito censal名, TIPO_DISTR]の固定4区域＋1属性スロット。 UTF-8版とUTF-16LE版は同一コード空間・全レコード順序・文字列を持つ。 |
| names.csv | `wordbook_code,GRVALUE,CUT,COD_DISTRI,N_REGION,N_PROVINCI,N_COMUNA,N_DISTRITO,TIPO_DISTR`の9列。採用末端区域ごとに1行。 |

原典のCUT、COD_DISTRIは整数の10進表現で保持する。N_*は原典のスペイン語名称、TIPO_DISTRは末端DistrictのRURAL、MIXTO、URBANOのいずれか。浮動小数型の科学表記を新しい区域番号とは解釈しない。

codemapは原典ID値と辞書コードの対応で、製造時のみ使用する。リリースでの照合はnames.csvを使用する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | N_REGIONによるRegion名。 | 不可 |
| 区域2 | N_PROVINCIによるProvincia名。 | 不可 |
| 区域3 | N_COMUNAによるComuna名。 | 不可 |
| 区域4 | N_DISTRITOによるDistrito censal名。 | 不可 |
| 属性1 | TIPO_DISTRによる末端Districtの都市・農村分類。 | 不可 |

常に4区域スロットの後に末端属性1個を置く。空スロット、共通の国名、原典コードはStringSetに含めない。District名だけが同じでも所属が異なる区域をまとめない。本原典では全4区域名パスが2,768種類で一意であり、別区域の名称集約は生じない。

## 4. WGSMapSet生成パラメータ

### chile_ine_apc_2023-grid-512-100.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルとの交差面積が最大の個別ポリゴン片の区域を選ぶ。同じ区域の離れた片を合算して比較する方式ではない。 |
| minimum rate | `0.01` | 全採用片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `100` | 1/100度単位。 |
| SHP grid cell-size | `512` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMap格納ブロックサイズ。 |

### chile_ine_apc_2023-grid-4096-1000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルとの交差面積が最大の個別ポリゴン片の区域を選ぶ。同じ区域の離れた片を合算して比較する方式ではない。 |
| minimum rate | `0.01` | 全採用片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `1000` | 1/1000度単位。 |
| SHP grid cell-size | `4096` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMap格納ブロックサイズ。 |

### chile_ine_apc_2023-grid-8192-10000.wgsmapset.glc

#### サンプリング方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| sampling | `MAX_AREA` | セルとの交差面積が最大の個別ポリゴン片の区域を選ぶ。同じ区域の離れた片を合算して比較する方式ではない。 |
| minimum rate | `0.01` | 全採用片との交差面積合計がセル面積の1%以下なら背景値0。 |

#### WGSMapSet格納方式

| 項目 | 値 | 備考 |
| --- | --- | --- |
| palette / block format / 圧縮 | `auto` / `all` / `lzss` | WGSMap/3 + GI01を格納する。 |
| unit-inv | `10000` | 1/10000度単位。 |
| SHP grid cell-size | `8192` | Shapefileを分割する格子のセルサイズ。 |
| block-size | `512` | WGSMap格納ブロックサイズ。 |

---

## 5. 備考・既知の制約

- 原典版以降の改編を反映しない。
- 格子の細かさが測地系の精度や法的境界の精度を高めるものではない。
- 小島・細い区域・飛地は、粗い格子で画素として選ばれない場合がある。
- GisWordBookコード・GRVALUEは本版の値空間であり、異版にわたる恒久IDではない。外部との照合にはnamesの原典識別情報を使う。
- 本区域図は法的な境界・土地の権利を確定する資料ではない。
