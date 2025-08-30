function getSumOfNumber(number, type = "odd") {
	let sum = 0;
	if (number === undefined || typeof number !== "number") return NaN;
	if (type === "odd") {
		for (let i = 1; i <= number; i += 2) {
			sum += i;
		}
	} else if (type === "even") {
		for (let i = 0; i <= number; i += 2) {
			sum += i;
		}
	} else if (type === '') {
		for (let i = 0; i <= number; i++) {
			sum += i;
		}
	}

	return sum;
}

console.log(getSumOfNumber(10));
console.log(getSumOfNumber(10, "even"));
console.log(getSumOfNumber(10, ""));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/ogjgeQR