# `galuchat_create_map_image`

Status: Draft

## 目的

指定範囲の地図を取得し、パレット変換、写像、ROPを順に適用して、ページ内で利用できる地図画像を生成する。

```text
地図取得 -> パレット変換 -> 写像 -> ROP -> 画像
```

塗りつぶし画像と境界線画像は、同じ関数へ異なるパレットとROPを指定して生成する。

## Input

```json
{
  "image": "map-fill",
  "source": {
    "base": {
      "lon": 140.027,
      "lat": 35.68
    },
    "size": {
      "width": 200,
      "height": 150
    },
    "anchor": "center",
    "dataset": "jp-admin-n03-2026",
    "map": "unit-inv-10000"
  },
  "palette": {
    "type": "rgba",
    "default": "#d9d9d9ff",
    "colors": {
      "12204": "#ffb703ff"
    }
  },
  "mapping": {
    "type": "raw",
    "width": 800,
    "height": 600
  },
  "rop": {
    "type": "none"
  }
}
```

### `image`

生成画像をページ内で参照するための名前。同じ名前の画像が存在する場合は、正常に生成できた時点で置き換える。生成に失敗した場合は以前の画像を残す。

画像オブジェクトや画像データはWebMCP応答へ直接含めない。後続のCanvas書き込みAPIは、この名前を使って画像を参照する。

### `source`

`galuchat_get_code_map`と同じ範囲指定を使う。

- `area`による経緯度範囲指定
- `base`、`size`、`anchor`による基準点とセル数の指定
- `dataset`と`map`の選択

範囲の量子化、ピクセル中心、行の並び順は[`galuchat_get_code_map`](../information/get-code-map.md)に従う。

## Palette

パレット変換は、地図コードを後続処理で使うピクセル値へ変換する。境界ROPは、変換後のピクセル値の違いを境界として扱う。

初期版は`raw`と`rgba`を提供する。

### `raw`

```json
{
  "type": "raw"
}
```

地図コードを変換せず、そのまま写像とROPへ渡す。すべての異なる地図コード間に境界線を生成する場合に使う。

`raw`の出力は画像色ではないため、初期版では`rop.type: "boundary"`と組み合わせる。

### `rgba`

```json
{
  "type": "rgba",
  "default": "#00000000",
  "colors": {
    "12204": "#ffffffff"
  }
}
```

- `colors`は地図コードをキー、`#RRGGBB`または`#RRGGBBAA`を値とする変換表。
- `#RRGGBB`のアルファ値は`ff`とする。
- `colors`にないコードは`default`へ変換する。
- `default`を省略した場合は`#00000000`とする。

同じ色へ変換された隣接コードは、境界ROPから同じ領域として見える。これを使って境界線の対象を制御できる。

## Mapping

初期版は`raw`のみを提供する。

```json
{
  "type": "raw",
  "width": 800,
  "height": 600
}
```

- 元の矩形範囲を投影変換せず、出力画像の矩形全体へ写像する。
- 北を上、西を左とする。
- サンプリングは最近傍法とする。
- `width`と`height`は出力画像のピクセル数を表す。
- `width`と`height`を省略した場合は、取得したコードマップと同じサイズにする。

メルカトル図法などは、今後別の`type`として追加する。

## ROP

ROPは、写像後のラスタへ適用する画像処理である。初期版は`none`と`boundary`を提供する。

### `none`

```json
{
  "type": "none"
}
```

写像結果を変更せず画像にする。`palette.type: "rgba"`と組み合わせて塗りつぶし画像を生成する。

### `boundary`

```json
{
  "type": "boundary",
  "color": "#ff6600ff",
  "background": "#00000000",
  "width": 1,
  "include_zero": true
}
```

写像後の各ピクセルと隣接ピクセルの値を比較する境界カーネルを適用し、値が異なる位置を境界線画像にする。

- `color`は境界ピクセルの色。省略時は`#000000ff`。
- `background`は境界以外の色。省略時は`#00000000`。
- `width`は出力画像上の境界線幅を表す1以上の整数。省略時は`1`。
- `include_zero`が`false`の場合、値`0`との境界を生成しない。省略時は`false`。

`rgba`パレットの`#00000000`は値`0`として扱う。特定区域だけを非透過色、それ以外を透明色へ変換して外周を得る場合は、`include_zero: true`を指定する。

## 特定区域の境界線

コード`12204`の外周だけを生成する例。

```json
{
  "image": "selected-boundary",
  "source": {
    "base": { "lon": 140.027, "lat": 35.68 },
    "size": { "width": 200, "height": 150 },
    "anchor": "center",
    "dataset": "jp-admin-n03-2026",
    "map": "unit-inv-10000"
  },
  "palette": {
    "type": "rgba",
    "default": "#00000000",
    "colors": {
      "12204": "#ffffffff"
    }
  },
  "mapping": {
    "type": "raw",
    "width": 800,
    "height": 600
  },
  "rop": {
    "type": "boundary",
    "color": "#ff6600ff",
    "background": "#00000000",
    "width": 2,
    "include_zero": true
  }
}
```

複数コードを同じパレット色へ変換すると、その集合の外周だけを生成する。コードごとに異なる色へ変換すると、集合内部のコード間にも境界を生成する。

## Output

```json
{
  "ok": true,
  "image": "selected-boundary",
  "width": 800,
  "height": 600
}
```

応答に画像データやdata URLを含めない。生成した画像はページ内に保持し、Canvasへの書き込みまたは画像出力に使用する。

## Errors

`invalid_argument`, `dataset_not_found`, `dataset_not_ready`, `map_not_found`, `limit_exceeded`, `render_failed`, `internal_error`

## 次に詰める項目

- `boundary`カーネルが比較する近傍と、境界ピクセルをどちら側へ置くか。
- 任意カーネルを公開するか、名前付きROPだけを公開するか。
- 複数のROPを順番に適用できるようにするか。
- `raw`写像で縦横比を変更する場合の扱い。
- メルカトルなど、座標投影を行う写像の追加。
