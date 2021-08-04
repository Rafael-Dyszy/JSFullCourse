(function () {
  const name = 'Dyszy';

  if (name) {
    // created a div and add a class top-bar
    const topBarElement = document.createElement('div');
    topBarElement.className = 'top-bar';
    topBarElement.innerHTML = `<p>Hello, ${name}</p>`;

    // select the element base
    const elementBase = document.querySelector('.hero');
    //put insertBefore(element, and before firstElement in base scope)
    elementBase.insertBefore(topBarElement, elementBase.firstElementChild);
  }
})();
