# `galuchat_render_preview`

Status: Draft  
Category: Map Studio  
WebMCP annotation: `readOnlyHint: false`

## 目的

現在の MapSpec と修飾コードを使って地図画像を生成し、人間と AI が共有する Canvas へ表示する。

## Input

```json
{
  "if_revision": 14
}
```

入力で MapSpec や修飾コードを上書きしない。変更はそれぞれの設定 API で行い、プレビューは確定した共有状態から生成する。

## 処理

1. MapSpec から表示範囲と出力サイズを確定する。
2. 必要なコードマップを読み出す、またはキャッシュを再利用する。
3. 使用コードのメタデータを解決する。
4. 修飾コードを安全な環境で評価し、コード別の表示色を確定する。
5. 地域塗り、境界線、宣言的な画像装飾を描画する。
6. Canvas、詳細パネル、実行履歴を更新する。

## Output

```json
{
  "ok": true,
  "state_revision": 15,
  "render": {
    "render_id": "render-19",
    "width": 1200,
    "height": 630,
    "center": { "lon": 140.05, "lat": 35.7 },
    "bounds": {
      "west": 139.95,
      "south": 35.6,
      "east": 140.15,
      "north": 35.8
    },
    "unique_code_count": 12,
    "render_time_ms": 18.4,
    "displayed": true
  }
}
```

画像データや data URL は応答へ含めない。正常なプレビューはページ内で保持し、後続の画像書き出しに使う。

## Failure behavior

修飾コードの実行エラーや時間超過が発生した場合、直前の正常な Canvas を消去しない。エディタと実行履歴に該当位置を表示する。

## Errors

`dataset_not_ready`, `state_conflict`, `decoration_runtime_error`, `render_failed`, `limit_exceeded`, `internal_error`
