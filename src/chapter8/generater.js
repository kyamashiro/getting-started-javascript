function* gen() {
  yield 1;
  yield 2;
  yield 13;
}

const iter = gen();
console.log(iter.next()); // yeild 1 で一時停止
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
