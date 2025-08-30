console.clear();

// map
console.log(salariesOfDevelopers);
const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
	return salary * 2;
});

console.log(updatedSalaries);

// Filter
const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
	return salary > 600;
});

const evenIdxSalaries = salariesOfDevelopers.filter((salary, index) => {
	return index % 2 === 0;
});

console.log(filteredSalaries);
console.log(evenIdxSalaries);

// find
const searchSalary = salariesOfDevelopers.find((salary) => {
	return salary === 500;
});

console.log(searchSalary);

// findIndex
searchIndex = salariesOfDevelopers.findIndex((salary) => {
	return salary === 400;
});

console.log(searchIndex);

// some, every
const elExists = salariesOfDevelopers.some((salary) => {
	return salary > 1000;
});

console.log(elExists);

const allElExists = salariesOfDevelopers.every((salary) => {
	return salary > 1000;
});

console.log(allElExists);

// reduce
console.log(salariesOfDevelopers);
const totalSalary = salariesOfDevelopers.reduce((acc, salary, index, array) => {
	return acc + salary;
}, 0);

console.log(totalSalary);

// sort
salariesOfDevelopers.sort((a, b) => {
	return a - b;
});

console.log(salariesOfDevelopers);

salariesOfDevelopers.sort((a, b) => {
	return b - a;
});

console.log(salariesOfDevelopers);

console.log(developerNames);
developerNames.sort();
console.log(developerNames);

developerNames.sort((a, b) => {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}

	return 0;
});
console.log(developerNames);

// splice меняет массив
const cars = ['BMW', 'Mercedes', 'Lada'];

const removedElements = cars.splice(0, 2, 'Audi', 'Buggati');
console.log(cars);
console.log(removedElements);

// slice не меняет массив
const agesOfDeveleopers = [25, 18, 45, 30];
// console.log(agesOfDeveleopers.slice(0, 2));
const slicedAgesOfDevelopers = agesOfDeveleopers.slice(0, 2);
console.log(slicedAgesOfDevelopers);
console.log(agesOfDeveleopers);

// indexOf
const favoriteFood = ['Мороженное', 'Торт', 'Кофе'];
const indexOfFood = favoriteFood.indexOf('Торт');
console.log(indexOfFood);

// includes
const technologies = ['JavaScript', 'HTML', 'CSS'];
const isTechnologyExists = technologies.includes('CSS');
console.log(isTechnologyExists);

// split и join
const listOfOrders = 'Майка, шорты, кроссовки, рюкзак';
const listOfOrdersArray = listOfOrders.split(', ');
console.log(listOfOrdersArray);

const ordersString = listOfOrdersArray.join('; ');
console.log(ordersString);

// reverse меняет массив
technologies.reverse()
console.log(technologies); // ['CSS', 'HTML', 'JavaScript']