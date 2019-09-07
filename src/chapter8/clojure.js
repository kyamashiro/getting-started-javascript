// 内部状態とメソッドを持つクロージャ
function person(name, age) {
  const _name = name;
  let _age = age;

  return {
    getName: () => {
      return _name;
    },
    getAge: () => {
      return _age;
    },
    setAge: (x) => {
      _age = x;
    },
  };
}

const tom = person('Tom', 18);
console.log(tom.getName());
console.log(tom.getAge());
tom.setAge(10);
console.log(tom.getAge());
