// && (И)
// || (ИЛИ)
// ! (НЕ)
const userAge = 20;
if (userAge > 5 && userAge <= 18) {
    console.log("Пользователь ходит в школу");
}

const programmingLanguage = 'JavaScript';
const experienceInYear = 2;

if (programmingLanguage === 'JavaScript' && experienceInYear > 1) {
    console.log('Добро пожаловать в нашу команду');
}

// || (ИЛИ)
const currentHours = 6;
if (currentHours < 8 || currentHours > 20) {
    console.log('Наш офис закрыт. Приходите завтра');
} else {
    console.log('Добро пожаловать в офис');
}

const userNickname = null;
const defaultnickname = '';
const nickname = userNickname || defaultnickname || 'noname';
console.log('Nickname', nickname);

const finalNickname = userNickname && 'Пользователь существует';
console.log('Finalnickname', finalNickname);

// ! (НЕ)
const hasAccess = true;
if (!hasAccess) {
    console.log('Доступ закрыт');
} else {
    console.log('Доступ открыт');
}

// const answer = prompt('Сколько вам лет?');
// if (!answer) {
//     alert('Введите ваше полное количество лет')
// } else {
//     alert(`Вам ${answer} лет`)
// }

// Оператор объединения с null ??
console.log(null || 'Hello world');
console.log(null ?? 'Hello world');