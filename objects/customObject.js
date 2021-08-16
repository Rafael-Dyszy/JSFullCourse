function changeName(name) {
  this.name = name;
  this.updatedAt = new Date();
}

const task = {
  name: 'Rafal',
  createdAt: new Date(),
  updatedAt: null,
  completed: false,
  //   changeName: changeName
  changeName,
};

const task1 = {
  name: 'Rafal 2',
  createdAt: new Date(),
  updatedAt: null,
  completed: false,
  changeName,
};

task.changeName('Rafael');
task1.changeName('Rafal 2');
console.log(task);
console.log(task1);
