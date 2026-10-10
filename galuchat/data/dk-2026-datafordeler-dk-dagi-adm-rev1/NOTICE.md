# dk-2026-datafordeler-dk-dagi-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | DAGI V4 Kommuneinddeling（Current_217抽出版） |
| リリースパッケージID | `dk-2026-datafordeler-dk-dagi-adm` |
| リリース版・基準時点 | DAGI V4 `Current_217`現行データ抽出。原典GPKGの最終変更記録は2026-07-02。区域ごとの効力発生日は異なる。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Datafordeler DAGI V4

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `denmark_dagi_2026-grid-512-100.wgsmapset.glc`, `denmark_dagi_2026-grid-4096-1000.wgsmapset.glc`, `denmark_dagi_2026-grid-8192-10000.wgsmapset.glc`, `denmark_dagi_2026.giswordbook`, `denmark_dagi_2026.utf16.giswordbook`, `denmark_dagi_2026.names.csv` |
| 入力データまたは上流成果物 | Danmarks Administrative Geografiske Inddeling（DAGI）V4の`Kommuneinddeling`、`Regionsinddeling`。 |
| 入力バージョン・基準時点 | `DAGI_V4_Kommuneinddeling_TotalDownload_gpkg_Current_217.zip`、`DAGI_V4_Regionsinddeling_TotalDownload_gpkg_Current_217.zip`。 |
| 提供者・権利者 | Klimadatastyrelsen（DAGIをDatafordelerで提供）。 |
| 取得日 | 未記録。 |
| 取得元 | [DAGIファイルダウンロード案内](https://datafordeler.dk/dataoversigt/danmarks-administrative-geografiske-inddeling-dagi/dagi-fildownload/)。 |
| ライセンス・利用条件 | DAGIを対象に明記する[DatafordelerのKDS地理データ利用条件](https://datafordeler.dk/vejledning/brugervilkaar/kds-geografiske-data/)に従う。[Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)が適用される。 |
| 再配布条件 | データ責任機関を適切に表示し、原典・ライセンスへの参照および加工表示を維持する。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source: Klimadatastyrelsen, DAGI V4, distributed via Datafordeler. Licensed under CC BY 4.0.
>
> Derived and processed by Galuchat; not an official DAGI product.

Datafordelerはデータ責任機関の表示を求めるが、この製品向けの固定文言は指定していない。上記は本リリースで採用する帰属・加工表示である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に、原典ファイルやライセンス全文の同梱指定はない。帰属・ライセンス参照と加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の自治体区分面を採用し、Region名を原典の参照IDで結合した。教区は採用していない。
* 図形のZ成分を除いてWGS 84経緯度へ変換し、区域図、名称辞書および原典コード対応表へ加工した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
