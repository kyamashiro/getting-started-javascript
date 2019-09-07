function say(greetings, honorifics) {
  console.log(greetings + ' ' + honorifics + this.name);
}

const tom = {name: 'Tom'};
say.apply(tom, ['Hello!', 'Mr.']); // Hello!Mr.Tom
say.call(tom, 'Hello!', 'Mr.'); // Hello!Mr.Tom

// bindメソッド

const sayToTom = say.bind(tom);
sayToTom('Hey', 'Mr.');

// 関数にプロパティを追加する
say.p = 'property';
console.log(say.p);
