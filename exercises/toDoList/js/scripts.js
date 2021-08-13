(function () {
  'use strict';

  let storageProject = [];

  const storageTodo = window.localStorage;

  const inputToDo = document.getElementById('listAdd');
  const submitForm = document.getElementById('formList').lastElementChild;

  function sendDataTOStorage() {
    console.log(inputToDo.value);
    if (inputToDo.value) {
      storageProject = inputToDo.value;
      console.log(storageProject);
      //   storageProject.push(storageProject);
      storageTodo.setItem('myStorage', storageProject);
    } else {
      alert('Put your Items');
    }
  }

  submitForm.addEventListener('click', sendDataTOStorage);

  //   console.log(submitForm);

  inputToDo.addEventListener('input', (e) => {
    console.log(e.target.value);
  });
})();
