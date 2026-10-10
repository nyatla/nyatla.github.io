# リベリア行政区域（LISGIS 2022）

## 1. 概要

LISGISの2022年国勢調査に由来する詳細行政地図を基に、County、District、Clanを参照できる区域図と名称辞書を収録する。902のClan面を末端区域とし、親コードで上位所属名を対応付ける。非ゼロ画素値は同梱GisWordBookコードで、原典コードとの対応はnames.csvで確認できる。

| 項目 | 内容 |
| --- | --- |
| データセット名 | リベリア行政区域（LISGIS 2022） |
| リリースパッケージID | `lr-2022-lisgis-gov-lr-geography-adm` |
| 対象地域 | LISGISの詳細Clan面が表すリベリアの範囲。原典に含まれる沿岸・島状部分を保持する。 |
| 対象区域 | 15 County、160 Districtに属する902 Clan。 |
| 入力座標系 | 配布済みJSONはWGS 84経緯度（EPSG:4326）。元のSHPからのUTM変換は提供者側で実施済み。 |
| 出力座標系 | WGS 84経緯度（EPSG:4326）。 |
| 座標変換 | 追加の再投影・測地系変換は行わず、配布JSONのEPSG:4326座標を保持する。 |
| 原典版・基準時点 | LISGIS 2022 Population and Housing Census由来の行政GIS、非simplified版、各データセットの版2022。 |

### 1.1 対象範囲

非simplified版geo-clansの全902Clan面を採用する。geo-districts、geo-countiesの原典codeとparent_codeによる所属を名称階層に保持し、上位面を独立した末端値として重ねない。

simplified版、統計観測値、他年の区域は採用しない。親面との境界微差だけを理由にClanを除外・縮小しない。

### 1.2 水域の扱い

| 水域 | クリップ方式 | データとしての意味 |
| --- | --- | --- |
| 外水面 | `CUSTOM` | 採用した詳細Clan面の外側の海域だけを除外し、面内の水域はその区域として保持する。別資料で外水面を一律に除外しない。 |
| 内水面 | `NONE` | 湖沼・河川を一律に除外せず、原典Clan面に含まれる水面を区域として保持する。水域専用コードは持たない。 |

### 1.3 領域・境界

リベリアの非simplified版geo-clans全902Clan面の収録範囲を対象とする。島状部分・飛地・穴・外縁は詳細Clan面に従い、別の領域マスクは適用しない。

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
| 原典ID | geo-clansのcode。元の先頭ゼロを含む文字列をnames.csvのCLAN_CODEに保持する。 |
| 原典ID値 | remap前のGRVALUEはCLAN_CODEを10進整数にした正の値。902区域で一意で、County・Districtの番号を末端値として重ねない。 |
| 背景値 | `0`。区域コードが割り当てられていない地点を表し、辞書レコードを指さない。対象領域と背景になる条件は第1.3節を参照。 |
| GisWordBookコード | GRVALUEの整数昇順に1〜902を採番する。 |
| マップコード | 原典ID値をGisWordBookコードへremapした値。非ゼロ値は両辞書の同じ葉レコードとnames.csvのwordbook_codeを指す。 |

---

## 2. リリースパッケージ構成ファイル

単一のリリースパッケージZIP `lr-2022-lisgis-gov-lr-geography-adm-rev1.zip` に、次の8ファイルをZIP直下へ収録する。

### /

| ファイル名 | 形式 | 内容 |
| --- | --- | --- |
| `data-spec.md` | Markdown, UTF-8 | 本リリースの構成、データ内容および性能値。 |
| `NOTICE.md` | Markdown, UTF-8 | 原典由来の出典、ライセンス・再配布条件、必須表示、承認・許諾および加工表示。 |
| `liberia_lisgis_2022-grid-512-100.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/100度単位でサンプリングしたClan区域図。 |
| `liberia_lisgis_2022-grid-4096-1000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/1000度単位でサンプリングしたClan区域図。 |
| `liberia_lisgis_2022-grid-8192-10000.wgsmapset.glc` | WGSMapSet/3 + GI01 | 1/10000度単位でサンプリングしたClan区域図。 |
| `liberia_lisgis_2022.giswordbook` | GisWordBook/0, UTF-8 | 原典名称を保持した区域階層・属性の辞書。 |
| `liberia_lisgis_2022.utf16.giswordbook` | GisWordBook/0, UTF-16LE | UTF-8版と同じコード空間・レコード順序・文字列の辞書。 |
| `liberia_lisgis_2022.names.csv` | CSV, UTF-8 | 辞書コード、原典ID値、原典コード・名称・所属の対応表。 |

`NOTICE.md` は、この章に列挙したファイルごとに適用する原典由来の権利情報を定義する。区域、値体系、空間表現およびWGSMapSetの生成パラメータはこの文書を正とし、NOTICE.mdには重複して記載しない。

---

## 3. 区画データ

### 3.1 論理データ要素

| データ要素 | 内容 |
| --- | --- |
| 区域地図 | 第1.3節の対象領域で、末端区域をGisWordBookコードで表す。 |
| GisWordBook | [County名, District名, Clan名]の固定3区域スロット。 UTF-8版とUTF-16LE版は同一コード空間・全レコード順序・文字列を持つ。 |
| names.csv | `wordbook_code,GRVALUE,COUNTY_CODE,COUNTY_NAME,DISTRICT_CODE,DISTRICT_NAME,CLAN_CODE,CLAN_NAME`の8列。採用末端区域ごとに1行。 |

各CODEは原典codeを先頭ゼロ込みの文字列で保持する。各NAMEは原典nameで、District・Countyは原典parent_codeによる上位所属。CLAN_CODEとGRVALUEとwordbook_codeは互いに異なる意味の値である。

codemapは原典ID値と辞書コードの対応で、製造時のみ使用する。リリースでの照合はnames.csvを使用する。

### 3.2 StringSet

| スロット | 意味 | 省略可否 |
| --- | --- | --- |
| 区域1 | 親Districtが属するCountyの原典name。 | 不可 |
| 区域2 | Clanのparent_codeが指すDistrictの原典name。 | 不可 |
| 区域3 | Clanの原典name。 | 不可 |

空スロット、共通の国名、原典コードはStringSetに含めない。Clan名は全国で一意ではないが、County・District・Clanの全名称パスは902種類で一意。同名Clanが別の所属にある場合は別コードとし、表示名だけで集約しない。

## 4. WGSMapSet生成パラメータ

### liberia_lisgis_2022-grid-512-100.wgsmapset.glc

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

### liberia_lisgis_2022-grid-4096-1000.wgsmapset.glc

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

### liberia_lisgis_2022-grid-8192-10000.wgsmapset.glc

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

- 採用原典以降の変更は反映せず、現行境界との一致を保証しない。
- 小島・細い区域・飛地は、粗い格子で画素として選ばれない場合がある。
- GisWordBookコード・GRVALUEは本版の値空間であり、異版にわたる恒久IDではない。外部との照合にはnamesの原典識別情報を使う。
- 本区域図は法的な境界・土地の権利を確定する資料ではない。
