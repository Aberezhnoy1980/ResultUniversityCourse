// functin declaration
sayHello(); // можно вызывать в любом месте программы (то есть важно что можно до определения)

function sayHello() {
	console.log("Hello User!");
}

// sayHello();
// sayHello();
// sayHello();

function add(a, b) {
	console.log(a + b);
}

add(5, 10);
add(); // undefined + undefuned

// default values
function add2(a = 1, b = 2) {
	console.log(a + b);
}

add2();

// функция в качестве параметра - callback
function add3(a, b, callback) {
	const result = a + b;
	callback(result);
}

function displayer(res) {
	console.log("Резульат пользовательской функции", res);
}

// пользовательская функция
add3(3, 10, displayer);

// анонимный колбэк
add3(5, 10, function (res) {
	console.log("результат из анонимной функции", res);
});

// встроенные функции (глобального объекта)
// add3(5, 10, alert);
add3(5, 10, console.log);

// return
function add4(a, b) {
	return a + b;
}
console.log(add4(1, 1));
