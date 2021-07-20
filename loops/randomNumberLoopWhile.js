function generateNumbers(max) {
  return parseInt(Math.random() * max);
}

let arr = [];

while (arr.length < 5) {
  let randomNumber = generateNumbers(10);
  if (arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber);
  }
}
console.log(arr.length);
console.log(arr);
