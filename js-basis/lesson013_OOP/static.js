const webStatic = "Статические члены класса";
console.log(
	`${"=".repeat(webStatic.length)}\n${webStatic}\n${"=".repeat(
		webStatic.length
	)}`
);

// Статика
class Car {
	static isCar(car) {
		return car instanceof Car;
	}

    static #initialParams = {
        name: 'Audi',
        maxSpeed: 150,
    }

	constructor(name, maxSpeed) {
		this.name = name || Car.#initialParams.name;
		this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
	}

	drive() {
		console.log(`Машина ${this.name} сейчас в пути`);
	}
}

const car = new Car("BMW", 200);
console.log(car);

const isCar = Car.isCar(car);
console.log(isCar);

const animal = {};
console.log(Car.isCar(animal));

const unknownCar = new Car();
console.log(unknownCar);