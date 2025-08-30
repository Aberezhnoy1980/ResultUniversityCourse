// 1. console.log
console.log(String(console.log), Number(console.log), Boolean(console.log));

// 2. { name: 'Maxim' }
console.log(
	String({ name: "Maxim" }),
	Number({ name: "Maxim" }),
	Boolean({ name: "Maxim" })
);

// Symbol('key')
console.log(
	String(Symbol("key")),
	Number(Symbol("key").description),
	Boolean(Symbol("key"))
); // description что бы обойти ошибку, т.к. Symbol нельзя привести к number

// Number
console.log(String(Number), Number(Number), Boolean(Number));

// ''
console.log(String(""), Number(""), Boolean(""));

// 0
console.log(String(0), Number(0), Boolean(0));

// -10
console.log(String(-10), Number(-10), Boolean(-10));

// '-105'
console.log(String("-105"), Number("-105"), Boolean("-105"));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/WbvVEMJ
