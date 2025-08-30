// toUppercase, toLowerCase
const animal = 'Lion';
console.log('upper', animal.toUpperCase());
console.log('upper', animal.toLowerCase());

console.log('animal', animal);

// Найти символы - indexOf, includes
const text = 'Мой любимый язык программирования JavaScript';
console.log('indexOf', text.indexOf('о'));
console.log('includes', text.includes('JavaScript'));

// Обрезка строки - slice, substring
// const programmingLanguage = 'JavaScript'; // переменная объявлена в другом подключенном скрипте
console.log('slice', programmingLanguage.slice(1, 5));

console.log('substring', programmingLanguage.substring(1, 5));

// Замена символов в строке - replace, replaceAll
console.log('replace', programmingLanguage.replace('Script', ''));
console.log('replace', programmingLanguage.replaceAll('a', 'A'));

// repeat
const helloText = 'hello';
console.log(helloText.repeat(3));
console.log('_'.repeat(30));

// trim
// const nameOfUser = prompt('Как вас зовут?');
// console.log(nameOfUser.trim());

// array
console.log(programmingLanguage.split('a'));