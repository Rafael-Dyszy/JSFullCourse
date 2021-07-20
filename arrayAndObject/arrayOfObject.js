const people = [
  {
    name: 'Catarine',
    age: 10,
  },
  {
    name: 'Rafal',
    age: 40,
  },
  {
    name: 'Mindu',
    age: 30,
  },
  {
    name: 'Napa',
    age: 18,
  },
];

for (let i = 0; i < people.length; i++) {
  console.log(`${i} = Name: ${people[i].name}, idade: ${people[i].age}.`);
}

console.log(people);
