const getData = (callback) => {
	fetch("https://jsonplaceholder.typicode.com/users/1")
		.then((response) => response.json())
		.then((user) => {
			console.log("Success");
			callback(user);
		})
		.catch((error) => {
			console.log(error);
		});
};
getData(() => {
	console.log("user recevied");
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve("promise resolved");
		}, 500);
		console.log("in promise");
		setTimeout(() => {
			console.log("last set timeout");
		}, 400);
	});
	promise.then((result) => {
		console.log(result);
	});
});
console.log("End");

// Порядок выполнения:
// 1. Синхронный код из макрозадачи "End"
// 2. Асинхронный код из микрозадачи then "Success"
// 3. Синхронный код callback функции из микрозадачи "user received"
// 4. Синхронный код конструктора Promise "in promise"
// 5. Асинхронный код callback функции из callback queue "last set timeout"
// 6. "promise resolved"

// https://codepen.io/bxzcnzcb-the-typescripter/pen/dPYqryb