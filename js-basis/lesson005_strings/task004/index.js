const userName = prompt("Как вас зовут?", "Введите ваше имя")
	.toUpperCase()
	.trim();
const userAge = Number(
	prompt("Сколько вам лет?", "введите свой возраст").trim()
);

alert(`Вас зовут ${userName} и вам ${userAge} лет`);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/NPqQaMZ