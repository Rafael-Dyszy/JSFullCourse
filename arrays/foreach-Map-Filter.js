// filter()
const arrFilter = [1, 2, 5, 'string', true];

// arrFilter.filter(function (el, i, arr) {
//   console.log(el);
//   console.log(i);
//   console.log(arr);
// });

const arr1 = arrFilter.filter((el) => {
  return typeof el === 'number';
});
// console.log(arr1);

// forEach() is a loop
const arrForEach = [1, 2, 0, 5, 4, 8, 7, 6, 2];
arrForEach.forEach((el, i, _arr) => {
  //   console.log(i, el);
});

//  method map()
const arrMap = [1, 2, 5, 5];
const arrMap1 = arrMap.map((el, i, _arr) => {
  return el * el;
});
console.log(arrMap1);
