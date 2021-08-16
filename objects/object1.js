const obj = new Object();
obj.name = 'Rafal';
obj.age = 36;
obj['email'] = 'obj@obj.com';
// console.log(obj);

const obj2 = {
  name: 'Rafal Dyszy',
  age: 36,
};
// console.log(obj2);

const obString = new String('new string');
// console.log(obString);
// console.log(obString.length);

const objNumber = new Number(30);
// console.log(objNumber);

const objBoolean = new Boolean('It`s true because has a value! obviously');
// console.log(objBoolean);

// Date
const date = Date();
console.log('This is a string!!____', date);

const objectDate = new Date();
console.log('this is a object!!____', objectDate);
console.log(objectDate.getFullYear());
console.log(objectDate.getUTCMonth());
console.log(objectDate.getMinutes());
console.log(objectDate.getUTCDate());
