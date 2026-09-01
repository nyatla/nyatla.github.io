# `galuchat_resolve_code`

## 目的

1個のコードについて、選択したCodeMapのメタデータを取得する。

論理的な関数形式は次のとおり。

```text
func(code, dataset, codemaps[])
```

## Input

```json
{
  "code": 672,
  "dataset": "jp-admin-n03-2026",
  "codemaps": ["place-name-utf8"]
}
```

## Output

```json
{
  "dataset": "jp-admin-n03-2026",
  "code": 672,
  "values": {
    "place-name-utf8": {
      "path": ["東京都", "", "", "千代田区", ""],
      "name": "東京都 千代田区"
    }
  }
}
```

CodeMapにコードがない場合、そのCodeMapの値は`null`とする。

入力`code`には、同じDatasetを指定した`galuchat_resolve_position`または`galuchat_resolve_positions`が返したGaluchat地図内部コードだけを指定する。自治体コード、統計地域コード、ISOコードなどを直接指定してはならない。

## Errors

`invalid_argument`, `dataset_not_found`, `codemap_not_found`, `internal_error`
