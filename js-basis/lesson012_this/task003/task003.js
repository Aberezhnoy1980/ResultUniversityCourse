const footballer = {
	fullName: "Cristiano Ronaldo",
	attack: function () {
		console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
	},
	scoreGoal(sound) {
		console.log(`${this.fullName} забил гол! Вот это да!`);
		this.celebrate(sound);
	},
	celebrate(sound) {
		console.log(sound);
	},
	goToSubstitution: function (newPlayer) {
		console.log(
			`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
		);
	},
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

/* 
После долгих раздумий где я должен менять код, исходя из здравого смысла о том,
что изначально в объекте свойство (метод) attack написан неправильно - просто переписал
это свойство, присвоив ему анонимную FE вместо стрелочной FE
*/
attack.bind(footballer)();
/* 
Я не понял в задании где я меняю код. "Исправить исходный код". Исходный код объекта 
неправильный для метода attack. Я имею право его исправить? Но bind я применяю к функции (при вызове), 
а не в момент ее определния (в объекте). То есть правки с использованием bind(), call(), apply() 
вроде бы должны относиться к вызовам методов в конце "исходного кода", последние три строчки. 
Если не менять код объекта, тогда, как вариант, могу добавить свойство для глобального объекта:
var fullName = footballer.fullName;
или 
globalThis.fullName = footballer.fullName;
и спокойно вызывать attack.bind(this)(); могу даже без аргументов вызвать. Только зачем.
но это похоже дичь какая то)
Тогда просто перепишу метод объекта
*/
score.call(footballer, "Сиииии");
substitute.apply(footballer, ["Paulo Dibala"]);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/NPGdBbZ