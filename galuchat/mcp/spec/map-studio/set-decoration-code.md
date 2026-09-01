# `galuchat_set_decoration_code`

Status: Draft  
Category: Map Studio  
WebMCP annotation: `readOnlyHint: false`

## 目的

修飾コードを検証し、成功した場合だけ共有コードエディタの内容を更新する。地図の再描画は別 API とする。

## Input

```json
{
  "if_revision": 13,
  "language": "galuchat-map-style-js/0",
  "source": "export default {\n  background: \"#061826\",\n  region(region) {\n    return { fill: region.code === 12204 ? \"#ffb703\" : \"#506070\" };\n  },\n  edge: { color: \"#ffffff\", width: 1 }\n};"
}
```

- `source` は UTF-8 換算で最大32 KiBとする。
- 構文エラーまたは静的制約違反がある場合、現在のコードを変更しない。
- 更新に成功すると通常 UI のコードエディタへ即座に反映する。
- 任意コードをページ権限で実行して検証してはならない。

## Output: 成功

```json
{
  "ok": true,
  "state_revision": 14,
  "validation": {
    "status": "valid",
    "errors": [],
    "warnings": []
  },
  "preview": {
    "status": "stale",
    "render_id": "render-18"
  }
}
```

## Output: 検証失敗

```json
{
  "ok": false,
  "error": {
    "code": "decoration_compile_error",
    "message": "Unexpected token at line 4, column 2",
    "details": {
      "line": 4,
      "column": 2
    }
  }
}
```

## Errors

`invalid_argument`, `limit_exceeded`, `state_conflict`, `decoration_compile_error`, `unsupported`, `internal_error`

## 未決事項

- 警告があるコードを保存可能にするか。
- AI が全文置換ではなくテキスト差分を送る API を追加するか。

