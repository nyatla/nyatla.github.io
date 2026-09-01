# `galuchat_create_canvas`

## 目的

ページ内に、人間とAIが共有して操作できるCanvasを作成する。

## Input

```json
{
  "canvas": "main",
  "width": 1200,
  "height": 630
}
```

- `canvas`はページ内で一意な名前とする。
- `width`と`height`はCanvasのピクセル数を表す。
- 作成したCanvasは通常UIにも表示する。
- 同じ名前のCanvasを暗黙に置き換えない。

## Output

```json
{
  "ok": true,
  "canvas": "main",
  "width": 1200,
  "height": 630
}
```

作成直後のCanvasは透明な黒で初期化され、Canvas 2D contextは既定状態になる。

## Errors

`invalid_argument`, `canvas_already_exists`, `limit_exceeded`, `internal_error`
