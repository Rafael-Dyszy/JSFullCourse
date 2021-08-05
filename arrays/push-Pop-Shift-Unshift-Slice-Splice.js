// push() change the array and add new elements
let arr = [1, 3, 5, 6, 7, 8];
arr.push(10, 20, 30, 'string');
console.log(arr);

// unshift() same to the push but add in the begin of array
arr.unshift(0, 5, 4, 6);
console.log(arr);

// pop() get the last item of array and change the array
let lastItem = arr.pop();
console.log(lastItem);
console.log(arr);
// or not change the array only take the item
let lastItem1 = arr[arr.length - 1];
console.log(lastItem1);

// shift() same to pop but get the first element
let firstItem = arr.shift();
console.log(firstItem);
console.log(arr);

// slice() create a new array with the indexes for parameters
let arrSlice = arr.slice(2, 4);
console.log(arrSlice);

// splice() change the root array, and return without itens removed
let arr5 = arr.splice(3, 4, 'hello');
console.log(arr5);
console.log(arr);
