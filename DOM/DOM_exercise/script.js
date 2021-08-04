(function () {
  const name = prompt('What is your name?');
  const element = document.querySelector('.top-bar p');
  //   with textContent only change the text
  //   document.querySelector('.top-bar p').textContent += name;

  // with innerHtml you can put tags html
  if (name) {
    element.innerHTML += '<b>' + name + '</b>';
  } else {
    //   parentElement acess the father element
    element.parentElement.style.display += 'none';
  }
})();
