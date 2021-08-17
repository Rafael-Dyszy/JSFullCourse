/*
    replace(),          replaceAll()**            
    indexOf()           lastIndexOf()           includes()
    slice()             substring()             split()
    toLowerCase()       toUppewrCase()
    valueOf()
    trim()              trimEnd()               trimStart()
    padStart()          padEnd()
    startsWith()        endsWith()
    charAt()            charCodeAt()            length
*/

const str = 'My String for Tests';

// console.log(str.replace(/s/g, 'i'));
// console.log(str);

// console.log(str.indexOf('string'));
// console.log(str.lastIndexOf('e'));

// console.log(str.includes('My'));

// slice and substring
// console.log(str.slice(2, 8));
// console.log(str.substring(2, 8));

// console.log(str.slice(-4)); return start the end
// console.log(str.substring(-2, -4)); return empty string

// to LowerCase and toUpperCase
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str);

// valueOf and toString
const strAsObj = new String('My string object');
// console.log(strAsObj);
// console.log(strAsObj.valueOf());
// console.log(strAsObj.toString());

// trim --- remove spaces and breakLines
const str1 = '      ' + str + '        ';
// console.log(str1);
// console.log(str1.trim());
// console.log(str1.trimEnd());
// console.log(str1.trimStart());
// console.log(str1);

// padStart padEnd
const telephone1 = '12345-6789';
const telephone2 = '2345-6789';
// console.log(str2);
// console.log(str2.padStart(20, '-'));
// console.log(str2.padEnd(20));

function hideNumbers(number) {
  const hifenPosition = number.indexOf('-');
  const initialNumbers = number.slice(0, hifenPosition);
  const finalNumbers = number.slice(hifenPosition + 1);
  const lastTwoNumbers = finalNumbers.slice(-2);
  return `${initialNumbers[0].padEnd(
    initialNumbers.length,
    '*'
  )}-${lastTwoNumbers.padStart(finalNumbers.length, '*')} `;
}
console.log(hideNumbers(telephone2));
console.log(hideNumbers(telephone1));

// startsWith and endWith
const str3 = 'Today is Saturday';
// console.log(str3.startsWith(`Today`));
// console.log(str3.endsWith('y'));

// charAt and charCodeAt
const str4 = 'abcdefgh';
console.log(str4.charAt(1));
console.log(str4.charCodeAt(1));
console.log(str4.charCodeAt(0));
