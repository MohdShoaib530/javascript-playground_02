// checking if a number is greater than another number

/* et num1 = 4;
let num2 = 6;

console.log('I am a regular upper code');
if (num1 > num2) {
  console.log('num1 is greater than num2');
} else {
  console.log('nope num1 is not greater');
}
console.log('I am a regular lower code'); */

// check if a string is equal to another string

let userName = 'shoaib';
let anotherUserName = 'mohd shoaib';

if (userName == anotherUserName) {
  console.log('pick another username');
} else {
  console.log('you can pick this username');
}

let score = '44';
if (typeof score === 'number') {
  console.log('yep, this is a number');
} else {
  console.log('nope, that is not a number');
}

// checking if a boolean value is true or false

let isTeaReady = false;
if (isTeaReady) {
  console.log('tea is ready');
} else {
  console.log('tea is not ready');
}

// arrays

let items = [2];
console.log('lenght', items.length);

if (items.length === 0) {
  console.log('item is empty');
} else {
  console.log('array is not empty');
}
