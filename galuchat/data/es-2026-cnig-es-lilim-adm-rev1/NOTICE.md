# es-2026-cnig-es-lilim-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Spain IGN/CNIG BDDAE（2026-07-28版） |
| リリースパッケージID | `es-2026-cnig-es-lilim-adm` |
| リリース版・基準時点 | Límites municipales, provinciales y autonómicosの現行Shapefile、2026-07-28更新版。原典は継続更新される。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### IGN/CNIG Límites municipales, provinciales y autonómicos

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。文書については、その中の原典由来の情報に適用する。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `spain_bddae_2026-grid-512-100.wgsmapset.glc`, `spain_bddae_2026-grid-1024-1000.wgsmapset.glc`, `spain_bddae_2026-grid-8192-10000.wgsmapset.glc`, `spain_bddae_2026.giswordbook`, `spain_bddae_2026.utf16.giswordbook`, `spain_bddae_2026.names.csv`, `data-spec.md`, `NOTICE.md` |
| 入力データまたは上流成果物 | Base de Datos de Divisiones Administrativas de España（BDDAE）。CNIGの製品名はLímites municipales, provinciales y autonómicos、カタログ識別子はLILIM。採用する区域・名称はRecintos municipales、Recintos provinciales、Recintos autonómicosに由来する。 |
| 入力バージョン・基準時点 | 現行区域の2026-07-28更新版、Shapefile配布。原典は継続更新されるため、全区域に共通する法的確定日を示す版ではない。 |
| 提供者・権利者 | Instituto Geográfico Nacional de España（IGN）。配布はOrganismo Autónomo Centro Nacional de Información Geográfica（CNIG）。 |
| 取得日 | 未記録 |
| 取得元 | [https://centrodedes<wbr>cargas.cnig.es/Centr<wbr>oDescargas/catalogo.<wbr>do?Serie=LILIM](https://centrodedescargas.cnig.es/CentroDescargas/catalogo.do?Serie=LILIM) |
| ライセンス・利用条件 | CC BY 4.0。IGNの製品・サービス利用条件：[https://www.ign.es/<wbr>resources/licencia/<wbr>Condiciones_licenci<wbr>aUso_IGN.pdf](https://www.ign.es/resources/licencia/Condiciones_licenciaUso_IGN.pdf)。ライセンス本文：[https://creativeco<wbr>mmons.org/licenses/<wbr>by/4.0/](https://creativecommons.org/licenses/by/4.0/)。 |
| 再配布条件 | 出典・権利者、ライセンスへのリンクおよび加工した旨を表示する。提供元の帰属表示方式に従い、派生物であることを明記する。表示は利用者から確認できる位置に置き、メタデータがある場合はその要約・履歴・利用制約または同等の項目にも帰属表示を保持する。提供元の公認・推奨を示唆せず、原典利用条件に反する追加制限を課さない。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Obra derivada de BDLJE Continua CC-BY 4.0 [ign.es](https://www.ign.es/)
>
> IGN/CNIGの2026-07-28更新版をもとに、区域・名称の統合、階層の正規化、値の再割当およびGaluchat用の形式変換を行った。

BDLJEおよびContinuaは提供元の帰属表示表に定められた製品識別子と日付表現である：[https://www.scne.es<wbr>/tablaProductos.php](https://www.scne.es/tablaProductos.php)。実際に使用した原典の更新版は上表に記載する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 本加工物の再配布に対し、確認したIGN利用条件は原典のREADME・XML・ライセンスPDFそのものの同梱を要求していない。帰属表示と利用条件へのリンクは本NOTICEおよび成果物のメタデータに保持する。 |

#### 加工内容

* 現行の市町村相当の区域面と、上位区域の名称を採用し、本土側・島嶼側の区域を統合した。履歴境界線と中立地帯の独立した線データは採用していない。
* 共有管轄地等とTerritorioを独立区域として保持し、存在しない上位行政階層を空文字列に正規化した。原典の区域種別と、本加工物で整理した区画分類を対応表に区別して保持した。
* 原典の経緯度を保持してWGS 84互換の座標値として扱い、名称辞書・原典コード対応表およびGaluchat用の区域地図へ変換した。追加の海岸線・内水面マスクは適用していない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

IGN/CNIGによる本加工物の公認・保証を意味せず、Galuchatも正確性、完全性、最新性または特定目的への適合性を保証しない。
