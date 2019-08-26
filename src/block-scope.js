// constは再代入不可で初期化必須
const a = 1;
let b;
b=2;
b=3;

if (true) {
  const x = 10;
  console.log(a);
  console.log(x);
}


console.log(a);
console.log(b);
// console.log(x); let, constはブロックスコープのためエラーになる
