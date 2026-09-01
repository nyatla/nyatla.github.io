# 地図画像の修飾コード

Status: Draft

修飾コードは、コードマップが持つ事実を変更せず、その表示方法を定義する。人間と AI は同じソースコードを編集し、同じプレビューを見る。

## 初期ダイアレクト

識別子を `galuchat-map-style-js/0` とする。JavaScript に似たモジュール形式を想定するが、安全な実行方式が確定するまでは実装仕様ではない。

```js
export default {
  background: "#dceeff",

  region(region) {
    if (region.code === 0) {
      return { fill: "#8ecae6", opacity: 1 };
    }
    if (region.path?.includes("船橋市")) {
      return { fill: "#ffb703", opacity: 1 };
    }
    if (region.path?.[0] === "千葉県") {
      return { fill: "#90be6d", opacity: 1 };
    }
    return { fill: "#d9d9d9", opacity: 1 };
  },

  edge: {
    color: "#333333",
    width: 1,
    includeZero: true
  },

  legend: {
    title: "船橋市と周辺地域"
  }
};
```

## region 入力

`region()` は画素ごとではなく、コードマップに登場するコードごとに一度評価する。

```json
{
  "code": 12204,
  "status": "found",
  "path": ["千葉県", "船橋市"],
  "name": "千葉県 船橋市"
}
```

## region 出力

初期版は次の値だけを受け付ける。

```json
{
  "fill": "#ffb703",
  "opacity": 1
}
```

- `fill`: `#RRGGBB` または `#RRGGBBAA`。
- `opacity`: `0` 以上 `1` 以下。省略時は `1`。

境界線は現行レンダラーに合わせ、地図全体で共通の色と太さを使う。コード別の境界線スタイルは初期版の対象外とする。

## 実行制約

- DOM、Cookie、Storage、ネットワーク、現在ページの JavaScript へアクセスさせない。
- 同じ入力から同じ結果が得られる決定的な処理に限定する。
- 実行時間、ソース長、メモリ使用量に上限を設ける。
- 例外、時間超過、不正な色は構造化エラーとして表示し、直前の正常なプレビューを保持する。
- 実行候補は専用 Worker、制限付きインタープリター、専用 DSL とする。`eval()` でページ権限のまま実行しない。

## 画像装飾

タイトル、凡例、マーカー、注釈、出典などの画像装飾は、地域色の指定と分離する。初期版では `legend.title` のような宣言的プロパティから始め、任意の Canvas コードは許可しない。

## 未決事項

- JavaScript サブセットを採用するか、独自 DSL にするか。
- 凡例項目を明示する形式と、評価結果から自動生成する形式のどちらを採るか。
- マーカー、テキスト、スケール、出典表示の宣言形式。
- 修飾コードの互換性バージョン管理方法。

