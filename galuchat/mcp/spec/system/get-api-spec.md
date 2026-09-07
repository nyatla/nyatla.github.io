# `galuchat_get_api_spec`

Status: Implemented

## 目的

Galuchat WebMCPサービスが提供するAPIバージョン、ツール、データセットを返す。

旧Galuchat Web APIの`/apispec`に相当する発見APIである。

## 提供形態

同じ論理形式を2つの経路で提供する。

```text
WebMCP: galuchat_get_api_spec({})
HTTP:   GET /galuchat/mcp/apispec.json
```

- `apispec.json`はデプロイ時に生成する静的リソースとする。
- WebMCPツールと静的リソースは同じ内容を返す。

## Input

```json
{}
```

## Output

```json
{
  "ok": true,
  "version": "galuchat-webmcp/0;GaluchatJavaScript/0.5.2",
  "default_dataset_id": "jp-admin-n03-2026",
  "limits": {
    "positionsPerRequest": 10000,
    "codesPerRequest": 10000,
    "codeMapCellsPerRequest": 10000
  },
  "datasets": [
    {
      "id": "jp-admin-n03-2026",
      "title": "日本行政区域（国土数値情報 N03 / 2026）",
      "description": "国土数値情報N03をGaluchat用に加工した行政区域データ",
      "area": {
        "west": 122.93,
        "south": 20.42,
        "east": 153.99,
        "north": 45.56
      },
      "code_semantics": {
        "type": "uint32",
        "scope": "dataset",
        "description": "Dataset固有のGaluchat地図内部コード。自治体コードなどの公的識別子ではない"
      },
      "maps": [
        {
          "id": "unit-inv-10000",
          "resolution": { "lon": 0.0001, "lat": 0.0001 },
          "size_bytes": 4691858
        }
      ],
      "codemaps": [
        {
          "name": "place-name-utf8",
          "description": "地域コードに対応する地名階層",
          "format": "GisWordBook/0",
          "code_type": "uint32",
          "text_encoding": "utf8",
          "metadata": [
            {
              "name": "path",
              "type": "string[]",
              "description": "上位地域から順に並べた地名階層"
            },
            {
              "name": "name",
              "type": "string",
              "description": "地名階層から生成する表示名"
            }
          ],
          "size_bytes": 31922
        }
      ],
      "license": {
        "name": "Creative Commons Attribution 4.0 International",
        "url": "https://creativecommons.org/licenses/by/4.0/",
        "source_name": "国土数値情報 行政区域データ N03-2026",
        "source_url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03.html",
        "attribution": "「国土数値情報（行政区域データ）」（国土交通省）をもとにGaluchat用に加工して作成",
        "approval": "測量法に基づく国土地理院長承認（使用）R 8JHs 319",
        "notice_url": "/galuchat/data/jp-admin-n03-2026/NOTICE.md"
      }
    },
    {
      "id": "jp-estat-r2ka-2020",
      "title": "e-Stat 令和2年国勢調査 町丁・字等境界",
      "description": "e-Statの町丁・字等境界をGaluchat用に加工した境界データ",
      "area": {
        "west": 122.93,
        "south": 20.42,
        "east": 153.99,
        "north": 45.56
      },
      "code_semantics": {
        "type": "uint32",
        "scope": "dataset",
        "description": "Dataset固有のGaluchat地図内部コード。統計地域コードなどの公的識別子ではない"
      },
      "maps": [
        {
          "id": "unit-inv-10000",
          "resolution": { "lon": 0.0001, "lat": 0.0001 },
          "size_bytes": 23800329
        }
      ],
      "codemaps": [
        {
          "name": "place-name-utf8",
          "description": "地域コードに対応する地名階層",
          "format": "GisWordBook/0",
          "code_type": "uint32",
          "text_encoding": "utf8",
          "metadata": [
            { "name": "path", "type": "string[]", "description": "上位地域から順に並べた地名階層" },
            { "name": "name", "type": "string", "description": "地名階層から生成する表示名" }
          ],
          "size_bytes": 1713832
        }
      ],
      "license": {
        "name": "政府標準利用規約2.0（CC BY 4.0互換）",
        "url": "https://www.e-stat.go.jp/terms-of-use",
        "source_name": "令和2年国勢調査 町丁・字等境界データ",
        "source_url": "https://www.e-stat.go.jp/gis/statmap-search?page=1&type=2&aggregateUnitForBoundary=A&toukeiCode=00200521&toukeiYear=2020&serveyId=A002005212020&coordsys=1&format=shape&datum=2011",
        "attribution": "「令和2年国勢調査 町丁・字等境界データ」（総務省統計局、e-Stat）をGaluchat用に加工して作成",
        "notice_url": "/galuchat/data/jp-estat-r2ka-2020/NOTICE.md"
      }
    },
    {
      "id": "tw-admin-nlsc-village-2026",
      "title": "台湾 村里界（NLSC / 2026）",
      "description": "內政部國土測繪中心の村里界圖をGaluchat用に加工した行政区域データ",
      "area": { "west": 114.3593, "south": 10.3713, "east": 124.5613, "north": 26.3854 },
      "code_semantics": {
        "type": "uint32",
        "scope": "dataset",
        "description": "Dataset固有のGaluchat地図内部コード。公的識別子ではない"
      },
      "maps": [
        {
          "id": "unit-inv-10000",
          "resolution": { "lon": 0.0001, "lat": 0.0001 },
          "size_bytes": 1333264
        }
      ],
      "codemaps": [
        {
          "name": "place-name-utf8",
          "description": "地域コードに対応する地名階層",
          "format": "GisWordBook/0",
          "code_type": "uint32",
          "text_encoding": "utf8",
          "metadata": [
            { "name": "path", "type": "string[]", "description": "縣市、鄉鎮市區、村里の地名階層" },
            { "name": "name", "type": "string", "description": "地名階層から生成する表示名" }
          ],
          "size_bytes": 58445
        }
      ],
      "license": {
        "name": "政府資料開放授權條款－第1版",
        "url": "https://data.gov.tw/license",
        "source_name": "內政部國土測繪中心 村里界圖(TWD97經緯度)",
        "source_url": "https://data.gov.tw/dataset/7438",
        "attribution": "內政部國土測繪中心 2026 村里界圖(TWD97經緯度)（2026-08-17版）。此開放資料依政府資料開放授權條款第1版進行公眾釋出。",
        "notice_url": "/galuchat/data/tw-admin-nlsc-village-2026/NOTICE.md"
      }
    },
    {
      "id": "uk-admin-ons-lad-2025",
      "title": "英国 Local Authority Districts（ONS / 2025）",
      "description": "ONS Local Authority Districts (December 2025) UK BFCをGaluchat用に加工した行政区域データ",
      "area": { "west": -8.65, "south": 49.8647, "east": 1.7638, "north": 60.8609 },
      "code_semantics": {
        "type": "uint32",
        "scope": "dataset",
        "description": "Dataset固有のGaluchat地図内部コード。公的識別子ではない"
      },
      "maps": [
        {
          "id": "unit-inv-10000",
          "resolution": { "lon": 0.0001, "lat": 0.0001 },
          "size_bytes": 2340613
        }
      ],
      "codemaps": [
        {
          "name": "place-name-utf8",
          "description": "地域コードに対応する地名階層",
          "format": "GisWordBook/0",
          "code_type": "uint32",
          "text_encoding": "utf8",
          "metadata": [
            { "name": "path", "type": "string[]", "description": "構成国、カウンティ、Local Authority Districtの地名階層" },
            { "name": "name", "type": "string", "description": "地名階層から生成する表示名" }
          ],
          "size_bytes": 6379
        }
      ],
      "license": {
        "name": "Open Government Licence v3.0",
        "url": "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
        "source_name": "ONS Local Authority Districts (December 2025) Boundaries UK BFC",
        "source_url": "https://www.data.gov.uk/dataset/aa5a9ccf-fbea-43cb-81cc-fdc04d89f128/local-authority-districts-december-2025-boundaries-uk-bfc",
        "attribution": "Source: Office for National Statistics licensed under the Open Government Licence v.3.0. Contains OS data © Crown copyright and database right 2026.",
        "notice_url": "/galuchat/data/uk-admin-ons-lad-2025/NOTICE.md"
      }
    },
    {
      "id": "world-geoboundaries-cgaz",
      "title": "世界行政区域（geoBoundaries CGAZ）",
      "description": "geoBoundaries CGAZ ADM2 global compositeをGaluchat用に加工した世界行政区域データ",
      "area": {
        "west": -180,
        "south": -90,
        "east": 180,
        "north": 90
      },
      "code_semantics": {
        "type": "uint32",
        "scope": "dataset",
        "description": "Dataset固有のGaluchat地図内部コード。ISO国コードなどの公的識別子ではない"
      },
      "maps": [
        {
          "id": "unit-inv-1000",
          "resolution": { "lon": 0.001, "lat": 0.001 },
          "size_bytes": 21438850
        }
      ],
      "codemaps": [
        {
          "name": "place-name-utf8",
          "description": "地域コードに対応する地名階層",
          "format": "GisWordBook/0",
          "code_type": "uint32",
          "text_encoding": "utf8",
          "metadata": [
            { "name": "path", "type": "string[]", "description": "上位地域から順に並べた地名階層" },
            { "name": "name", "type": "string", "description": "地名階層から生成する表示名" }
          ],
          "size_bytes": 574680
        }
      ],
      "license": {
        "name": "Creative Commons Attribution 4.0 International",
        "url": "https://creativecommons.org/licenses/by/4.0/",
        "source_name": "geoBoundaries CGAZ ADM2 global composite",
        "source_url": "https://www.geoboundaries.org/globalDownloads.html",
        "attribution": "Contains information from geoBoundaries, adapted for Galuchat.",
        "notice_url": "/galuchat/data/world-geoboundaries-cgaz/NOTICE.md"
      }
    }
  ],
  "tools": [
    "galuchat_get_api_spec",
    "galuchat_resolve_position",
    "galuchat_resolve_positions",
    "galuchat_resolve_code",
    "galuchat_resolve_codes",
    "galuchat_get_code_map"
  ]
}
```

