const a = [1, 2, 3];
const b = [1, 2, 3];
c = a; // 参照渡し

console.log(a===b); // false
console.log(a===c); // true

/**
 * 等価演算子(==) 型変換を行う
 * 同値演算子(===) 型変換を行わない いわゆる厳密な比較を行う
*/

// すべてtrue
console.log(
    null == undefined,
    1=='1',
    '0xff'==255,
    true==1,
    true=='1',
    [2]==2
);

// すべてfalse
console.log(
    null === undefined,
    1==='1',
    '0xff'===255,
    true===1,
    true==='1',
    [2]===2
);

// if文の判定
// 0,-0,'',NaN,null,undefinedはfalse
// 0以外の数値, 空文字以外の文字列,空配列,空オブジェクトはtrueになる
if ([]) {
  console.log('check');
}

if ({}) {
  console.log('check');
}
