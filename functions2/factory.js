function createDog(name) {
  let position = 0;
  return {
    name,
    bark() {
      console.log(this.name, 'bark');
    },
    walk(distance) {
      position += distance;
      console.log(this.name, ' walk', distance, 'meters');
    },
    positionNow() {
      return position;
    },
  };
}

const dog = createDog('Rex');
dog.bark();
dog.walk(10);
dog.walk(10);
dog.walk(-10);
console.log(dog.positionNow());

const caturino = createDog('caturino');
caturino.bark();
caturino.walk(5);
caturino.walk(-2);
console.log(caturino.positionNow());
