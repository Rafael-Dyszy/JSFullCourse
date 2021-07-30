`use strict`;

function average() {
  let result = 0;
  let plus = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      throw Error('only Numbers');
    }
    plus += arguments[i];
  }
  result = plus / arguments.length;
  return result;
}

const averageResult = average(2, 2, 4, 5, 3, 2, 1, 2);
console.log(averageResult);
