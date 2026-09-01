# `galuchat_delete_canvas`

## 目的

共有Canvasをページから削除する。

## Input

```json
{
  "canvas": "map-layer"
}
```

## Output

```json
{
  "ok": true,
  "canvas": "map-layer"
}
```

削除したCanvasは通常UIからも取り除く。削除後に同じ名前でCanvasを作り直すことができる。

## Errors

`invalid_argument`, `canvas_not_found`, `internal_error`
