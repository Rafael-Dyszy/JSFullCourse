function Task(name) {
  'use strict';
  if (this === undefined) return;
  this.name = name;
  this.createdAt = new Date();
  this.updatedAt = null;
  this.changeName = function (nameUpdated) {
    if (nameUpdated) {
      this.name = nameUpdated;
      this.updatedAt = new Date();
    }
  };
}

const task1 = new Task('Rafal');
const task2 = new Task('name two');
console.log(task1);
console.log(task2);

task1.changeName('new rafal');
task2.changeName('name two');
console.log(task1);
console.log(task2);
