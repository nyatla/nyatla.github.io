# ルクセンブルク地籍区域（2026-10-05更新版）

## 1. 概要

ACTのPCN由来の区域データを基に、Canton、行政Commune、地籍Commune、地籍Sectionを参照できる区域図と名称辞書を収録する。行政階層に所属しないルクセンブルク・ドイツ共同管理区域は、通常の地籍区域とは別の区域として保持する。非ゼロ画素値は同梱GisWordBookコードであり、原典識別情報との対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | ルクセンブルク地籍区域（2026-10-05更新版） |
| リリースパッケージID | `lu-2026-data-public-lu-limadmin-cadastral-section` |
| 対象地域 | ルクセンブルクの原典地籍区域および原典Condominium面が表すドイツとの共同管理区域。 |
| 対象区域 | 519の地籍Sectionと2つの共同管理面、計521末端区域。通常区域の所属には12 Canton、100行政Commune、130地籍Communeを使用する。 |
| 入力座標系 | LUREF / Luxembourg TM（EPSG:2169相当）。PRJはIGNF:LURESGKLとして認識される同等の表記。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | EPSG:2169からEPSG:4326へ変換する。LUREF to WGS 84 (4)（EPSG:5484）を使用し、軸順は経度・緯度とする。 |
| 原典版・基準時点 | PCN由来のlimadmin原典、2026-10-05更新版。地籍Communeは歴史的な地籍単位であり、現行行政Communeと同一視しない。 |

### 1.1 対象範囲

詳細版のLIMADM_SECTIONSにある全526図形を、原典複合IDに従う519のSectionとして保持する。同一Sectionの分離図形は同じIDを持つ。上位名称は原典のCANTON、COMMUNE_AD、COMMUNE_CAを使用し、行政CommuneのLAU2も対応表に保持する。

LIMADM_CONDOMINIUMの2面は、通常Commune・Cantonへ割り当てず、独立した特殊区域として保持する。通常区域と異なる2つの本パッケージ内IDを付け、表示名はいずれも公式レイヤー名のCondominiumとする。この2IDは共同管理区域の法的な区分を新設するものではない。原典に通常区域として属さないことを空の上位スロットで表す。

歴史district、司法区、選挙区、国全体の上位面、LIMADM_GEN_*の簡略版は末端区域として含めない。

複数図形からなるSectionは7区域ある。地籍Communeは歴史的な地籍単位であり、現行の行政Communeとは異なる。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `NONE` | 外洋沿岸を持たず、外水面のクリップは適用しない。国境上の共同管理区域の採用は水域除外ではない。 |
| 内水面 | `NONE` | 河川・湖沼を一律に除外せず、通常地籍面に含まれる水面も保持する。共同管理区域は別コードで区別できるが水域全体の識別ではなく、通常区域内の水面は非水域と区別できない。 |

### 1.3 領域・境界

ルクセンブルクの原典Section全519区域と、ドイツとの共同管理面Condominiumの2面を対象とする。国全体の面による追加クリップでCondominiumを落とさず、島状部分・飛地・全図形部分・穴を原典どおり保持する。

| 項目 | 扱い | データとしての意味・備考 |
| --- | --- | --- |
| 国境側の境界 | 原典準拠 | 採用する原典区域の境界に従い、別の国境資料による補正は行わない。 |
| 対象領域外 | 背景値 | 採用区域面の外側。 |
| 対象領域内の未割当地点 | 背景値 | 採用面に穴・区域間の隙間がある場合の未割当地点、またはサンプリングで区域が選ばれなかった地点。 |

背景値だけでは領域外、水域、内部の未割当地点を区別できない。区域コードも陸域のみを示す値ではなく、水域の扱いは第1.2節に従う。

原典面の境界微差による重なりは複数IDとして同時に返さず、第4章のセル採用規則で単一値となる。

格子化により境界のずれや背景画素が生じ得る。区域図の境目を正確な国境線・原典のベクトル境界として使用しない。

### 1.4 ID・コード空間

