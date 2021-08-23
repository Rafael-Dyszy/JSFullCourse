// test();
function test() {
  console.log('function expression test', this);

  (function () {
    console.log(this);
  });
  return 'fn expression';
}

// arrow functions don`t hosting
const arrowTest = (str) => {
  console.log('return test arrow ', str);
  return {
    foo: 'bar',
  };
};

// console.log(arrowTest('parameter'));
const cat = {
  name: 'cat',
  miar() {
    console.log(this.name, 'miau');
  },
};

const dog = {
  name: 'Thor',
  bark() {
    console.log(this.name, 'au au');
  },
  walk() {
    console.log(this.name);
    this.bark();
  },
};
dog.bark();
dog.walk();
cat.miar();
