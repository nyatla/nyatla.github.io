# be-2026-statbel-fgov-be-statistical-sectors-stat-sector NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | ベルギー統計区 Statistical sectors 2026 |
| リリースパッケージID | `be-2026-statbel-fgov-be-statistical-sectors-stat-sector` |
| リリース版・基準時点 | 統計区は2026年1月1日基準。採用原典の同梱説明書は2026年6月8日付。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Statbel Statistical sectors 2026

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `belgium_statbel_2026-grid-512-100.wgsmapset.glc`, `belgium_statbel_2026-grid-4096-1000.wgsmapset.glc`, `belgium_statbel_2026-grid-8192-10000.wgsmapset.glc`, `belgium_statbel_2026.giswordbook`, `belgium_statbel_2026.utf16.giswordbook`, `belgium_statbel_2026.names.csv`, `Licence open data_FR.pdf`, `Licence open data_NL.pdf` |
| 入力データまたは上流成果物 | Statistical sectors 2026 / Secteurs statistiques 2026 / Statistische sectoren 2026。採用ファイルは`sh_statbel_statistical_sectors_3812_20260101.shp.zip`。境界・所属コード・3言語の名称および利用条件はこのZIPに同梱される。 |
| 入力バージョン・基準時点 | `sh_statbel_statistical_sectors_3812_20260101`。2026年1月1日基準、同梱説明書の日付は2026年6月8日。 |
| 提供者・権利者 | Statbel / Direction générale Statistique - Statistics Belgium（ベルギー統計局）。同梱説明書は自治体境界の作成元をFPS FinanceのGeneral Administration of Patrimonial Documentationと記載する。 |
| 取得日 | 未記録。 |
| 取得元 | 公式配布ページ：[https://<wbr>statbel.fgov.be/fr/<wbr>open-data/secteurs-<wbr>statistiques-2026](https://statbel.fgov.be/fr/open-data/secteurs-statistiques-2026), オランダ語ページ：[https://<wbr>statbel.fgov.be/nl/<wbr>open-data/<wbr>statistische-sectoren-<wbr>2026](https://statbel.fgov.be/nl/open-data/statistische-sectoren-2026)。 |
| ライセンス・利用条件 | Statbel独自の「Licence open data」（2015年10月22日付）。採用ZIPに同梱されたフランス語版・オランダ語版を本パッケージにも収録する。公式フランス語版：[https://<wbr>statbel.fgov.be/<wbr>sites/default/files/<wbr>files/opendata/<wbr>Licence%20open%20<wbr>data_FR.pdf](https://statbel.fgov.be/sites/default/files/files/opendata/Licence%20open%20data_FR.pdf), 公式オランダ語版：[https://<wbr>statbel.fgov.be/<wbr>sites/default/files/<wbr>files/opendata/<wbr>Licence%20open%20<wbr>data_NL.pdf](https://statbel.fgov.be/sites/default/files/files/opendata/Licence%20open%20data_NL.pdf)。 |
| 再配布条件 | 出典（少なくとも提供者名）と原典の最終更新日を明示して、複製・加工・派生物作成・再配布および商用利用が可能。内容、出典、更新日について第三者を誤認させず、公式性または提供者の承認・推奨を示唆しない。利用は適法な目的で行う。条件違反時は利用許諾が自動終了する。 |

#### 必須帰属表示・加工表示

ライセンスは提供者名および最終更新日の表示を求めるが、固定の表示文言は指定していない。本パッケージでは、採用原典の説明書に記載された日付を更新日の表示に用いる。再配布時は、少なくとも次の出典・日付情報を維持すること。

> Source: Statbel (Statistics Belgium), Statistical sectors 2026. Reference date: 2026-01-01. Source update date (accompanying explanatory note): 2026-06-08.
>
> Adapted by Galuchat. This is not an official Statbel product and is not endorsed by Statbel.

独立した定型の加工表示義務はない。上記の加工・非公式性の表示は、原典と派生物を区別し、内容・出典・更新日に関する誤認や公的な承認の示唆を避けるために記載する。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| `Licence open data_FR.pdf` | 原典の独自利用条件全文を保持するため、採用ZIPのフランス語版を変更せず任意同梱する。ライセンス自体に全文同梱の指定はない。 |
| `Licence open data_NL.pdf` | 同じ利用条件のオランダ語版を変更せず任意同梱する。ライセンス自体に全文同梱の指定はない。 |

ライセンスはOGL、CC BYおよびODC-BYとの互換性を説明している。CC BYの版は同梱フランス語版では4.0、オランダ語版では2.0と記載されている。本NOTICEでは採用原典の独自ライセンスを適用条件として記録し、いずれかのCC BYが原典へ直接付与されたとは扱わない。

#### 加工内容

* 原典の統計区図形・所属コード・名称を採用し、原典コードを保持した区域図・名称辞書・多言語名称対応表へ変換した。別コードの同名統計区は区別する。
* 投影座標からWGS 84経緯度へ変換し、辞書表示には原典のオランダ語名称を使用した。フランス語・ドイツ語名称も対応表に保持した。
* 原典の県所属がない区域、飛地、複数の図形部分および穴を保持し、別資料による水域・国境の補正は行っていない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須の出典・更新日表示を維持し、原典と加工物を混同させず、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性または特定目的への適合性は保証されない。原典の継続提供も保証されず、再利用は利用者の責任で行う。原典ライセンスはベルギー法を準拠法とする。
