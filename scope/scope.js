let g = 'let and const are a block scope';
var t = 'var is function scope';

function shown() {
  g = 'function scope';
  console.log(t);
  console.log(g);
}
console.log(g);
shown();
