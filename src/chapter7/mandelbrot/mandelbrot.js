/* eslint-disable require-jsdoc */
window.onload = () => {
  const canvas = document.getElementById('canvas');
  const width = canvas.width;
  const height = canvas.height;

  document.getElementById('button').onclick = draw;

  canvas.onclick = function(event) {
    let xc = parseFloat(document.getElementById('xcenter').value);
    let yc = parseFloat(document.getElementById('ycenter').value);
    const ix = event.offsetX;
    const iy = event.offsetY;
    const mag = parseFloat(document.getElementById('magnification').value);
    xc += (2 * ix / width -1) / mag;
    yc += (2 * iy - height) / mag / width;
    draw(xc, yc);
  };
};

function draw() {
  const xc = parseFloat(document.getElementById('xcenter').value);
  const yc = parseFloat(document.getElementById('ycenter').value);
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // 倍率
  const mag = document.getElementById('magnification').value;
  // 繰り返し数
  const maxit = document.getElementById('maxit').value;
  displayCenter(xc, yc);
  mandelbrot(ctx, xc, yc, mag, maxit);
}

function displayCenter(xc, yc) {
  document.getElementById('xc').innerHTML = xc;
  document.getElementById('yc').innerHTML = yc;
}

function mandelbrot(canvas, xc, yc, mag, maxit) {
  const w = canvas.canvas.width;
  const h = canvas.canvas.height;
  const xmin = xc - 1 / mag;
  const xmax = xc + 1 / mag;
  const ymin = yc - (xmax - xmin) * h / w / 2;
  const ymax = yc + (xmax - xmin) * h / w / 2;
  const dx = (xmax - xmin) / w;
  const dy = (ymax - ymin) / h;
  const color =[];
  color[0] = 'black';
  let L = 255;
  const dL = 255 / maxit;

  for (let i = maxit; i > 0; i--) {
    color[i] = 'rgb(255,'+Math.floor(L)+',255)';
    L -= dL;
  }
  let count = maxit;
  for (let i = 0; i < w; i++) {
    const x = xmin + i*dx;
    for (let j=0; j<h; j++) {
      const y = ymin + j*dy;
      let a = x;
      let b = y;
      let a2 = a * a;
      let b2 = b * b;

      for (count = maxit; a2+b2 <= 4 && count; count--) {
        b = 2 * a * b + y;
        a = a2 - b2 + x;
        a2 = a * a;
        b2= b * b;
      }
      canvas.fillStyle = color[count];
      canvas.fillRect(i, j, 1, 1);
    }
  }
}
