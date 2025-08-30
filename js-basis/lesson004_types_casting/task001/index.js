// number
let num = 23;
console.log(Number(num), Boolean(num), String(num));

// string
let str = "some text";
console.log(Number(str), Boolean(str), String(str));

// bigint
let bigNum = 1n;
console.log(Number(bigNum), Boolean(bigNum), String(bigNum));

// symbo;
let id = Symbol("id");
console.log(Number(id.description), Boolean(id), String(id)); // нельзя привести к number

// boolean
let isSomethingHappening = true;
console.log(
	Number(isSomethingHappening),
	Boolean(isSomethingHappening),
	String(isSomethingHappening)
);

// null
let unused = null;
console.log(Number(unused), Boolean(unused), String(unused));

// undefined
let uninitial;
console.log(Number(uninitial), Boolean(uninitial), String(uninitial));

// object
let obj = {
	prop1: "a",
	prop2: 23,
};
console.log(Number(obj), Boolean(obj), String(obj));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/JodgyEP