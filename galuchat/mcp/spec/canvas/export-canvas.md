# `galuchat_export_canvas`

## 目的

共有Canvasの現在の内容を画像ファイルとして書き出す。

## Input

```json
{
  "canvas": "main",
  "format": "png",
  "filename": "tokyo-map.png"
}
```

- 初期版の`format`は`png`のみとする。
- `filename`は任意で、パス区切りを含めない。

## Output

```json
{
  "ok": true,
  "canvas": "main",
  "format": "png",
  "filename": "tokyo-map.png",
  "width": 1200,
  "height": 630,
  "size_bytes": 184320,
  "download_started": true
}
```

画像データやdata URLはWebMCP応答へ含めない。画像の内容はページ上のCanvasまたは保存されたファイルで確認する。

## Errors

`invalid_argument`, `canvas_not_found`, `unsupported`, `limit_exceeded`, `export_failed`, `internal_error`
