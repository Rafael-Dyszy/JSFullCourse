function CreateDog(name) {
  let position = 0;
  this.name = name;
  this.bark = function () {
    console.log(name, 'is barking');
  };
  this.walk = function (distance) {
    position += distance;
    console.log(name, ' walk', distance, 'meters');
    console.log(name, 'now walked ', position, 'meters');
  };
}

const thor = new CreateDog('thor');
console.log(thor);
thor.bark();
thor.walk(10);
thor.walk(5);
console.log('-------------');
const caturino = new CreateDog('caturino');
console.log(caturino);
caturino.bark();
caturino.walk(10);
caturino.walk(5);
