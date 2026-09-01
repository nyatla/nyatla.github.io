# `galuchat_list_canvases`

## 目的

ページ内に存在する共有Canvasの一覧を取得する。

人間が作成したCanvasや、以前のWebMCP操作で作成したCanvasをAIが発見するために使う。

## Input

```json
{}
```

## Output

```json
{
  "ok": true,
  "canvases": [
    {
      "canvas": "main",
      "width": 1200,
      "height": 630
    },
    {
      "canvas": "map-layer",
      "width": 800,
      "height": 600
    }
  ]
}
```

Canvasが存在しない場合は空配列を返す。

## Errors

`internal_error`
