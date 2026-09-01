# `galuchat_get_canvas_info`

## 目的

共有Canvasのサイズを取得する。

## Input

```json
{
  "canvas": "main"
}
```

## Output

```json
{
  "ok": true,
  "canvas": "main",
  "width": 1200,
  "height": 630
}
```

このAPIは画像データやdata URLを返さない。Canvasの内容はページ表示、ブラウザのスクリーンショット、または`galuchat_export_canvas`の出力で確認する。

## Errors

`invalid_argument`, `canvas_not_found`, `internal_error`
