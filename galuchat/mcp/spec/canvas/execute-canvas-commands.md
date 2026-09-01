# `galuchat_execute_canvas_commands`

## 目的

共有Canvasの`CanvasRenderingContext2D`に対する操作を、WebMCP経由で記述順に実行する。

複数の操作を一度に渡せるようにして、ツール呼び出し回数を抑えながら、背景、図形、文字、凡例などをAIが直接編集できるようにする。

## Input

```json
{
  "canvas": "main",
  "commands": [
    {
      "op": "set",
      "name": "fillStyle",
      "value": "#ffffff"
    },
    {
      "op": "fillRect",
      "args": [0, 0, 1200, 630]
    },
    {
      "op": "set",
      "name": "font",
      "value": "bold 32px sans-serif"
    },
    {
      "op": "set",
      "name": "fillStyle",
      "value": "#222222"
    },
    {
      "op": "fillText",
      "args": ["Tokyo", 40, 56]
    }
  ]
}
```

## Command

contextのプロパティを設定する場合は`op: "set"`を使う。

```json
{
  "op": "set",
  "name": "globalAlpha",
  "value": 0.7
}
```

contextのメソッドを呼び出す場合は、メソッド名を`op`、引数を`args`に指定する。引数のないメソッドでは`args`を省略できる。

```json
{
  "op": "strokeRect",
  "args": [20, 20, 300, 180]
}
```

`args`と`value`はJSONとして表現できる値に限る。`Path2D`などのJavaScriptオブジェクトを引数に取る形式は初期版では扱わない。

初期版で使用できるプロパティは次の通り。

```text
fillStyle, strokeStyle
globalAlpha, globalCompositeOperation
lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset
font, textAlign, textBaseline, direction
shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY
imageSmoothingEnabled, imageSmoothingQuality, filter
```

`fillStyle`と`strokeStyle`にはCSS色文字列を指定する。初期版では`CanvasGradient`と`CanvasPattern`を扱わない。

初期版で使用できるメソッドは次の通り。

```text
save, restore
clearRect, fillRect, strokeRect
beginPath, closePath, moveTo, lineTo, rect, roundRect
arc, arcTo, ellipse
bezierCurveTo, quadraticCurveTo
fill, stroke, clip
translate, rotate, scale, transform, setTransform, resetTransform
setLineDash
fillText, strokeText
```

## Canvas間のコピー

別の共有Canvasを画像ソースとして描画する場合は、WebMCP用の`drawCanvas`コマンドを使う。

```json
{
  "op": "drawCanvas",
  "source": "map-layer",
  "args": [100, 50]
}
```

`args`は`CanvasRenderingContext2D.drawImage()`のうち、画像ソースを除いた次のいずれかとする。

```text
[dx, dy]
[dx, dy, dWidth, dHeight]
[sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight]
```

`source`に外部URLやdata URLは指定できない。地図画像の取得とROPは、別途定義する地図描画APIがCanvasへ直接書き込む。

## 実行規則

- コマンドは配列の先頭から順に実行する。
- 変更はコマンドごとに通常UIへ反映する。
- 不明なプロパティ、メソッド、引数形式は`canvas_command_failed`とする。
- コマンドに失敗した場合はそこで停止する。すでに実行したコマンドの結果は取り消さない。
- エラーの`details.command_index`には、失敗したコマンドの0始まりの位置を設定する。

## Output

```json
{
  "ok": true,
  "canvas": "main",
  "executed": 5
}
```

## Errors

`invalid_argument`, `canvas_not_found`, `canvas_command_failed`, `limit_exceeded`, `internal_error`
