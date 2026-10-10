# ci-2021-anstat-ci-sprefectures-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | コートジボワール副県区域（RGPH 2021由来） |
| リリースパッケージID | `ci-2021-anstat-ci-sprefectures-adm` |
| リリース版・基準時点 | 原典XMLの履歴にあるRGPH 2021由来のSousPrefecture。原典の最終書出しは2025-10-17。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### ANStat SousPrefecture

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `ivory_coast_anstat_2021-grid-512-100.wgsmapset.glc`, `ivory_coast_anstat_2021-grid-4096-1000.wgsmapset.glc`, `ivory_coast_anstat_2021-grid-8192-10000.wgsmapset.glc`, `ivory_coast_anstat_2021.giswordbook`, `ivory_coast_anstat_2021.utf16.giswordbook`, `ivory_coast_anstat_2021.names.csv` |
| 入力データまたは上流成果物 | ANStatジオポータルのSous-préfectures、取得済みsprefectures.zipのSousPrefecture.shpと同梱XML。 |
| 入力バージョン・基準時点 | XML加工履歴はBaseRp2021、CI_SousPrefecture_2021、shp_2021を参照する。最終書出し・メタデータ更新は2025-10-17。 |
| 提供者・権利者 | Agence Nationale de la Statistique（ANStat）、Côte d'Ivoire。 |
| 取得日 | 2026-10-07（取得済みZIPのファイルスタンプ、Asia/Tokyoに基づく）。 |
| 取得元 | [ANStat公式ジオポータル](https://geoportail.anstat.ci/)。取得時の固定ZIPダウンロードURLは未記録。 |
| ライセンス・利用条件 | [Creative Commons Attribution 4.0 International（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/), [ANStat公開データの利用条件](https://www.anstat.ci/privacy)。 |
| 再配布条件 | ANStatと原典の出典を表示し、原典にある著作権・ライセンス表示を維持し、変更を明示する。商用を含む加工・再配布が可能。提供者の承認・保証・推奨を示唆しない。 |

#### 必須帰属表示・加工表示

提供元は帰属・ライセンス・変更の表示を求めるが、本原典専用の固定文言は指定していない。以下は本リリースで採用する表示である。

> Source : Agence Nationale de la Statistique (ANStat), Côte d'Ivoire, SousPrefecture, données issues du RGPH 2021. CC BY 4.0.
>
> Données adaptées par Galuchat ; produit non officiel de l'ANStat.

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した利用条件に原典ZIP・XMLやライセンス全文の同梱指定はない。本NOTICEに原典・ライセンスへの参照、帰属と加工表示を保持する。 |

#### 加工内容

- 原典の副県図形と所属・名称を採用し、原典の経緯度を保持した。
- 上位所属を名称階層へ対応付け、区域図、名称辞書、原典コードとの対応表へ加工した。原典の人口値その他の統計観測値は収録していない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
