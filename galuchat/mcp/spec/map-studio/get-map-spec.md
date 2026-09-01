# `galuchat_get_map_spec`

Status: Draft  
Category: Map Studio  
WebMCP annotation: `readOnlyHint: true`

## 目的

人間と AI が共有している現在の地図作成条件を取得する。修飾コード本体は別 API で取得する。

## Input

```json
{}
```

## MapSpec

```json
{
  "dataset_id": "jp-admin-n03-2026",
  "viewport": {
    "mode": "center",
    "center": { "lon": 140.0267, "lat": 35.681 },
    "zoom": 6
  },
  "size": {
    "width": 800,
    "height": 600
  },
  "highlight_codes": [12204],
  "show_edges": true
}
```

`viewport` は次のいずれかとする。

```text
center:     center と zoom で指定
bounds:     west, south, east, north で指定
fit_points: points と padding で指定
```

公開 API の `zoom` は数値が大きいほど詳細表示とする。Galuchat SDK 内部の `zoomLevelIndex` は公開しない。

## Output

```json
{
  "ok": true,
  "state_revision": 12,
  "ready": true,
  "map_spec": {
    "dataset_id": "jp-admin-n03-2026",
    "viewport": {
      "mode": "center",
      "center": { "lon": 140.0267, "lat": 35.681 },
      "zoom": 6
    },
    "size": { "width": 800, "height": 600 },
    "highlight_codes": [12204],
    "show_edges": true
  },
  "preview": {
    "status": "current",
    "render_id": "render-18"
  }
}
```

`preview.status` は `none`, `stale`, `current`, `error` のいずれかとする。

## Errors

`internal_error`

