const myApp = {};

myApp.person = function person(name, age) {
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
};

tom = myApp.person('tom', 18);
console.log(tom.getName());

