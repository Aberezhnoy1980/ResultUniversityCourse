// Объявляю и сразу инициализирую переменные
const carName = 'Lada';
let maxCarSpeed = 200;
let carOwner = 'Nobody';

// Рендерю в модальном окне
alert(`Автомобиль: ${carName}`);
alert('Максимальная скорость:' + ' ' + maxCarSpeed + ' ' + 'км/час');
alert('Владелец'.concat(':', ' ', carOwner));

// Переопределяю переменные
maxCarSpeed = 180;
console.log('У машины изменилась скорость', maxCarSpeed);
maxCarSpeed = 160;
console.log('У машины изменилась скорость', maxCarSpeed);
maxCarSpeed = 140;
console.log('У машины изменилась скорость', maxCarSpeed);

carOwner = 'Ivan';
console.log('У машины изменился владелец', carOwner);
carOwner = 'John';
console.log('У машины изменился владелец', carOwner);
carOwner = 'Luntik';
console.log('У машины изменился владелец', carOwner);