| 項目 | 定義 |
| --- | --- |
| 原典ID | 通常区域はLIMADM_SECTIONSの(CODE_COMMU, CODE)。2共同管理面は元のID列が空のため、原典レイヤーとその本版の1始まりの行番号を基にCONDOMINIUM:1、CONDOMINIUM:2と識別する。本パッケージ内の識別子であり公式コードではない。 |
| 原典ID値 | CODE_COMMUの整数値、CODEのASCII文字順で並べた519 Sectionに1〜519を付け、共同管理面の原典行順に520、521を付けたGRVALUE。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | GRVALUEの昇順に1〜521を採番する。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は両辞書の同じレコードとnames.csvのwordbook_codeを指す。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `lu-2026-data-public-lu-limadmin-cadastral-section-rev1.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `luxembourg_limadmin_2026-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングした地籍Section・共同管理区域図。 |
| `luxembourg_limadmin_2026-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングした地籍Section・共同管理区域図。 |
| `luxembourg_limadmin_2026-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングした地籍Section・共同管理区域図。 |
| `luxembourg_limadmin_2026.giswordbook` | GisWordBook/0, UTF-8 | 原典名称を保持した区域階層・属性の辞書。 |
| `luxembourg_limadmin_2026.utf16.giswordbook` | GisWordBook/0, UTF-16LE | UTF-8版と同じコード空間・レコード順序・文字列の辞書。 |
| `luxembourg_limadmin_2026.names.csv` | CSV, UTF-8 | 辞書コード、原典ID値、原典コード・名称・所属の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、末端区域をGisWordBookコードで表す。 |
| GisWordBook | [Canton名, 行政Commune名, 地籍Commune名, Section名]の固定4区域スロット。共同管理面は上位3スロットを空にし、区域4にCondominiumを保持する。 UTF-8版とUTF-16LE版は同一コード空間・全レコード順序・文字列を持つ。 |
| names.csv | `wordbook_code,GRVALUE,REGION_KIND,LAU2,CANTON,COMMUNE_AD,CODE_COMMU,COMMUNE_CA,CODE,SECTION,LABEL,SPECIAL_ID,SPECIAL_NAME`の13列。採用末端区域ごとに1行。 |

通常区域ではREGION_KIND=CADASTRAL_SECTIONとし、原典のコード・所属・名称を保持する。LAU2は行政Communeの原典コードとの対応、LABELは原典のSection表示ラベルである。SPECIAL_ID・SPECIAL_NAMEは空文字列。共同管理面ではREGION_KIND=CONDOMINIUM、SPECIAL_ID=CONDOMINIUM:1またはCONDOMINIUM:2、SPECIAL_NAME=Condominiumとし、通常区域の所属・コード・名称列は空文字列とする。

codemapは原典ID値と辞書コードの対応で、製造時のみ使用する。リリースでの照合はnames.csvを使用する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | CANTONによるCanton名。 | 空文字可。共同管理面では空文字列。 |
| 区域2 | COMMUNE_ADによる行政Commune名。 | 空文字可。共同管理面では空文字列。 |
| 区域3 | COMMUNE_CAによる地籍Commune名。 | 空文字可。共同管理面では空文字列。 |
| 区域4 | SECTIONによる地籍Section名、またはCondominium。 | 不可 |

空スロットを詰めず、全レコードで4区域スロットを保持する。共同管理面は["", "", "", "Condominium"]となる。REGION_KINDはnamesに保持し、末端名称に公式コードの接尾辞を付けない。通常Sectionでは全名称パスが519種類あり、共同管理2面は同じ表示パスだが別の辞書コードで取得できる。

行政Communeと地籍Communeの表示名が同じ場合も、各階層のスロットは省略しない。

## 4. WGSMapSet生成パラメータ

### luxembourg_limadmin_2026-grid-512-100.wgsmapset.glc

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

### luxembourg_limadmin_2026-grid-4096-1000.wgsmapset.glc

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

### luxembourg_limadmin_2026-grid-8192-10000.wgsmapset.glc

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

- 小島・細い区域・飛地は、粗い格子で画素として選ばれない場合がある。
- GisWordBookコード・GRVALUEは本版の値空間であり、異版にわたる恒久IDではない。外部との照合にはnamesの原典識別情報を使う。
- 本区域図は法的な境界・土地の権利を確定する資料ではない。
