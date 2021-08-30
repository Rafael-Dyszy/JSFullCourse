var s = '10:45:54PM';
var v = s;
let militaryHours = 0;
if (s.charAt(8) === 'P') {
  s = s.split('P').shift();
  if (s.substring(0, 2) == 12) {
    s = s;
  } else {
    militaryHours = parseInt(s.substring(0, 2)) + 12;
    s = s.replace(s.substring(0, 2), militaryHours);
    if (militaryHours == 24) {
      s = s.replace(s.substring(0, 2), '00');
    }
    // console.log(s);
  }
}
if (v.charAt(8) === 'A') {
  s = v.split('A').shift();
  if (parseInt(s.substring(0, 2)) === 12) {
    s = s.replace(s.substring(0, 2), '00');
  }
}

// console.log(s);
// ----------------------------------------------------------------------------------
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function main(arr) {
  var arrFirst = [];
  var arrReverse = [];
  for (let i = 0; i < arr.length; i++) {
    arrFirst.push(arr[i][i]);
  }
  var arrFirstSum = arrFirst.reduce((a, b) => a + b);

  for (let j = 0; j < arr.length; j++) {
    let arrR = arr[j].reverse();

    arrReverse.push(arrR[j]);
  }
  console.log(arrReverse);
  var arrReverseSum = arrReverse.reduce((a, b) => a + b);
  var sum = 0;
  if (arrFirstSum > arrReverseSum) {
    sum = arrFirstSum - arrReverseSum;
  } else {
    sum = arrReverseSum - arrFirstSum;
  }
  console.log(sum);
}

main(arr);
