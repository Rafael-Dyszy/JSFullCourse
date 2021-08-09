function sum() {
  const numbers = [];
  Array.prototype.forEach.call(arguments, function (argument) {
    numbers.push(argument);
  });
  return numbers.reduce(function (number, curr) {
    return number + curr;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));
function average() {
  const averageNumbers = sum.apply(null, arguments);
  return averageNumbers / arguments.length;
}

console.log(average(1, 2, 3, 4, 5));
