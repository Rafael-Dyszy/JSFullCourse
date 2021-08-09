'use strict';

function sum() {
  let total = 0;
  for (let n of arguments) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

function average() {
  return sum(...arguments) / arguments.length;
}

console.log(average(1, 2, 3, 4, 5));
