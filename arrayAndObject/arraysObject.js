let arrays = 'data set for store data in a memory space!';
console.log(arrays);

// const arr = new Array();
const arr = [];
arr.push('Array', 'Array2', [10, 20, 30]);
arr.push(true, 10);

// console.log(arr);
// console.log(arr[2][0]);

for (let i = 0; i < arr.length; i++) {
  //   console.log(`${i}: ${arr[i]}`);
}

//  objects
// const people = new Object();
const person = {
  name: 'Catarine',
  age: 35,
  email: 'ca@ca.com',
};

let prop = 'name';
// loop for in
for (let prop in person) {
  console.log(prop);
  console.log(person[prop]);
}
// console.log(person[prop]);
console.log(person.name);
