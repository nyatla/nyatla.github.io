# `galuchat_get_decoration_code`

Status: Draft  
Category: Map Studio  
WebMCP annotation: `readOnlyHint: true`

## 目的

コードエディタに表示されている現在の修飾コードを取得する。AI はこの内容を読んだうえで、差分を考慮した編集を行う。

## Input

```json
{}
```

## Output

```json
{
  "ok": true,
  "state_revision": 13,
  "decoration": {
    "language": "galuchat-map-style-js/0",
    "source": "export default {\n  background: \"#dceeff\"\n};",
    "validation": {
      "status": "valid",
      "errors": [],
      "warnings": []
    }
  }
}
```

`validation.status` は `valid`, `invalid`, `unchecked` のいずれかとする。取得操作は検証を再実行しない。

## Errors

`internal_error`

