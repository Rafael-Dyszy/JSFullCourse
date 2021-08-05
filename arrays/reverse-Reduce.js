// reverse() reverse the array and chenge the root array
let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// reduce() do the interation and return one value, the parameters are (previous, current, index, array) and in the final of function you pass the previous
let returnValue = arr.reduce((acc, curr, index, _arr) => {
  //   console.log(acc);
  //   console.log(curr);
  return acc + curr;
}, 0);
// console.log(returnValue);

const names = ['Cata', 'Rafa', 'Caty', 'Rafal'];
let namesCount = names.reduce((names, currentName) => {
  let firstLetter = currentName[0];
  if (names[firstLetter]) {
    names[firstLetter]++;
  } else {
    names[firstLetter] = 1;
  }
  return names;
}, {});
// console.log(namesCount);

const numbers = [1, 2, 3, 3, 4, 5, 4, 6, 9, 8, 6];
const numbersNoRepeated = numbers.reduce((numbers, currentNumber) => {
  if (numbers.indexOf(currentNumber) < 0) {
    numbers.push(currentNumber);
  }
  return numbers;
}, []);
// console.log(numbersNoRepeated);

const numbersSingle = [...new Set(numbers)];
console.log(numbersSingle);
