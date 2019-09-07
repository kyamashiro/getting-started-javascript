const Module = {};

(function(_Module) {
  let name = 'NoName';

  function getName() {
    return name;
  }

  _Module.showName = function() {
    console.log(getName());
  };

  _Module.setName = function(x) {
    name = x;
  };
})(Module);

Module.setName('tom');
Module.showName();
