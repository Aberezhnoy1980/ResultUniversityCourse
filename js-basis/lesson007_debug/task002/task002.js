// const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
// console.log(temperatureInCelsius); // посмотрим на тип - это будет строка

// debugger; 
// if (temperatureInCelsius === 0) { // предположительно ошибка при сравнении типов (строгое сравнение сторки и числа будет давать false)
//     alert('0 градусов по Цельсию - это температура замерзания воды');
// } else if (temperatureInCelsius > 0) {
//     alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// debugger;
// const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32; // зачем здесь скобки? Предположительно ошибка в имени переменной
// debugger; // посмотрим на строку - предположительно неправильно собирается шаблоный литерал
// alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту`);

// исправления
const temperatureInCelsius = +prompt('Введите температуру в градусах Цельсия').trim();
console.log(temperatureInCelsius); // посмотрим на тип - это будет строка

debugger; 
if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

debugger;
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32; // зачем здесь скобки? Предположительно ошибка в имени переменной
debugger; 
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту`);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/myebWPe