'use strict';

function formatName(name) {
  name = name.trim();
  const firstNameIndex = name.indexOf(' ');
  if (firstNameIndex < 0) {
    return name;
  } else {
    const firstName = name.slice(0, firstNameIndex);
    const lastName = name.slice(firstNameIndex + 1);

    return `${lastName}, ${firstName}`;
  }
}

console.log(formatName('Rafael'));
console.log(formatName('Rafael Dyszy'));
console.log(formatName('Rafael Augusto Dyszy'));
