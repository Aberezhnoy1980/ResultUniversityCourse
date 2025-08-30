const web002Header = "4 принципа ООП";
console.log(
	`${"=".repeat(web002Header.length)}\n${web002Header}\n${"=".repeat(
		web002Header.length
	)}`
);

// Наследование, полиморфизм, инкапсуляция, абстракция
// Inheritance
class Plane {
	constructor(type, numberOfPassengers) {
		this.type = type;
		this.numberOfPassengers = numberOfPassengers;
        this[Symbol.toStringTag] = 'Plane';
	}
	startFlight() {
		console.log("Полетели");
	}
}

const plane = new Plane("Пассажирский", 100);
console.log(plane);
plane.startFlight();

class MilitaryPlane extends Plane {
    constructor(type) {
        super(type, 0);
		this.numberOfGuns = 0;
        this[Symbol.toStringTag] = 'MilitaryPlane';
	}

	startFlight() {
		console.log("Пполетели в атаку!");
	}

	setNumberOfGuns(numberOfGuns) {
		this.numberOfGuns = numberOfGuns;
	}

	shoot() {
		console.log("Стреляем");
	}
}

const militaryPlane = new MilitaryPlane("Military");
console.log(militaryPlane);
militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log("militaryPlane", militaryPlane);

// instanceof
console.log(militaryPlane instanceof MilitaryPlane);
console.log(militaryPlane instanceof Plane);

// Продвинутый typeof
console.log(Object.prototype.toString.call(militaryPlane));
console.log({}.toString.call(militaryPlane));
console.log({}.toString.call(plane));
let arr = [];
console.log(Object.prototype.toString.call(arr));
