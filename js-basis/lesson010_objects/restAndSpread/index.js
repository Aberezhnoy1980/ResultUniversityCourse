const citiesRussia = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
const citiesEurope = ["Берлин", "Прага", "Париж"];

const citiesRussiaWithPopulation = {
	Moscow: 20,
	SaintPetercburg: 8,
	Kazan: 5,
	Novosibirsk: 3,
};
const citiesEuropeWithPopulation = {
	Moscow: 26,
	Berlin: 10,
	Praha: 3,
	Paris: 2,
};

// Spread
console.log(citiesRussia);
console.log(...citiesRussia);
console.log(...citiesEurope);

const allCities = [...citiesRussia, "Вашингтон", ...citiesEurope];
console.log(allCities);

const allCities2 = citiesEurope.concat(citiesRussia);
console.log(allCities2);

console.log({ ...citiesRussiaWithPopulation });
console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation });

// Practice
console.log(Math.max(5, 37, 42, 17));
const numbers = [5, 37, 42, 17];
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));

const divs = document.querySelectorAll("div");
const nodes = [...divs];
console.log(nodes);
console.log(Array.isArray([...divs]));

// Rest
function sum(a, b, ...rest) {
	// console.log(rest);
	return a + b + rest.reduce((acc, item) => acc + item, 0);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...nums)); // Spread!!

//
// const a = nums[0];
// const b = nums[1];
const [a, b, ...other] = nums;

console.log(a, b, other);

// objects
const person = {
	name: "Max",
	age: 20,
	city: "Moscow",
	country: "Russia",
};

const {name, age, ...address} = person;
console.log(name, age, address);
