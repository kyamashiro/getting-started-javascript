/* eslint-disable require-jsdoc */

function diamond(canvas, n, x, y, r, color) {
  canvas.strokeStyle = color;
  canvas.beginPath();
  for (let i=0; i<n; i++) {
    const t = i*2*Math.PI/n;
    for (let j=i+1; j<n; j++) {
      const s = j*2*Math.PI/n;
      canvas.moveTo(x+r*Math.cos(t), y+r*Math.sin(t));
      canvas.lineTo(x+r*Math.cos(s), y+r*Math.sin(s));
    }
  }
  canvas.stroke();
}

window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  diamond(ctx, 6, 170, 170, 150, 'darkblue');
  diamond(ctx, 12, 490, 170, 150, 'darkblue');
  diamond(ctx, 18, 810, 170, 150, 'darkblue');
};
