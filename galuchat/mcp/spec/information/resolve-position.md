# `galuchat_resolve_position`

## 目的

指定したWGS84経緯度を地図コードへ変換し、選択したCodeMapのメタデータを取得する。

論理的な関数形式は次のとおり。

```text
func(position, dataset, codemaps[], map?)
```

## Input

```json
{
  "position": { "lon": 139.7671, "lat": 35.6812 },
  "dataset": "jp-admin-n03-2026",
  "codemaps": ["place-name-utf8"],
  "map": "unit-inv-10000"
}
```

`map`には、対象データセットのAPI仕様にある`maps[].id`を指定する。省略した場合は、利用可能な地図のうち最も高い解像度のものを選択する。

## Output

```json
{
  "dataset": "jp-admin-n03-2026",
  "map": "unit-inv-10000",
  "resolution": { "lon": 0.0001, "lat": 0.0001 },
  "code": 672,
  "values": {
    "place-name-utf8": {
      "path": ["東京都", "", "", "千代田区", ""],
      "name": "東京都 千代田区"
    }
  }
}
```

- 地図コードが得られない場合、`code`と各CodeMapの値は`null`とする。
- 地図コードに対応するCodeMapの値がない場合、そのCodeMapの値は`null`とする。
- 応答の`resolution`は、選択した地図の解像度を度/画素で表す。
- `code`はDataset固有のGaluchat地図内部コードであり、自治体コードなどの公的識別子ではない。

## Errors

`invalid_argument`, `dataset_not_found`, `map_not_found`, `codemap_not_found`, `internal_error`
