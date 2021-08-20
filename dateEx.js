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
    console.log(s);
  }
}
if (v.charAt(8) === 'A') {
  s = v.split('A').shift();
  if (parseInt(s.substring(0, 2)) === 12) {
    s = s.replace(s.substring(0, 2), '00');
  }
}

console.log(s);