例示したデータセットの`area`、解像度、サイズは、実装時に配布物のmanifestとWGSMapSetヘッダーから生成し、手書きで同期しない。

## フィールド仕様

### `version`

APIと使用実装のバージョンをセミコロン区切りの1行で表す。

```text
galuchat-webmcp/0;GaluchatJavaScript/0.5.2
```

先頭要素は公開ツールと論理データ型の互換性バージョンとする。後続要素は、そのAPIを構成する主要実装の名称とバージョンを必要に応じて列挙する。

### `limits`

複数入力APIの1リクエストあたりの上限を表す。

| 項目 | 説明 |
| --- | --- |
| `positionsPerRequest` | `galuchat_resolve_positions`で指定できる地点数。1以上10000以下 |
| `codesPerRequest` | `galuchat_resolve_codes`で指定できるコード数。1以上10000以下 |
| `codeMapCellsPerRequest` | `galuchat_get_code_map`で返せる`width * height`。1以上10000以下 |

### `datasets`

利用可能な意味データセットの一覧。地点解決に使う複数解像度WGSMapSetは、同じデータセットの`maps`として列挙する。

| 項目 | 説明 |
| --- | --- |
| `id` | API入力で使う安定した識別子 |
| `area` | 収録経緯度範囲 |
| `code_semantics` | 地図コードの型、スコープ、意味。公的識別子との混同を防ぐ説明を含む |
| `maps` | 利用可能なWGSMapSetと解像度 |
| `codemaps` | 地図コードからメタデータを取得するCodeMapの一覧 |
| `license` | 原典、ライセンス、出典表示、詳細NOTICE |

