function test() {
  console.log('function expression test');
  return 'fn expression';
}

// arrow functions don`t hosting
const arrowTest = () => {
  console.log('return test arrow');
  return {
    foo: 'bar',
  };
};

console.log(arrowTest());
