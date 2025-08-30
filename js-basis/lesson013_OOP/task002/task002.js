class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(otherPerson) {
		this.age >= otherPerson.age
			? alert(`${this.name} старше, чем ${otherPerson.name}`)
			: alert(`${this.name} младше, чем ${otherPerson.name}`);
	}
}

const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 23);

person1.compareAge(person2);
person2.compareAge(person3);
person3.compareAge(person1);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/PwPpVGW