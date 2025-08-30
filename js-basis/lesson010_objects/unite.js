const web005Header = "Объединение объектов";
console.log(
	`${"=".repeat(web005Header.length)}\n${web005Header}\n${"=".repeat(
		web005Header.length
	)}`
);

const developerInfo = {
	age: 25,
	experince: 3,
    name: 'Maxim',
};

const developerExtraInfo = {
    name: 'Igor',
	height: 180,
	isJunior: false,
};

// 1 способ объединения объектов. Рекомендованный. Создается новый объект
const totaldeveloperInfo = {
	...developerInfo,
	...developerExtraInfo,
    name: 'Nastya',
};

console.log('totalDeveloperInfo', totaldeveloperInfo);

// 2 способ (до spread оператора). Свойства добавляются в целевой (первый  аргумент) объект
const totalDeveloperInfo2 = Object.assign(developerInfo, developerExtraInfo);
console.log('totalDeveloperInfo2', totalDeveloperInfo2);