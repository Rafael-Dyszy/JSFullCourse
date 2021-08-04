'use strict';

let txtEmail = document.getElementById('txtEmail');

function editInput() {
  txtEmail.disabled = false;
  txtEmail.focus();
}
function disableInput() {
  txtEmail.disabled = true;
}
