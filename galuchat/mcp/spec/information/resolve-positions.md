# `galuchat_resolve_positions`

## 目的

複数のWGS84経緯度を地図コードへ変換し、選択したCodeMapのメタデータを取得する。

論理的な関数形式は次のとおり。

```text
func(positions[], dataset, codemaps[], map?)
```

## Input

```json
{
  "positions": [
    { "lon": 139.7671, "lat": 35.6812 },
    { "lon": 139.7675, "lat": 35.6814 },
    { "lon": 135.5023, "lat": 34.6937 }
  ],
  "dataset": "jp-admin-n03-2026",
  "codemaps": ["place-name-utf8"],
  "map": "unit-inv-10000"
}
```

`map`には、対象データセットのAPI仕様にある`maps[].id`を指定する。省略した場合は、利用可能な地図のうち最も高い解像度のものを選択する。

`positions`は1件以上、API仕様の`limits.positionsPerRequest`以下とする。現在の上限は10000件。

## Output

```json
{
  "dataset": "jp-admin-n03-2026",
  "map": "unit-inv-10000",
  "resolution": { "lon": 0.0001, "lat": 0.0001 },
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

- `codes[i]`は入力`positions[i]`に対応し、入力順とコードの重複を保持する。
- 地図コードが得られない地点の`codes[i]`は`null`とする。
- `values.<CodeMap名>.<code>`に、そのコードのメタデータを格納する。
- JSONオブジェクトのキーになるコードは10進数の文字列で表す。
- 同じコードのメタデータはCodeMapごとに1回だけ格納する。
- CodeMapにコードがない場合、そのコードの値は`null`とする。
- 応答の`resolution`は、選択した地図の解像度を度/画素で表す。
- `codes[]`はDataset固有のGaluchat地図内部コードであり、自治体コードなどの公的識別子ではない。

## Errors

`invalid_argument`, `dataset_not_found`, `map_not_found`, `codemap_not_found`, `limit_exceeded`, `internal_error`
