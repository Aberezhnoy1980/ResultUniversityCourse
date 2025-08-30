const dog = {
	name: "Чарли",
	type: "Собака",
	makeSound() {
		return "Гав-Гав";
	},
};

const bird = {
	name: "Петя",
	type: "Воробей",
	makeSound() {
		return "Чик-чирик";
	},
};

function makeDomestic(isDomestic) {
	const animal = {
		...this,
		isDomestic,
	};
	console.log(
		`${this.type} по имени ${this.name} говорит ${this.makeSound()}`
	);
	return animal;
}

const animal = makeDomestic.bind(dog, true);
console.log(animal());

console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [false]));

console.log(dog);
console.log(bird);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/QwjdxgV