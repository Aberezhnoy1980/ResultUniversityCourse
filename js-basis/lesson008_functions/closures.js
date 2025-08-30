// Замыкания
const createMultiplayer = function (n) {
	return function () {
		return n * 10;
	};
};

console.log(createMultiplayer(5));

const multiply = createMultiplayer(5);
console.log(multiply());

// const createCounter = (initialValue = 0) => {
// 	return (valueToAdd) => {
// 		return initialValue + valueToAdd;
// 	};
// };

// const addFive = createCounter(5);
// const addTen = createCounter(10)
// const result = addFive(10);
// console.log(result);
// console.log(addTen(50));

const createConuter = (initialValue = 0) => {
	let counter = initialValue;

	return (valueToAdd) => {
		counter += valueToAdd;
		return counter;
	};
};

const addTwo = createConuter(2);
let result = addTwo(10);
result = addTwo(5);
result = addTwo(3);
console.log(result);

// printMessage('Hello!');

// const printMessage = function(message) {
// console.log(`Message: ${message}`);}

const moveBy10Pixels = (value) => {
value + 10
};

console.log(moveBy10Pixels(100));