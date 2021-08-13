(function () {
  'use strict';

  const inputForm = document.getElementById('todo-add');
  const inputText = document.getElementById('item-input');
  const ul = document.getElementById('todo-list');
  let lis = ul.getElementsByTagName('li');

  const arrTasks = [
    {
      items: 'item 1',
      completed: false,
      date: Date.now(),
    },
    {
      items: 'item 2',
      completed: false,
      date: Date.now(),
    },
  ];

  function generateLi(obj) {
    const li = document.createElement('li');
    const btnCompleted = document.createElement('button');
    const p = document.createElement('p');
    const i = document.createElement('i');
    const btnEdit = document.createElement('i');
    const btnRemove = document.createElement('i');

    li.className = 'todo-item';
    btnCompleted.className = 'button-check';
    btnCompleted.setAttribute('data-action', 'btnCompleted');
    p.className = 'task-name';
    i.className = 'fas fas-check displayNone';
    btnEdit.className = 'fas fa-edit';
    btnEdit.setAttribute('data-action', 'btnEdit');
    btnRemove.className = 'fas fa-trash-alt';
    btnRemove.setAttribute('data-action', 'btnRemove');
    p.textContent = obj.items;

    const containerEdit = document.createElement('div');
    containerEdit.className = 'editContainer';
    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'editInput';
    const containerEditBtn = document.createElement('button');
    containerEditBtn.className = 'editButton';
    containerEditBtn.textContent = 'Edit';
    const containerCancelBtn = document.createElement('button');
    containerCancelBtn.className = 'cancelButton';
    containerCancelBtn.textContent = 'Cancel';
    containerEdit.appendChild(inputEdit);
    containerEdit.appendChild(containerEditBtn);
    containerEdit.appendChild(containerCancelBtn);

    li.appendChild(containerEdit);

    li.appendChild(btnCompleted).appendChild(i);
    li.appendChild(p);
    li.appendChild(btnEdit);
    li.appendChild(btnRemove);
    return li;
  }

  function targetBtnUl(e) {
    const dataAction = e.target.getAttribute('data-action');
    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi.nodeName !== 'LI') {
      currentLi = currentLi.parentElement;
    }
    const currentLiIndex = [...lis].indexOf(currentLi);

    const actions = {
      btnEdit: function () {
        console.log('edit btn in object');
      },
      btnRemove: function () {
        arrTasks.splice(currentLiIndex, 1);
        // currentLi.remove();
        // currentLi.parentElement.removeChild(currentLi);
        // renderTasks();
      },
    };
    if (actions[dataAction]) {
      actions[dataAction]();
    }
  }

  ul.addEventListener('click', targetBtnUl);

  function renderTasks() {
    ul.innerHTML = '';
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLi(taskObj));
    });
  }

  function addTask(task) {
    arrTasks.push({
      items: task,
      completed: false,
      date: Date.now(),
    });
  }

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(inputText.value);
    renderTasks();
    inputText.value = '';
    inputText.focus();
  });

  renderTasks();
})();
