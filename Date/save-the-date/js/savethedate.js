(function () {
  'use strict';
  let dataToSave = document.querySelector('.hero-content h1 span').innerText;
  let p = document.createElement('p');
  document.querySelector('.hero-content').appendChild(p);

  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  function updateTime() {
    var today = new Date();

    const dateSave = getDateToSave(dataToSave);

    let leftTime = dateSave.getTime() - today.getTime();
    let daysLeft = parseInt(leftTime / ONE_DAY);
    leftTime = leftTime - daysLeft * ONE_DAY;

    let hoursLeft = parseInt(leftTime / ONE_HOUR);
    leftTime = leftTime - hoursLeft * ONE_HOUR;

    let minutesLeft = parseInt(leftTime / ONE_MINUTE);
    leftTime = leftTime - minutesLeft * ONE_MINUTE;

    let secondsLeft = parseInt(leftTime / 1000);
    insertTimeLeft(daysLeft, hoursLeft, minutesLeft, secondsLeft);
  }
  updateTime();

  function insertTimeLeft(days, hours, minutes, seconds) {
    p.innerHTML = `Faltam ${days} dias ${hours} horas ${minutes} minutos e ${seconds} segundos`;
  }

  setInterval(() => {
    updateTime();
  }, 1000);

  function getDateToSave(str) {
    const [date, hour] = str.split(' ');
    const [day, month, year] = date.split('/');
    const [hours, minutes] = hour.split('H');
    return new Date(year, month - 1, day, hours, minutes);
  }
})();
