# me-undated-opendata-gov-me-opstine-adm1 NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | モンテネグロ原典収録自治体区分（基準年不詳） |
| リリースパッケージID | `me-undated-opendata-gov-me-opstine-adm1` |
| リリース版・基準時点 | 原典境界の基準年は不詳。公開リソース更新日は2024-12-12、DBF書出し日は2024-11-12。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### EPA Montenegro Opštine

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | <code>data-spec.md</code>, <code>NOTICE.md</code>, <code>montenegro_opstine_u<wbr>ndated-grid-512-100.<wbr>wgsmapset.glc</code>, <code>montenegro_opstine_u<wbr>ndated-grid-4096-100<wbr>0.wgsmapset.glc</code>, <code>montenegro_opstine_u<wbr>ndated-grid-8192-100<wbr>00.wgsmapset.glc</code>, <code>montenegro_opstine_u<wbr>ndated.giswordbook</code>, <code>montenegro_opstine_u<wbr>ndated.utf16.gisword<wbr>book</code>, <code>montenegro_opstine_u<wbr>ndated.names.csv</code> |
| 入力データまたは上流成果物 | Zaštićena područja prirode Crne Goreデータセット内のOpštine SHPリソース（optine.zip / Opštine.shp）。保護区域本体とは別の自治体参考レイヤー。 |
| 入力バージョン・基準時点 | 境界基準年は不詳。リソースIDはb82f7fe0-492b-4f8b-873d-9ced4187b6ce。公開更新・DBF書出しの時期は境界基準年を表さない。 |
| 提供者・権利者 | Agencija za zaštitu životne sredine（Environment Protection Agency of Montenegro）。 |
| 取得日 | 2026-10-05（取得済みZIPのファイルスタンプ、Asia/Tokyoに基づく）。 |
| 取得元 | [公式配布ページ](https://opendata.gov.me/dataset/zasticena-podrucja-prirode-crne-gore), [固定ZIPダウンロード](https://data.gov.me/dataset/189a0ae7-5d0b-419a-a2a0-a1a1ccbda8b8/resource/b82f7fe0-492b-4f8b-873d-9ced4187b6ce/download/optine.zip), [公式メタデータAPI](https://opendata.gov.me/api/3/action/package_show?id=zasticena-podrucja-prirode-crne-gore)。 |
| ライセンス・利用条件 | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)。個別配布ページおよび公式メタデータAPIの指定はcc-zero。 |
| 再配布条件 | 著作権・データベース権に関するCC0の範囲で、商用を含む加工・再配布が可能。帰属表示・加工表示はCC0の必須条件ではない。第三者の権利や法令上の制約を免除するものではなく、提供者の保証・推奨を示唆しない。 |

#### 必須帰属表示・加工表示

提供元はCC0の条件として固定帰属文・加工文を指定していない。CC0による義務とは区別し、本リリースでは次の出典・加工表示を採用する。

> Source: Agencija za zaštitu životne sredine, Montenegro, Opštine reference layer. CC0 1.0.
>
> Adapted by Galuchat; not an official EPA Montenegro product.

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した個別配布条件に原典ZIP・SHP・ライセンス全文の同梱指定はない。本NOTICEに出典とCC0への参照を保持する。 |

#### 加工内容

- 原典の自治体参考レイヤーの全図形部分と名称を採用し、保護区本体は区域図に使用していない。
- 原典の経緯度と図形識別情報を保持して、区域図・名称辞書・原典IDとの対応表へ加工した。
- 同じ非空名称の図形を同じ辞書コードへ対応付け、名称なし図形は空名称の独立コードとして保持した。名称・自治体所属の推測補完や水域としての区域除外は行っていない。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。本原典には必須帰属表示・加工表示はなく、上記の任意表示を追加の利用条件とはしない。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
