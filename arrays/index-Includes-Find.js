let arr = [4, 5, 10, 20, 35, 4, 5];

// indexOf() show the index of the first element that you want to search
// lastIndexOf show the index of the last element that you want to search
// when don`t have a true search will return -1
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));

// includes() show if has a true search
console.log(arr.includes(35));

// find() show the first element that has a true condition or undefined
console.log(
  arr.find((el) => {
    return el > 20;
  })
);

// findIndex() show the index of a condition true or -1
console.log(
  arr.findIndex((el) => {
    return el > 10;
  })
);
