// powはMath.powをカリー化したものらしい
// Math.pow(base, exponent) = pow(exponent)(base)
const pow = (exponent) => (base) => Math.pow(base, exponent);

// 二乗
const square = pow(2);
// 平方根
const sqrt = pow(0.5);
// 立方根
const cubicroot = pow(1 / 3);

console.log(square(2));
console.log(sqrt(2));
console.log(cubicroot(8));
