const userName = prompt("Как вас зовут?", "Введите ваше имя")
	.toUpperCase()
	.trim();

alert(`Вас зовут ${userName}`);

// alt
alert(`Дарова ${prompt("Как звать то тебя?").toUpperCase().trim()}`);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/emNqGMz
