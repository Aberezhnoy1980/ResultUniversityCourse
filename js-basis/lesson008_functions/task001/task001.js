// Function declaration
function getName1(name) {
	return `Имя равно ${name}`;
}

// Function expression
const getName2 = function (name) {
	const message = `Имя равно ${name}`;
    return message;
};

// Arrow function expression
const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1('Name1'));
console.log(getName2('Name2'));
console.log(getName3('Name3'));

// https://codepen.io/bxzcnzcb-the-typescripter/pen/QwjwMEE