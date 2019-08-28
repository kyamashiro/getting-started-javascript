/* eslint-disable require-jsdoc */
// 二分探索 計算量はO(log2n)
function binarySearch(x, a) {
  // 配列の要素数
  const n = a.length;
  let left = 0;
  // 添字は0から始まるので-1する
  let right = n-1;

  while (left < right) {
    // 配列の中央の要素
    const middle = Math.floor((left+right)/2);
    console.log('left:'+left +' middle:'+middle+' right:'+right);
    // 探索する数が左右どちらにあるのか絞り込んでいく
    if (x <= a[middle]) {
      // 探索する数よりも中央地が大きい場合､右端が中央になる
      right = middle;
    } else {
      // 探索する数よりも中央地が小さい場合､左端が中央+1になる
      left = middle+1;
    }

    console.log('left:'+left +' middle:'+middle+' right:'+right);
    console.log(`x:${x} <= a[middle]:${a[middle]}`);
    console.log(`x:${x} === right:${a[right]}`);
  }

  if (x === a[right]) {
    return right;
  }

  return null;
}

// 中央が35
const a = [2, 4, 7, 12, 15, 21, 34, 35, 46, 57, 70, 82, 86, 92, 99];
// [2, 4, 7, 12, 15, 21, 34, 35, 46, 57, 70, 82, 86, 92, 99] middleは35
// [2, 4, 7, 12, 15, 21, 34] middleは12
// [15, 21, 34]
console.log(binarySearch(92, a));
