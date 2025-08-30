function sum(...args) {
	return args.reduce((acc, arg) => acc + arg, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(2, 2));
console.log(sum(10, 15, 249, 653, 846));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/pvjEQEN