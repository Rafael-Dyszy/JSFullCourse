function test(str, n) {
  console.log(this.name);
  console.log(str, n);
}
// call and apply = I can change the this of the function when I call the function
test.call({ name: 'Mary' }, 'string', 10);
test.apply({ name: 'Mary 2' }, ['string 2', 20]);

// with bind method I can change the this before I execute the function
const test2 = test.bind({ name: 'Joanna' }, 'string bind', 30);
test2();
