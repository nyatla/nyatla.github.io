# `galuchat_resolve_codes`

## 目的

複数のコードについて、選択したCodeMapのメタデータを取得する。

論理的な関数形式は次のとおり。

```text
func(codes[], dataset, codemaps[])
```

## Input

```json
{
  "codes": [672, 672, 1226],
  "dataset": "jp-admin-n03-2026",
  "codemaps": ["place-name-utf8"]
}
```

`codes`は1件以上、API仕様の`limits.codesPerRequest`以下とする。現在の上限は10000件。

## Output

```json
{
  "dataset": "jp-admin-n03-2026",
  "codes": [672, 672, 1226],
  "values": {
    "place-name-utf8": {
      "672": {
        "path": ["東京都", "", "", "千代田区", ""],
        "name": "東京都 千代田区"
      },
      "1226": {
        "path": ["大阪府", "", "", "大阪市", "北区"],
        "name": "大阪府 大阪市 北区"
      }
    }
  }
}
```

- `codes`は入力順と重複を保持する。
- `values.<CodeMap名>.<code>`に、そのコードのメタデータを格納する。
- JSONオブジェクトのキーになるコードは10進数の文字列で表す。
- 同じコードのメタデータはCodeMapごとに1回だけ格納する。
- CodeMapにコードがない場合、そのコードの値は`null`とする。
- `codemaps`には、対象データセットのAPI仕様に記載されたCodeMap名を指定する。
- `codes[]`には、同じDatasetの位置解決APIが返したGaluchat地図内部コードだけを指定する。自治体コード、統計地域コード、ISOコードなどを直接指定してはならない。

## Errors

`invalid_argument`, `dataset_not_found`, `codemap_not_found`, `limit_exceeded`, `internal_error`
