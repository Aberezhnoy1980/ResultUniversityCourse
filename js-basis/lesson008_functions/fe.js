// Function Expression
const sum = function (a, b) {
	console.log(a + b);
};

sum(5, 10);
// arrow Function Expression
const sum2 = (a, b) => {
	return a + b;
};

const sum3 = (a, b) => a + b; // single expression

console.log(sum2(7, 12));
console.log(sum3(12, 14));

// const addFive = (a) => a + 5;
const addFive = a => a + 5; // single parameter

console.log(addFive(10));

function multiply(a, b, callback) {
	const result = a * b;
	callback(result);
}

multiply(5, 2, (multiplyResult) => {
	console.log("multiplyResult", multiplyResult);
});

multiply(4, 5, res => console.log(`4 x 5 = ${res}`));
