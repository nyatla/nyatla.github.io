# `galuchat_resize_canvas`

## 目的

共有Canvasのピクセルサイズを変更する。

## Input

```json
{
  "canvas": "main",
  "width": 800,
  "height": 600
}
```

## 処理

HTML Canvasと同様に、サイズ変更時は描画内容を消去し、Canvas 2D contextを既定状態へ戻す。既存画像の拡大縮小は行わない。

## Output

```json
{
  "ok": true,
  "canvas": "main",
  "width": 800,
  "height": 600
}
```

## Errors

`invalid_argument`, `canvas_not_found`, `limit_exceeded`, `internal_error`
