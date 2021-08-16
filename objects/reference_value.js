const x = 10;
// Here I passed the value
function changeX(x) {
  x++;
  console.log('value inside function', x);
}

changeX(x);
console.log('value outside function', x);

const n = [10];
// Here I passed the reference
function changeN(n) {
  n.push(11);
  console.log(n);
}
changeN(n);
console.log(n);

// value in object
const o = { n: 20 };

function changeObj(obj) {
  obj.n++;
  console.log(obj);
}

changeObj(o);
console.log(o);
