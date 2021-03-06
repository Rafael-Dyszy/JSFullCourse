(function () {
  window.addEventListener('scroll', positionImage);

  const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')];

  function isGetingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  function getNewPosition(c) {
    const v = parseFloat(c.getAttribute('data-p-velocity')) || 0.5;
    return c.getBoundingClientRect().top * v * -1;
  }

  function positionImage() {
    dataParalaxContainer.forEach((c) => {
      let originalPositionY = getComputedStyle(c).backgroundPositionY;
      let originalPositionX = getComputedStyle(c).backgroundPositionX;
      console.log(originalPositionY, originalPositionY);
      if (isGetingOut(c)) {
        c.style.backgroundPosition = `${originalPositionX} ${getNewPosition(
          c
        )}px`;
      } else {
        c.style.backgroundPosition = `${originalPositionX} 0px`;
      }
    });
  }
  positionImage();
})();
