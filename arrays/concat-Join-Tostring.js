let arr = [1, 2, 5];
let arr1 = [10, 20, 50];

// toString() show the array to string
console.log(arr.toString());

// join() show the array to string too, but you can change the divisors
console.log(arr.join(' - '));

// concat() simply concat arrays and you can add more data
let arrConcat = arr.concat(arr1, 20, 'string', ['hello', 'world']);
console.log(arrConcat);

// I can create array clones with concat
let arr3 = [2, 3, 5, 9];
let arr4 = [].concat(arr3);
arr4[arr4.length] = 'new value';

console.log(arr3);
console.log(arr4);
