const numbers = [10, 4, 100, -5, 54, 2];

// for
const findCubesSum = (arr) => {
	let result = 0;
	for (let i = 0; i < arr.length; i++) result += arr[i] ** 3;
	return result;
};
console.log(`Using cycle 'for': sum of cubes is ${findCubesSum(numbers)}`);

// for...of
const findCubesSum2 = (arr) => {
	let result = 0;
	for (const num of numbers) {
		result += num ** 3;
	}
	return result;
};
console.log(
	`Using cycle 'for...of': sum of cubes is ${findCubesSum2(numbers)}`
);

// forEach()
const findCubesSum3 = (arr) => {
	let result = 0;
	arr.forEach((num) => {
		result += num ** 3;
	});
	return result;
};
console.log(
	`Using 'forEach' method: sum of cubes is ${findCubesSum3(numbers)}`
);

// resuce
const findCubesSum4 = (arr) => {
	return arr.reduce((acc, num) => acc + num ** 3, 0);
};
console.log(
	`Using 'reduce' method: sum of cubes is ${findCubesSum4(numbers)}`
);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/ZYbYmab