// ООП
// function и class
// new
function Animal(name) {
	this.name = name;
	this.getName = function () {
		return this.name;
	};
}

const cat = new Animal("Кот");
console.log("cat", cat);
console.log(cat.name);
console.log(cat.getName());

// class
class Animal2 {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

const dog = new Animal2('собака');
console.log('dog', dog);
console.log(dog.name);
console.log(dog.getName());