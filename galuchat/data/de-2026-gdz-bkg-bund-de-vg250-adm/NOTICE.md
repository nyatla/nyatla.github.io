# de-2026-gdz-bkg-bund-de-vg250-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | BKG Verwaltungsgebiete 1:250 000 VG250（2026-01-01） |
| リリースパッケージID | `de-2026-gdz-bkg-bund-de-vg250-adm` |
| リリース版・基準時点 | VG250、Stand 01.01.2026、UTM32s / Shape / Ebenen版。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### BKG Verwaltungsgebiete 1:250 000 VG250

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。文書については、その中の原典由来の情報に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `germany_vg250_2026-grid-512-100.wgsmapset.glc`, `germany_vg250_2026-grid-1024-1000.wgsmapset.glc`, `germany_vg250_2026-grid-8192-10000.wgsmapset.glc`, `germany_vg250_2026.giswordbook`, `germany_vg250_2026.utf16.giswordbook`, `germany_vg250_2026.names.csv` |
| 入力データまたは上流成果物 | Verwaltungsgebiete 1:250 000, Stand 01.01.（VG250 01.01.）。行政区域の面レイヤと行政階層の対応表。 |
| 入力バージョン・基準時点 | Stand 01.01.2026。原典ZIP名は`vg250_01-01.utm32s.shape.ebenen.zip`。 |
| 提供者・権利者 | Bundesamt für Kartographie und Geodäsie（BKG）。行政キー等の上流提供者は、下記の原典指定のDatenquellen一覧による。 |
| 取得日 | 正確な取得日は未記録。最終データ取得年は2026。 |
| 取得元 | 公式カタログ：[https://gdz.bkg.bund<wbr>.de/index.php/defaul<wbr>t/open-data/verwaltu<wbr>ngsgebiete-1-250-000<wbr>-stand-01-01-vg250-0<wbr>1-01.html](https://gdz.bkg.bund.de/index.php/default/open-data/verwaltungsgebiete-1-250-000-stand-01-01-vg250-01-01.html)。直接配布先：[https://daten.gdz.bk<wbr>g.bund.de/produkte/v<wbr>g/vg250_ebenen_0101/<wbr>aktuell/vg250_01-01.<wbr>utm32s.shape.ebenen.<wbr>zip](https://daten.gdz.bkg.bund.de/produkte/vg/vg250_ebenen_0101/aktuell/vg250_01-01.utm32s.shape.ebenen.zip)。 |
| ライセンス・利用条件 | Datenlizenz Deutschland – Namensnennung – Version 2.0（`dl-de/by-2-0`）。ライセンス本文：[https://www.govdata.<wbr>de/dl-de/by-2-0](https://www.govdata.de/dl-de/by-2-0)。VG250固有の利用条件・出典表示：[https://sgx.geodaten<wbr>zentrum.de/web_publi<wbr>c/gdz/lizenz/deu/nut<wbr>zungsbedingungen_vg2<wbr>50.pdf](https://sgx.geodatenzentrum.de/web_public/gdz/lizenz/deu/nutzungsbedingungen_vg250.pdf)。 |
| 再配布条件 | 商用・非商用の利用、複製、加工、結合および第三者への提供が認められる。原典が定める提供者名、ライセンス表示と本文への参照、データセットへの参照および加工表示を維持する。公開・外部利用ではBKG指定の出典表示とDatenquellenへの参照を明瞭に表示する。 |

直接配布先の`aktuell/`は内容が更新されるため、URLだけでは2026年版を固定しない。使用するローカル原典の基準日は同梱の`aktualitaet.txt`で2026-01-01と確認した。正確な取得日・取得経路は未記録である。

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> © [BKG](https://www.bkg.bund.de) 2026 [dl-de/by-2-0](https://www.govdata.de/dl-de/by-2-0), Datenquellen: [https://sgx.geodaten<wbr>zentrum.de/web_publi<wbr>c/gdz/datenquellen/d<wbr>atenquellen_vg_nuts.<wbr>pdf](https://sgx.geodatenzentrum.de/web_public/gdz/datenquellen/datenquellen_vg_nuts.pdf)
>
> Derived and processed by Galuchat. Not endorsed by BKG.

BKG指定の出典表示に含まれる年は「最終データ取得年」であり、基準年度を機械的に当てはめる欄ではない。本素材は2026年に作成された原典ZIPを2026年中に確認したため、取得年を2026としている。後年に原典を再取得する場合は取得年を確認して表示を更新する。

Web表示では、上記の`BKG`をBKG公式サイトへ、`dl-de/by-2-0`をライセンス本文へリンクする。Datenquellenの参照先は提供元指定のURLであり、これも維持する。出典表示は提供元指定の形式、英語の加工・非推奨表示は本リリースの表示である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認したライセンスおよびVG250の利用条件には、ライセンス全文や製品説明書のファイル同梱義務はない。必須の出典・ライセンス・Datenquellenへの参照と加工表示を本NOTICEに保持する。 |

#### 加工内容

* 原典の水面側区域を除外し、陸側区域を採用した。
* 原典の行政階層の名称と最下位区域の種別を辞書へ対応付け、同名の自治体と自治体非所属区域を区別した。
* 座標をWGS 84経緯度へ変換し、区域図、名称辞書および原典コードとの対応表へ変換した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

BKGによる本加工物の公認・保証を意味しない。Galuchatは正確性、完全性、最新性または特定目的への適合性を保証しない。
