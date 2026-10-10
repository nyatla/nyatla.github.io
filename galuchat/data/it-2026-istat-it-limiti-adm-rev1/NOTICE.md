# it-2026-istat-it-limiti-adm NOTICE

| 項目 | 内容 |
| --- | --- |
| データセット名 | Istat行政界（2026-01-01、非簡略化版） |
| リリースパッケージID | `it-2026-istat-it-limiti-adm` |
| リリース版・基準時点 | Istat 2026-01-01基準、非簡略化版。 |

このリリースパッケージは、以下に記載する原典データをGaluchat用に加工したものである。原典の提供者または権利者が、この加工物の内容を保証または推奨するものではない。

## 出典・ライセンス・許諾情報

### Istituto nazionale di statistica（Istat）行政界

このグループは、同一の出典、利用条件および必須表示が適用される成果物をまとめる。

| 項目 | 内容 |
| --- | --- |
| 対象成果物 | `data-spec.md`, `NOTICE.md`, `italy_istat_2026-grid-512-100.wgsmapset.glc`, `italy_istat_2026-grid-4096-1000.wgsmapset.glc`, `italy_istat_2026-grid-8192-10000.wgsmapset.glc`, `italy_istat_2026.giswordbook`, `italy_istat_2026.utf16.giswordbook`, `italy_istat_2026.names.csv` |
| 入力データまたは上流成果物 | Confini delle unità amministrative a fini statisticiの`Com01012026_WGS84`、`ProvCM01012026_WGS84`、`Reg01012026_WGS84`。 |
| 入力バージョン・基準時点 | 2026-01-01、非簡略化版。原典ZIP名は`Limiti01012026.zip`。 |
| 提供者・権利者 | Istituto nazionale di statistica（Istat）。 |
| 取得日 | 未記録。 |
| 取得元 | Istat行政界の配布ページ：[https://www.istat.it/<wbr>notizia/confini-delle-<wbr>unita-amministrative-<wbr>a-fini-statistici-al-<wbr>1-gennaio-2018-2/](https://www.istat.it/notizia/confini-delle-unita-amministrative-a-fini-statistici-al-1-gennaio-2018-2/), 非簡略化版ZIP：[https://www.istat.it/<wbr>storage/cartografia/<wbr>confini_amministrativi/<wbr>non_generalizzati/<wbr>2026/<wbr>Limiti01012026.zip](https://www.istat.it/storage/cartografia/confini_amministrativi/non_generalizzati/2026/Limiti01012026.zip)。 |
| ライセンス・利用条件 | Creative Commons Attribution 4.0 International：[https://<wbr>creativecommons.org/<wbr>licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/), Istat Open Dataの利用案内：[https://www.istat.it/<wbr>dati/open-data/](https://www.istat.it/dati/open-data/)。 |
| 再配布条件 | Istatを出典表示し、原典・ライセンスへの参照と加工表示を維持する。商用利用を含む再利用が可能。 |

#### 必須帰属表示・加工表示

再配布時は、少なくとも次の表示を維持すること。

> Source: Istat, Confini delle unità amministrative a fini statistici, 1 January 2026. Licensed under CC BY 4.0.
>
> Derived and processed by Galuchat; not an official Istat product.

Istatは出典表示を求めるが、この製品専用の固定文言は指定していない。上記は本リリースで採用する帰属・加工表示である。

#### 同梱文書・付属ファイル

| ファイル | 同梱理由 |
| --- | --- |
| 該当なし | 確認した条件に、原典ファイルやライセンス全文の同梱指定はない。出典・ライセンス参照および加工表示は本NOTICEに保持する。 |

#### 加工内容

* 原典の非簡略化版Comune面を採用し、県・大都市圏等とRegioneの名称を原典コードで結合した。地理的区分は行政階層に採用していない。
* 原典のUTF-8名称を保持し、投影座標からWGS 84経緯度へ再投影して、区域図・辞書・原典コード対応表へ変換した。

## 利用条件と注意

各成果物には、適用される出典・利用条件グループの条件がすべて適用される。必須帰属表示および加工表示を維持し、原典の利用条件に従うこと。本NOTICEは原典の利用条件を置き換えず、新たな利用許諾を与えるものではない。

原典および加工物の正確性、完全性、最新性、特定目的への適合性は保証されない。
