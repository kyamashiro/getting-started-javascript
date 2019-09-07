const square = function(x) {
  return x * x;
};
const square = (x) => x * x;
// 関数の戻り値がオブジェクトリテラルの場合は()が必要
const f = (a, b) => ({ x: a, y: b });
((x) => x * x)(3);
