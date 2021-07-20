function generateNumbers(max) {
  return parseInt(Math.random() * max);
}

let arr = [];
let arrNumbers = [8, 5, 3, 0, 7];
let numbersRight = [];

while (arr.length < 5) {
  let randomNumber = generateNumbers(10);
  if (arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber);
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arrNumbers.length; j++) {
    if (arr[i] == arrNumbers[j]) {
      numbersRight.push(arr[i]);
    }
  }
}

if (numbersRight.length == 3) {
  console.log(`you win`);
} else {
  console.log(`You lost`);
}

console.log(arr);
console.log(arrNumbers);
console.log(
  `Number right are ${numbersRight} and the total ${numbersRight.length}`
);
