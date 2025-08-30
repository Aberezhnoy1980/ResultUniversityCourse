// Date
const date = new Date();
console.log('date', date);

// new Date(year, month, date, hours, minutes, seconds,  ms)
const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log('newDate', newDate);

// getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log('year', newDate.getFullYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());
console.log('ms', newDate.getMilliseconds()); // ?

// День недели от 0 до 6 (воскресенье - суббота)
console.log('day', newDate.getDay());
if (newDate.getDay() === 4) console.log('Сегодня у нас четверг');

newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);
newDate.setHours(3);
newDate.setMinutes(32);
newDate.setSeconds(55);
console.log('newDate', newDate);