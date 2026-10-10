# cl-2023-ine-gob-cl-apc-stat-distrito-censal NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | チリ国勢調査District（APC2023） |
| リリースパッケージID | `cl-2023-ine-gob-cl-apc-stat-distrito-censal` |
| リリース版・基準時点 | Actualización Precensal 2023（APC2023）。Censo 2024の準備用地図であり、2017年版として扱わない。 |

このリリースパッケージは、以下に記載する原典データまたは上流成果物をGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### INE Actualización Precensal 2023

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `chile_ine_apc_2023-grid-512-100.wgsmapset.glc`, `chile_ine_apc_2023-grid-4096-1000.wgsmapset.glc`, `chile_ine_apc_2023-grid-8192-10000.wgsmapset.glc`, `chile_ine_apc_2023.giswordbook`, `chile_ine_apc_2023.utf16.giswordbook`, `chile_ine_apc_2023.names.csv` |
| 入力データまたは上流成果物 | Base cartográfica APC2023、16地域のDistritalおよび所属照合用Comunal。 |
| 入力バージョン・基準時点 | Actualización Precensal 2023（APC2023）。Censo 2024の準備用地図であり、2017年版として扱わない。 |
| 提供者・権利者 | Instituto Nacional de Estadísticas（INE）、Chile。 |
| 取得日 | 2026-10-06（取得済み16ZIPのファイルスタンプ、Asia/Tokyoに基づく）。 |
| 取得元 | [INE Geodatos Abiertos公式配布案内](https://www.ine.gob.cl/herramientas/portal-de-mapas/geodatos-abiertos) |
| ライセンス・利用条件 | [Creative Commons Attribution-ShareAlike 4.0 International（CC BY-SA 4.0）](https://creativecommons.org/licenses/by-sa/4.0/), [提供元の利用条件](https://www.ine.gob.cl/terminos-de-uso-y-licencia-de-datos-abiertos)。 |
| 再配布条件 | INEの利用規約第III部に従い、原典・ライセンスへのリンク、帰属表示、変更表示を維持する。原典を加工した地図・辞書・対応表はCC BY-SA 4.0の継承条件に従って配布する。商用利用を含む加工・再配布が可能であり、ライセンスが認める利用を妨げる追加の法的条件・技術的制限を課さない。 |

#### 必須帰属表示・加工表示

提供元は帰属・変更の表示を求めるが、このデータセット専用の固定文言は指定していない。以下は本リリースで採用する表示である。

> Fuente: Instituto Nacional de Estadísticas (INE), Base cartográfica Actualización Precensal 2023 (APC2023). CC BY-SA 4.0.
>
> Adaptado por Galuchat; las transformaciones son de Galuchat, no del INE.

この加工データに適用する継承条件を、SDKプログラム一般のライセンスと同一視しない。個人・法人の再識別を禁じるINEの一般利用条件も適用される。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件では原典ZIP、XMLまたはライセンス全文の同梱は指定されていない。本NOTICEに帰属、ライセンスへのリンク、変更および継承条件を保持する。 |

#### 加工内容

- 地域別の国勢調査District面とその所属・分類を採用し、街区、都市範囲、道路、建築物点は収録していない。
- SIRGAS 2000の座標をWGS 84として扱う変換操作を適用し、原典コード・名称を区域図、名称辞書、対応表へ加工した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
