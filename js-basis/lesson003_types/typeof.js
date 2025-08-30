// Определение типов
console.log(typeof('Maksim'), typeof 12n, typeof 5, typeof false, typeof Symbol('id'), typeof undefined, typeof console);

// Исключения
console.log(typeof null); // ошибка языка
console.log(typeof console.log); // function - несуществующий тип. Должен быть object