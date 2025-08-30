const webIncapsulation = "Инкапсусляция";
console.log(
	`${"=".repeat(webIncapsulation.length)}\n${webIncapsulation}\n${"=".repeat(
		webIncapsulation.length
	)}`
);

// Инкапсуляция
class Developer {
	#salary;

	constructor(name, programmingLanguage) {
		this.name = name;
		this.programmingLanguage = programmingLanguage;
		// private fields
		this.#salary = 3000;
	}

	get devSalary() {
		return this.#salary;
	}

	set setSalary(salary) {
		this.#salary = salary;
	}

	startProgramming() {
		console.log(`${this.name} начинает писать код!`);
	}

	#printSalary() {
		console.log(this.#salary);
	}

	printSalary() {
		this.#printSalary();
	}

	printProgrammingLanguage() {
		console.log(`Язык программирования ${this.programmingLanguage}`);
	}
}

const developer = new Developer("Максим", "JavaScript");
console.log(developer);

// Доступные поля (свойства и методы) - public
console.log(developer.name);

// private поля (доступные только внутри класса)

class JuniorDeveloper extends Developer {
	constructor(name, programmingLamguage) {
		super(name, programmingLamguage);
	}
}

const juniorDeveloper = new JuniorDeveloper("Игорь", "JavaScript");
juniorDeveloper.printProgrammingLanguage();

developer.printSalary();
juniorDeveloper.printSalary();

console.log(developer.devSalary);

developer.setSalary = 5000;
console.log(developer.devSalary);
