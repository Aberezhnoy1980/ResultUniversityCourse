const web001Header = "Что такое callback и как его использовать в коде";
console.log(
	`${"=".repeat(web001Header.length)}\n${web001Header}\n${"=".repeat(
		web001Header.length
	)}`
);

// callback - это функция-аргумент для параметра другой функции
const promise = new Promise(() => {});

setTimeout(() => {}, 3000);

const FIRST_TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";

const getTodo = (callback) => {
	fetch(FIRST_TODO_URL)
		.then((response) => response.json())
		.then((todo) => {
			callback(todo);
		})
		.catch((error) => console.log("error", error));
};

// getTodo((todoItem) => {
// 	console.log("todoItem", todoItem);
// });