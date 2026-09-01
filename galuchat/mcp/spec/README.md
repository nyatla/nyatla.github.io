# Galuchat Reverse Geocoding WebMCP API 仕様

このディレクトリは、`/galuchat/mcp/`で公開する逆ジオコーディングサービスの設計上の正本である。

逆ジオコーディングの5ツールは`/galuchat/mcp/`の通常UIと同じブラウザ内サービスを使って実装している。APIバージョン`galuchat-webmcp/0`はDraftであり、互換性を保証しない。

## 対象範囲

初期版は、経緯度から地図コードとメタデータを取得する機能に集中する。

```text
WGS84経緯度
    ↓ DatasetとMap
Galuchat地図内部コード
    ↓ CodeMap
地名・属性メタデータ
```

- 座標はWGS84、座標名は`lon`と`lat`に統一する。
- `dataset`は、地図と利用可能なCodeMapの組を表す。
- `map`は地点からコードを得る地図と解像度を選択する。
- `codemaps`はコードから取得するメタデータの種類を選択する。
- `code`はDataset内だけで意味を持つGaluchat地図内部コードであり、自治体コード、統計コード、ISOコードなどの公的識別子ではない。
- 選択中データセットの原典、ライセンス、出典表示を通常UIに表示し、ダウンロードデータにも含める。
- MapとCodeMapは初回利用時に必要なものだけを遅延ロードし、取得済みリソースはセッション中に再利用する。
- 単一入力と複数入力は、戻り値の形を明確にするため別APIにする。
- 複数の地点またはコードを処理するときは、単件APIを繰り返さず複数入力APIの1回の呼び出しにまとめる。

二次元コードマップ、地図画像生成、Canvas操作、Map Studioは初期版に含めない。既存文書は検討を再開する場合の保留資料として残すが、公開API一覧には含めない。

## APIセット

| API | 目的 |
| --- | --- |
| [`galuchat_get_api_spec`](./system/get-api-spec.md) | APIバージョン、データセット、Map、CodeMap、ツールを取得する |
| [`galuchat_resolve_position`](./information/resolve-position.md) | 1地点の経緯度をコードとメタデータへ変換する |
| [`galuchat_resolve_positions`](./information/resolve-positions.md) | 複数地点を一括変換する |
| [`galuchat_resolve_code`](./information/resolve-code.md) | 1個のコードからメタデータを取得する |
| [`galuchat_resolve_codes`](./information/resolve-codes.md) | 複数のコードからメタデータを一括取得する |

## 共通仕様

- [共通データ型とエラー](./common-types.md)

## 論理関数

```text
galuchat_resolve_position(position, dataset, codemaps[], map?)
galuchat_resolve_positions(positions[], dataset, codemaps[], map?)
galuchat_resolve_code(code, dataset, codemaps[])
galuchat_resolve_codes(codes[], dataset, codemaps[])
```

`map`を省略した場合は、データセットで利用可能な地図のうち最も高い解像度のものを選ぶ。

## API名と論理応答

ここに記載するAPI名はWebMCPのtool nameとして使う。通常UIは同等の内部サービスを直接呼び出す。

各文書のOutputは論理的なJSON payloadを表す。API全体の発見情報は、WebMCPツール`galuchat_get_api_spec`と静的リソース`/galuchat/mcp/apispec.json`で同じ形式を提供する。
