# 共通データ型とエラー

Status: Draft

## Position

```json
{
  "lon": 140.0267,
  "lat": 35.681
}
```

- `lon`: WGS84 経度。有限数かつ `-180 <= lon <= 180`。
- `lat`: WGS84 緯度。有限数かつ `-90 <= lat <= 90`。

## Bounds

```json
{
  "west": 139.95,
  "south": 35.6,
  "east": 140.15,
  "north": 35.8
}
```

初期版では日付変更線をまたぐ範囲を扱わず、`west < east`、`south < north` を必須とする。

## DatasetRef

```json
{
  "id": "jp-admin-n03-2026",
  "title": "日本行政区域 2026"
}
```

API入力の`dataset`には、API仕様の`datasets[].id`を指定する。

## GaluchatMapCode

`code`、`codes[]`および`values`のキーに現れる整数は、Dataset固有のGaluchat地図内部コードである。

- 地図の画素値とCodeMapのレコードを関連付けるための、Dataset内に閉じた稠密IDである。
- 異なるDatasetの同じ数値に互換性はない。
- 自治体コード、全国地方公共団体コード、e-Stat地域コード、ISO国コードなどの公的識別子ではない。
- `galuchat_resolve_code`と`galuchat_resolve_codes`には、同じDatasetの位置解決APIが返したコードだけを渡す。

## エラー応答

```json
{
  "ok": false,
  "error": {
    "code": "invalid_argument",
    "message": "lat must be between -90 and 90",
    "details": {
      "field": "lat"
    }
  }
}
```

## 共通エラーコード

| コード | 意味 |
| --- | --- |
| `invalid_argument` | 型、値、必須項目、組み合わせが不正 |
| `dataset_not_found` | `dataset`が存在しない |
| `dataset_not_ready` | データセットをまだ利用できない |
| `map_not_found` | `map`がデータセット内に存在しない |
| `codemap_not_found` | 指定したCodeMapがデータセット内に存在しない |
| `limit_exceeded` | 地点数やコード数などの上限超過 |
| `internal_error` | 入力以外に起因する予期しない失敗 |
