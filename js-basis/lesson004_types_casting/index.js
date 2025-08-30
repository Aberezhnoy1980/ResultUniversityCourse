// JavaScript имеет динамическую типизцию

// 1. Преобразование к строке
const age = 20;
console.log('number age:', typeof age);
console.log('string age:', typeof String(age)); // явное преобразование

const updatedAge = '1' + 20; // неявное
console.log(updatedAge, typeof updatedAge);

// 1. Преобразование к числу
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript:', typeof experienceInJavaScript);
console.log('string experienceInJavaScript:', typeof Number(experienceInJavaScript));

console.log('experienceInJavaScript', +experienceInJavaScript); // неявное

console.log('Hello World', Number('Hello World'));

// 1. Преобразование к boolean
console.log('hello', Boolean('hello'));
console.log('5', Boolean(5));

// false: null, undefined, NaN, 0, ''
console.log('null', Boolean(null));
console.log('undefined', Boolean(undefined));
console.log('NaN', Boolean(NaN));
console.log('0', Boolean(0));
console.log('Empty string', Boolean(''));

let a = 4;
a = {};
console.log(a);