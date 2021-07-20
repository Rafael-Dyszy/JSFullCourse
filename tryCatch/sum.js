function sum(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw Error('Only numbers');
  }
  return n1 + n2;
}

let numbers1 = '';
try {
  numbers1 = sum(3, '4');
} catch (error) {
  console.log('accept only numbers');
  console.log(error.message);
}
console.log(numbers1);
