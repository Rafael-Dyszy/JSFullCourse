(function () {
  'use strict';
  let dataToSave = document.querySelector('.hero-content h1 span').innerText;

  const dateNow = new Date();

  const dateSave = getDateToSave(dataToSave);

  const leftTime = dateSave.getTime() - dateNow.getTime();
  console.log(leftTime);

  function getDateToSave(str) {
    const [date, hour] = str.split(' ');
    const [day, month, year] = date.split('/');
    const [hours, minutes] = hour.split('H');
    return new Date(year, month, day, hours, minutes);
  }
})();
