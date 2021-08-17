function formatName(name) {
  const arrName = name.split(' ');
  if (arrName.length === 1) {
    return name;
  }
  const firstName = arrName.shift();
  return arrName.join(' ') + ', ' + firstName;
}

console.log(formatName('Rafael'));
console.log(formatName('Rafael Dyszy'));
console.log(formatName('Rafael Augusto Dyszy'));