`resolution`の経度・緯度の単位は度/画素とし、値が小さいほど高解像度とする。地図を選択するAPIでは`maps[].id`を指定し、省略時は利用可能な`maps`のうち最も高い解像度のものを選択する。

`code_semantics.scope`は常に`dataset`である。位置解決APIが返す`code`はDataset内の地図画素とCodeMapを関連付けるための稠密IDであり、自治体コード、統計地域コード、ISOコードなどの公的識別子ではない。同じ数値でもDatasetが異なれば互換性はない。

CodeMapは、地図コードからメタデータを取得する独立した変換表の総称である。文字列階層を格納するGisWordBookも、`format: "GisWordBook/0"`を持つCodeMapの一種として列挙する。

`codemaps`は変換表の全レコードを収録するフィールドではない。利用可能な変換表の名前、形式、コード型、取得できるメタデータ項目を定義する。実際のレコードは`galuchat_resolve_code`または`galuchat_resolve_codes`で取得する。

### 遅延ロード

クライアントは初期表示時に`apispec.json`だけを取得し、`maps`と`codemaps`のデータファイルを一括取得しない。

`galuchat_resolve_position`または`galuchat_resolve_positions`の初回実行時に、指定されたデータセットについて次のリソースだけを取得する。

1. 選択された`maps[].id`のWGSMapSet
2. 入力の`codemaps`で指定されたCodeMap

取得済みのリソースはクライアントのセッション中に再利用する。別のMapまたは未取得のCodeMapが指定された場合だけ、追加リソースを取得する。人間向けUIは取得中であること、対象リソース、合計サイズ、進捗を表示し、取得完了まで問い合わせの重複実行を抑止する。

WebMCP経由の実行でも論理的なロード規則は同じとし、リソース取得中はツール呼び出しのPromiseを保留する。ロード状態や進捗表示はUI上の関心事であり、ツールの戻り値形式には追加しない。

### `license`

データセットが使用する地図データの出典と利用条件を表す。

| 項目 | 説明 |
| --- | --- |
| `name` | ライセンスの表示名 |
| `url` | ライセンス本文または公式説明ページ |
| `source_name` | 原典データの名称 |
| `source_url` | 原典データの配布ページ |
| `attribution` | 画面表示や再配布時に使用する出典表示文 |
| `approval` | 測量法などに基づく承認表示。該当するデータセットだけに設定する |
| `notice_url` | 加工内容や追加条件を記載した詳細NOTICE |

通常UIは、選択中データセットの`source_name`、`name`、`attribution`を表示し、それぞれのURLと詳細NOTICEへ移動できるようにする。`approval`がある場合は省略せず、出典表示とともに表示する。

### `tools`

提供するWebMCPツール名の一覧。説明と入力schemaはWebMCPのツール発見機構を正本とし、`apispec`には重複収録しない。

## 生成規則

`apispec.json`は次の情報から生成する。

1. アプリが登録するツール定義
2. データセットmanifest
3. WGSMapSetヘッダーの収録範囲
4. Galuchat JavaScript manifest

生成時に以下を検証する。

- `default_dataset_id`が`datasets`に存在する。
- 全ツール名が重複しない。
- 全データセットに`license.name`、`license.url`、`license.source_name`、`license.source_url`、`license.attribution`、`license.notice_url`がある。
- `license.approval`がある場合は空文字列ではない。
- `codemaps[].name`がデータセット内で重複しない。
- 各CodeMap内の`metadata[].name`が重複しない。

## Errors

`internal_error`
