# `galuchat_get_code_map`

## 目的

指定した矩形領域について、各セルが地図コードを持つ二次元コードマップを取得する。

着色、境界線、CodeMapのメタデータは含めない。

## Input: 経緯度範囲

```json
{
  "area": {
    "west": 140.0260,
    "south": 35.679,
    "east": 140.0263,
    "north": 35.6792
  },
  "dataset": "jp-admin-n03-2026",
  "map": "unit-inv-10000"
}
```

`area`はWGS84経緯度を使って、取得するピクセル中心の範囲を指定する。`west`、`south`、`east`、`north`はピクセルの外周境界を表す値ではない。

## Input: 基準点とセル数

```json
{
  "base": {
    "lon": 140.027,
    "lat": 35.68
  },
  "size": {
    "width": 3,
    "height": 2
  },
  "anchor": "center",
  "dataset": "jp-admin-n03-2026",
  "map": "unit-inv-10000"
}
```

- `size.width`は列数、`size.height`は行数を表す。
- `anchor`は、矩形のどの位置に`base`を置くかを指定する。
- `anchor`を省略した場合は`center`とする。
- `area`と、`base`および`size`による指定は同時に使用しない。
- `map`には、対象データセットのAPI仕様にある`maps[].id`を指定する。省略した場合は、利用可能な地図のうち最も高い解像度のものを選択する。

## Anchor

|  | 西 | 中央 | 東 |
| --- | --- | --- | --- |
| 北 | `northwest` | `north` | `northeast` |
| 中央 | `west` | `center` | `east` |
| 南 | `southwest` | `south` | `southeast` |

左は西、右は東、上は北、下は南に対応する。

## 座標規則

Galuchatでは、各ピクセルの中心が解像度単位の経緯度グリッド上にある。ピクセルの外周境界は経緯度グリッド上にはない。

経緯度は、選択した地図の解像度を使って最寄りのピクセル中心インデックスへ変換する。

```text
x = round(lon / resolution.lon)
y = round(lat / resolution.lat)
```

`area`による指定は、変換後のピクセル中心インデックスについて次の半開区間を表す。

```text
west <= x < east
south <= y < north
```

したがって、東端と北端の座標に対応するピクセルは結果に含まれない。

基準点指定では、`base`を最寄りのピクセル中心インデックスへ変換してから、`anchor`と`size`により同じ半開区間を決定する。横方向は`west`、`center`、`east`、縦方向は`south`、`center`、`north`の規則を組み合わせる。

```text
west:   left   = base.x
center: left   = base.x - floor(width / 2)
east:   left   = base.x - width

south:  bottom = base.y
center: bottom = base.y - floor(height / 2)
north:  bottom = base.y - height
```

## Output

```json
{
  "dataset": "jp-admin-n03-2026",
  "map": "unit-inv-10000",
  "resolution": {
    "lon": 0.0001,
    "lat": 0.0001
  },
  "area": {
    "west": 140.0260,
    "south": 35.679,
    "east": 140.0263,
    "north": 35.6792
  },
  "width": 3,
  "height": 2,
  "codes": [
    [12204, 12204, 0],
    [12204, 12216, 12216]
  ]
}
```

- `area`は実際に取得したピクセル中心インデックスの半開範囲を経緯度で表す。ピクセルの外周境界ではない。
- `resolution`は選択した地図のピクセル中心間隔を度単位で表す。
- `codes[y][x]`は地図コードを表す符号なし整数とする。
- `codes`は左上から始まり、列は西から東、行は北から南へ進む。
- `codes[0]`は`area.north - resolution.lat`の中心緯度に対応し、最後の行は`area.south`の中心緯度に対応する。
- `codes`の行数は`height`、各行の要素数は`width`と一致する。
- `0`は地図コードが割り当てられていないセルを表す。

## Errors

`invalid_argument`, `dataset_not_found`, `map_not_found`, `limit_exceeded`, `internal_error`
