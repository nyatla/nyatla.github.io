# `galuchat_export_map_image`

Status: Draft  
Category: Map Studio  
WebMCP annotation: `readOnlyHint: false`

## 目的

最後に正常生成された地図プレビューを画像ファイルとして保存する。書き出し前にユーザーへファイル名、形式、サイズを提示する。

## Input

```json
{
  "render_id": "render-19",
  "format": "png",
  "filename": "funabashi-map.png"
}
```

- `render_id` は省略時に最後の正常なプレビューを使う。
- 初期版の `format` は `png` のみ。
- `filename` は任意で、パス区切りを含めない。
- 古い `render_id` の書き出し要求は、画面上で対象を明示する。

## Output

```json
{
  "ok": true,
  "render_id": "render-19",
  "filename": "funabashi-map.png",
  "format": "png",
  "width": 1200,
  "height": 630,
  "size_bytes": 184320,
  "download_started": true
}
```

## Attribution

データセットが出典表示を要求する場合、UI は保存前にその内容を表示する。画像への直接埋め込みと、隣接する NOTICE ファイルの生成はデータセットごとの方針に従う。

## Errors

`invalid_argument`, `render_not_found`, `unsupported`, `limit_exceeded`, `export_failed`, `internal_error`

## 未決事項

- WebP、SVG、GeoTIFFなどを追加するか。
- 出典表示を画像内へ強制するデータセットの表現方法。
- Web Share API を使う共有操作を別 API として設けるか。
