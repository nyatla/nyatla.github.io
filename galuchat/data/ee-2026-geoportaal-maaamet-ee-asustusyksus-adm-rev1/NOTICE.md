# ee-2026-geoportaal-maaamet-ee-asustusyksus-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Maa- ja Ruumiamet Asustusüksused（2026-09-02） |
| リリースパッケージID | `ee-2026-geoportaal-maaamet-ee-asustusyksus-adm` |
| リリース版・基準時点 | 2026-09-02の原典SHP。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Maa- ja Ruumiamet Haldus- ja asustusjaotus

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `estonia_asustusyksus_2026-grid-512-100.wgsmapset.glc`, `estonia_asustusyksus_2026-grid-4096-1000.wgsmapset.glc`, `estonia_asustusyksus_2026-grid-8192-10000.wgsmapset.glc`, `estonia_asustusyksus_2026.giswordbook`, `estonia_asustusyksus_2026.utf16.giswordbook`, `estonia_asustusyksus_2026.names.csv` |
| 入力データまたは上流成果物 | Haldus- ja asustusjaotusの`Asustusüksused SHP`。 |
| 入力バージョン・基準時点 | 2026-09-02。原典ZIP名は`asustusyksus_shp.zip`。 |
| 提供者・権利者 | Maa- ja Ruumiamet（エストニア土地・空間計画庁）。 |
| 取得日 | 未記録。 |
| 取得元 | [公式配布・項目説明ページ](https://geoportaal.maaamet.ee/est/ruumiandmed/haldus-ja-asustusjaotus-p119.html)。同ページの`Asustusüksused SHP`から取得。 |
| ライセンス・利用条件 | 公式配布ページはオープンデータとし、[データサービス利用条件](https://kataster.ee/sites/default/files/documents/2024-03/MTP_andmeteenuste_kasutustingimused.pdf)を案内する。特定のCreative Commonsライセンス名は表示されていない。 |
| 再配布条件 | 公開時にMaa- ja Ruumiametを出典表示し、データの基準日を明記する。原典の利用条件に従う。 |

#### 必須帰属表示・加工表示

再配布時は、提供元とデータ時点を含む次の表示を維持すること。

> Haldus- ja asustusjaotus: Maa- ja Ruumiamet 02.09.2026
>
> Derived and processed by Galuchat; not an official Maa- ja Ruumiamet product.

前段は公式ページの指定する出典・日付表示の形式に従い、本版の日付を記入したもの。後段は本加工物の説明である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に、原典ファイルや利用条件全文の同梱指定はない。指定の出典・日付表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の集落区域図形を採用し、同一EHAKコードの複数図形を同一区域として扱った。
* 原典DBFの名称をCP1257として復号し、名称辞書と対応表をUTF-8等の収録文字コードで表現した。
* 図形をWGS 84経緯度へ変換し、区域図・名称辞書・原典コード対応表へ加工した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
