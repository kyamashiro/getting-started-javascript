console.log('Hello'+' world!');
console.log(1+{}); // 1[object Object] オブジェクトが文字列に変換される

// 文字列はオブジェクトではなくプロパティも持たないが、ラッパーオブジェクトによって文字列操作が可能になる
const str = 'abc';
console.log(str.length); // 3
console.log(str.charAt(2)); // c
