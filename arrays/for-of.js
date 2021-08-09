const arr = [1, 2, 3];
const obj = {
  name: 'Catarine',
  age: 68,
  email: 'cata@rine.com',
};

for (let prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}

for (let n of arr) {
  console.log(n);
}
