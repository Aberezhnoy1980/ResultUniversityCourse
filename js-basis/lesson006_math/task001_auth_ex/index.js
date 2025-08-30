const existingUserLogin = "the_best_user";
const existingUserPassword = "12345678";

const userLogin = prompt("Введите логин").trim();
const userPassword = prompt("Введите пароль").trim();

existingUserLogin === userLogin && existingUserPassword === userPassword
	? alert(`Добро пожаловать, ${userLogin}!`)
	: alert("Логин и (или) пароль введены неверно!");

// https://codepen.io/bxzcnzcb-the-typescripter/pen/zxGgMBP
