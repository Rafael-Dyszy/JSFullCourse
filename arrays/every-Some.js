const arr = [1, , 5, 10, 'string', true];

// In every all elements need to be true!!
let onlyNumbers = arr.every((el) => {
  console.log(el);
  return typeof el === 'number';
});
console.log('method every ' + onlyNumbers);

//  in some one of the elements need to be true
let someNumbers = arr.some((el) => {
  return typeof el === 'number';
});
console.log('method some ' + someNumbers);
