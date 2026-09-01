# `galuchat_set_map_spec`

Status: Draft  
Category: Map Studio  
WebMCP annotation: `readOnlyHint: false`

## 目的

人間と AI が共有する地図作成条件を変更する。変更後のプレビュー生成は行わない。

## Input

```json
{
  "if_revision": 12,
  "map_spec": {
    "dataset_id": "jp-admin-n03-2026",
    "viewport": {
      "mode": "bounds",
      "west": 139.95,
      "south": 35.6,
      "east": 140.15,
      "north": 35.8
    },
    "size": { "width": 1200, "height": 630 },
    "highlight_codes": [12204],
    "show_edges": true
  }
}
```

- `map_spec` は初期版では完全な MapSpec とする。部分更新は行わない。
- `if_revision` は任意だが、AI クライアントには指定を推奨する。
- 変更が成功するとコードエディタ以外の通常 UI にも即座に反映する。
- データセット変更時は対応しない `highlight_codes` を空にする。

## Output

```json
{
  "ok": true,
  "state_revision": 13,
  "map_spec": {},
  "preview": {
    "status": "stale",
    "render_id": "render-18"
  }
}
```

## Validation

- サイズは各辺1以上4096以下、総画素数4,194,304以下。
- `highlight_codes` は重複なしで最大64件。
- `zoom` は選択したデータセットが提供する公開ズーム範囲内。
- `fit_points` は1件以上256件以下。

## Errors

`invalid_argument`, `dataset_not_found`, `dataset_not_ready`, `limit_exceeded`, `state_conflict`, `internal_error`

## 未決事項

- 完全置換に加えて JSON Merge Patch 相当の部分更新を提供するか。
- `fit_points` の余白を画素と割合のどちらで指定するか。

