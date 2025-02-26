// 'use strict';

console.log('GLOBAL_CONTEXT:', this); // window

function foo() {
  console.log('FUNCTION_CONTEXT:', this); // window in non-strict mode, undefined in strict mode
}

foo();

const obj = {
  name: 'obj',
  foo: function () {
    console.log('OBJECT_METHOD_CONTEXT:', this); // obj
  },
  fooArrow: () => {
    console.log('OBJECT_ARROW_METHOD_CONTEXT:', this); // window
  }
}

obj.foo();
obj.fooArrow();
