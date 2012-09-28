
# zelig

  Classic convolution filters on top of component/convolve

## Available filters

### Zelig#blur()

### Zelig#edgeDetect()

### Zelig#emboss()

### Zelig#laplace()

### Zelig#gaussianBlur()

### Zelig#motionBlur()

### Zelig#sharpen()

## Example

```js
var zelig = require('zelig');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var img = new Image;
img.onload = draw;
img.src = 'maru.jpg';

function draw() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  zelig
    .emboss()
    .canvas(canvas);
}
```

