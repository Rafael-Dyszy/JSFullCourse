(function () {
  'use strict';

  const inputForm = document.getElementById('todo-add');
  const inputText = document.getElementById('item-input');
  const ul = document.getElementById('todo-list');
  let lis = ul.getElementsByTagName('li');

  const arrTasks = getSavedData();

  function getSavedData() {
    let getData = localStorage.getItem('tasks');
    getData = JSON.parse(getData);
    return getData && getData.length
      ? getData
      : [
          {
            items: 'item 1',
            completed: false,
            dateItem: Date.now(),
          },
          {
            items: 'item 2',
            completed: false,
            dateItem: Date.now(),
          },
        ];
  }

  function setNewData() {
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
  }
  setNewData();

  function generateLi(obj) {
    const containerEdit = document.createElement('div');
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
    i.setAttribute('data-action', 'btnCompleted');
    i.className = `fas fa-check ${obj.completed ? '' : 'displayNone'}`;
    btnEdit.className = 'fas fa-edit';
    btnEdit.setAttribute('data-action', 'btnEdit');
    btnRemove.className = 'fas fa-trash-alt';
    btnRemove.setAttribute('data-action', 'btnRemove');
    p.textContent = obj.items;

    containerEdit.className = 'editContainer';
    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.value = obj.items;
    inputEdit.className = 'editInput';
    const containerEditBtn = document.createElement('button');
    containerEditBtn.className = 'editButton';
    containerEditBtn.textContent = 'Edit';
    containerEditBtn.setAttribute('data-action', 'containerEditBtn');
    const containerCancelBtn = document.createElement('button');
    containerCancelBtn.className = 'cancelButton';
    containerCancelBtn.textContent = 'Cancel';
    containerCancelBtn.setAttribute('data-action', 'containerCancelBtn');
    containerEdit.appendChild(inputEdit);
    containerEdit.appendChild(containerEditBtn);
    containerEdit.appendChild(containerCancelBtn);

    li.appendChild(btnCompleted).appendChild(i);
    li.appendChild(p);
    li.appendChild(btnEdit);
    li.appendChild(btnRemove);
    li.appendChild(containerEdit);
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
        const editContainer = currentLi.querySelector('.editContainer');
        [
          [...ul.querySelectorAll('.editContainer')].forEach((el) => {
            el.removeAttribute('style');
          }),
        ];
        editContainer.style.display = 'flex';
      },
      btnRemove: function () {
        arrTasks.splice(currentLiIndex, 1);
        // currentLi.remove();
        // currentLi.parentElement.removeChild(currentLi);
        renderTasks();
        setNewData();
      },
      containerEditBtn: function () {
        const val = currentLi.querySelector('.editInput').value;

        arrTasks[currentLiIndex].items = val;
        renderTasks();
        setNewData();
      },
      containerCancelBtn: function () {
        currentLi.querySelector('.editContainer').removeAttribute('style');
        document.querySelector('.editInput').value =
          arrTasks[currentLiIndex].items;
      },
      btnCompleted: function () {
        arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex]
          .completed;

        renderTasks();
        setNewData();
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
    setNewData();
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
