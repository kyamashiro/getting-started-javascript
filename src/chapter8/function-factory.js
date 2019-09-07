// x倍する関数を生成する関数
function makeMultiplier(x) {
  return (y) => {
    return x * y;
  };
}

const multi2 = makeMultiplier(2);
const multi10 = makeMultiplier(10);
console.log(multi2(3));
console.log(multi10(6));
