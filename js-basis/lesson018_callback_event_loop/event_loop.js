// Event loop
function sayHello(name) {
	console.log(`Hello, ${name}`);
}

console.log("start");
sayHello("Maksim");
setTimeout(() => {
	sayHello("Charlie");
}, 0);
sayHello("Antony");
console.log("end");
