'use strict';

function calcImc(weight, size, callback) {
  if (
    typeof weight !== 'number' ||
    typeof size !== 'number' ||
    !weight ||
    !size
  ) {
    throw Error('Accept only numbers!');
  }
  let imc = weight / (size * size);
  if (typeof callback === 'function') {
    return callback(imc);
  }
  return imc;
}

// const resultImcCalc = calcImc(96, 1.74);

function resultImc(resultImcPerson) {
  console.log(resultImcPerson);
  if (resultImcPerson <= 16.9) {
    return 'Muito abaixo do peso';
  }
  if (resultImcPerson <= 18.4) {
    return 'Abaixo do Peso';
  }
  if (resultImcPerson <= 24.9) {
    return 'Peso Normal';
  }
  if (resultImcPerson <= 29.9) {
    return 'Acima do peso';
  }
  if (resultImcPerson <= 34.9) {
    return 'Obesidade grau 1';
  }
  if (resultImcPerson <= 40) {
    return 'Obesidade grau 2';
  } else {
    return 'Obesidade grau 3';
  }
}
// let resMsg = resultImc(resultImcCalc);
let resImcMsg = calcImc(98, 1.74, resultImc);
console.log(resImcMsg);
