# コートジボワール副県区域（RGPH 2021由来）

## 1. 概要

ANStatのSousPrefecture区域を基に、District、Région相当、Département、Sous-préfectureを参照できる区域図と名称辞書を収録する。510の副県を末端区域とし、所属・名称は原典列を保持する。非ゼロ画素値は同梱GisWordBookコードで、原典コードとの対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | コートジボワール副県区域（RGPH 2021由来） |
| リリースパッケージID | `ci-2021-anstat-ci-sprefectures-adm` |
| 対象地域 | 原典SousPrefecture面が表すコートジボワールの範囲。 |
| 対象区域 | 14 District、33 Région相当、111 Départementに属する510 Sous-préfecture。Région相当には31 Régionと2自治Districtを含む。 |
| 入力座標系 | WGS 84経緯度（EPSG:4326）、UTF-8の原典SHP。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | 追加の再投影・測地系変換は行わず、原典の経緯度座標を保持する。 |
| 原典版・基準時点 | RGPH 2021由来。2021は原典の由来・基準年度であり、全境界の法的確定日ではない。最終書出しは2025-10-17だが、書出し・取得時期は境界の基準時点を示さない。 |

### 1.1 対象範囲

原典SousPrefectureの全510図形を採用する。District、Région相当、Départementの所属は、それぞれの原典コード・名称列に従う。上位面を独立した末端値として重ねず、原典にない下位区域も追加しない。

Région相当のスロットにはAbidjan・Yamoussoukroの自治Districtを含む。33区域をすべて同じ法的種類の行政Régionと説明せず、原典の所属パスを固定4区域スロットで表す。別資料を理由に所属を組み替えない。

DRとTypeは区域階層として返さない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `CUSTOM` | 採用SousPrefecture面の外側の海域だけを除外し、面内の水域はその区域として保持する。追加の海岸線による一律除外はしない。 |
| 内水面 | `NONE` | 湖沼・河川を一律に除外せず、原典面に含まれる水面を区域として保持する。水域専用のコードや属性はなく、水面と非水面を区別できない。 |

### 1.3 領域・境界

コートジボワールの原典SousPrefecture全510図形の収録範囲を対象とする。島状部分・飛地・全Polygon部分と穴を原典どおり保持し、簡略化や別の領域マスクは適用しない。

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
| 原典ID | DépartementコードCodDepと、その内部の副県コードCodSpの組。CodSp単独は全国一意ではない。 |
| 原典ID値 | GRVALUE = int(CodDep) × 100 + int(CodSp)。CodDepは3桁の原典文字列、CodSpは本版で01〜16であり、510区域で一意の正の整数となる。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | GRVALUEの整数昇順に1〜510を採番する。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は両辞書の同じ葉レコードとnames.csvのwordbook_codeを指す。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `ci-2021-anstat-ci-sprefectures-adm-rev1.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `ivory_coast_anstat_2021-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたSous-préfecture区域図。 |
| `ivory_coast_anstat_2021-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたSous-préfecture区域図。 |
| `ivory_coast_anstat_2021-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたSous-préfecture区域図。 |
| `ivory_coast_anstat_2021.giswordbook` | GisWordBook/0, UTF-8 | 原典名称を保持した区域階層・属性の辞書。 |
| `ivory_coast_anstat_2021.utf16.giswordbook` | GisWordBook/0, UTF-16LE | UTF-8版と同じコード空間・レコード順序・文字列の辞書。 |
| `ivory_coast_anstat_2021.names.csv` | CSV, UTF-8 | 辞書コード、原典ID値、原典コード・名称・所属の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、Sous-préfectureをGisWordBookコードで表す。 |
| GisWordBook | [District名, Région相当名, Département名, Sous-préfecture名]の固定4区域スロット。UTF-8版とUTF-16LE版は同一コード空間・全レコード順序・文字列を持つ。 |
| names.csv | `wordbook_code,GRVALUE,CodDistric,NomDistric,CodReg,NomReg,CodDep,NomDep,CodSp,NomSp,DR,Type`の12列。採用末端区域ごとに1行。 |

各Cod*列は原典の先頭ゼロ込みの文字列を保持する。Nom*列は原典名称であり、DRとTypeも原典属性を保持するが、区域階層や水域フラグとしては扱わない。原典IDの組、GRVALUE、wordbook_codeは異なる意味の値である。

codemapは原典ID値と辞書コードの対応で、製造時のみ使用する。リリースでの照合はnames.csvを使用する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | NomDistricによるDistrict名。 | 不可 |
| 区域2 | NomRegによるRégion相当名。自治Districtも含む。 | 不可 |
| 区域3 | NomDepによるDépartement名。 | 不可 |
| 区域4 | NomSpによるSous-préfecture名。 | 不可 |

空スロット、共通の国名、原典コード、DR、TypeはStringSetに含めない。自治Districtでは上位と区域2の名称が重複してもスロットを詰めない。末端名505種類に対して全名称パスは510種類で一意であり、4スロット全体で区域を識別する。

## 4. WGSMapSet生成パラメータ

### ivory_coast_anstat_2021-grid-512-100.wgsmapset.glc

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

### ivory_coast_anstat_2021-grid-4096-1000.wgsmapset.glc

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

### ivory_coast_anstat_2021-grid-8192-10000.wgsmapset.glc

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

- 採用原典と現在公開されている原典が同じ版であることは保証しない。
- 小島・細い区域は、粗い格子で画素として選ばれない場合がある。
- GisWordBookコード・GRVALUEは本版の値空間であり、異版にわたる恒久IDではない。外部との照合にはnamesの原典識別情報を使う。
- 本区域図は法的な境界・土地の権利を確定する資料ではない。
