const a = [5, 4, 3];
a.forEach((val) => console.log(val));

const iter = a[Symbol.iterator]();
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next());
console.log(iter.next());

// for/of文 Symbol.iteratorメソッドをもち、戻り値としてイテレータを返す場合、反復処理が可能
for (const v of a) console.log(v);
for (const v of 'ABC') console.log(v);
