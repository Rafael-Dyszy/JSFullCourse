'use strict';

let emailText = document.getElementById('txtEmail');
let msgNewsletter = document.getElementById('newsletterFeedback');

function getEmailMsg() {
  let email = emailText.value;
  msgNewsletter.innerHTML = `The email ${email} has been registered!`;
}
