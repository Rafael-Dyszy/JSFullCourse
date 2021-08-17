let number = 1234567.89;

// toFixed define numbers after decimal
console.log(number.toFixed(4));
console.log(typeof number.toFixed(4));

// precision get the 7.89 and return 8 for the number be 7 numbers
console.log(number.toPrecision(7));

console.log(number.toExponential(5));

// to String in number! you can represent the binary with 2 and hexadecimal with 16 numbers
number = 15;
// binary
console.log(number.toString(2));
console.log((1).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));
console.log((5).toString(2));

// hexadecimal
console.log((14).toString(16));
console.log((15).toString(16));
console.log((16).toString(16));

// toLocaleString - format a number and put currency
number = 123456.23;
console.log(number.toLocaleString());
console.log(
  number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);
console.log(
  number.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })
);

console.log(Number.MAX_VALUE, Number.MIN_VALUE);

// isNaN
let numberIsNaN = '123.45';
console.log(isNaN(numberIsNaN));
numberIsNaN = '123.45a';
console.log(isNaN(numberIsNaN), parseFloat(numberIsNaN));
numberIsNaN = 'aa123.45';
console.log(isNaN(numberIsNaN), parseFloat(numberIsNaN));
