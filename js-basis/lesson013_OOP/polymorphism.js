const webPolymorphismHeader = "Полиморфизм";
console.log(
	`${"=".repeat(
		webPolymorphismHeader.length
	)}\n${webPolymorphismHeader}\n${"=".repeat(webPolymorphismHeader.length)}`
);

// Полиморфиизм - одно дейстсвие - несколько реализаций. Общее действие - уникальная реализация
class Animal1 {
	constructor(name) {
		this.name = name;
	}

	makeSound() {}
}

class Dog extends Animal1 {
	constructor(name) {
		super(name);
	}

	makeSound() {
		console.log("Гавб гав!!");
	}
}

class Horse extends Animal1 {
	constructor(name) {
		super(name);
	}

	makeSound() {
		console.log("Иго-го-го");
	}
}


