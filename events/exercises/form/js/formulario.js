(function () {
  'use strict';
  const inputText = document.getElementById('txtTitulo');
  const textArea = document.getElementById('txtDescricao');
  const feedBackMessage = document.getElementById('feedbackMessage');

  function showErrorMessage(msg, cb) {
    feedBackMessage.firstChild.textContent = msg;
    feedBackMessage.classList.add('show');

    function hideErrorMessage() {
      feedBackMessage.classList.remove('show');
      feedBackMessage.lastElementChild.removeEventListener(
        'click',
        hideErrorMessage
      );
      if (typeof cb === 'function') {
        cb();
      }
    }
    feedBackMessage.lastElementChild.addEventListener(
      'click',
      hideErrorMessage
    );
  }

  function submitForm(e) {
    if (!inputText.value || !textArea.value) {
      showErrorMessage('Write all Inputs', function () {
        inputText.focus();
      });
      e.preventDefault();
    }
  }

  const btnSubmit = document.querySelector('.formCadastro');
  btnSubmit.addEventListener('submit', submitForm);

  const txtDescricao = document.getElementById('txtDescricao');
  const spanCount = document.getElementsByTagName('span')[0];
  let maxLetters = txtDescricao.maxLength;
  spanCount.textContent = maxLetters;
  txtDescricao.addEventListener('input', function (e) {
    let letterTyped = this.value.length;
    let numberCharacter = parseInt(maxLetters) - parseInt(letterTyped);
    spanCount.textContent = numberCharacter;
  });

  const btn = document.getElementById('btn');
  const btnCheckbox = document.getElementById('chkAceito');

  btn.disabled = true;
  btnCheckbox.addEventListener('change', (e) => {
    btn.disabled = !btnCheckbox.checked;
  });
})();
