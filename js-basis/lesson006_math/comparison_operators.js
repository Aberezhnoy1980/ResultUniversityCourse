// Операторы сравнения > < >= <= == ===
// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 <= 10);
// console.log(5 >= 10);

// console.log('==', 100 == 100);

// Сравнение строк
// console.log('JavaScript' == 'Javascript');
// console.log('S', 'S'.charCodeAt());
// console.log('s', 's'.charCodeAt());
// console.log('JavaScript' > 'Javascript');
// console.log('JavaScript' < 'Javascript');

// console.log('javaScript' > 'JavaScript'); // j > J
// console.log('J', 'J'.charCodeAt());
// console.log('j', 'j'.charCodeAt());

// == vs ===
// == сравнивает значения, а === сравнивает типы
// console.log('1' == 1); // происходит преобразование: 1 = 1
// console.log('1' >= 1);

// console.log('20' == '20'); // посимвольное сравнение
// console.log('200' > '21'); // false: код символа 0 < кода символа 1 

// console.log(true == 1);
// console.log(false == 0);

// === - не приводит типы
// console.log('1' === 1); // строка не равна числу
// console.log(true === 1);


// Конвертер валют
const rate = 51;
const amount = 100;

const result = Number((amount / rate).toFixed(2));
// console.log(`${amount}P = $${result}`);