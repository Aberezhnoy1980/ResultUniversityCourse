const web002Header = "Promise";
console.log(
	`${"=".repeat(web002Header.length)}\n${web002Header}\n${"=".repeat(
		web002Header.length
	)}`
);

const developer = {
	name: "Maksim",
	isJSDev: true,
};

// setTimeout
// setTimeout(() => {
// 	console.log("setTimeout");
// }, 3000);

console.log(developer);

// setInterval
// setInterval(() => {
//     console.log('setInterval');
// }, 1000)

// pending
// fulfilled
// rejected
const promise = new Promise((resolve, reject) => {
	if (developer.isJSDev) {
		setTimeout(() => {
			resolve(`${developer.name} является JavaScript-разработчиком`);
		}, 3000);
	} else {
		reject(`${developer.name} НЕ являяется JavaScript-разработчиком.`);
	}
});

console.log(promise);

// then, catch, finally
// promise.then((successMessage) => {
// 	console.log("successMessage", successMessage);
// });

// Так не получится
// developer.isJSDev = false;

// promise
// 	.then((successMessage) => {
// 		console.log("successMessage", successMessage);
// 	})
// 	.catch((errorMessage) => {
// 		console.log("errorMessage", errorMessage);
// 	})
// 	.finally(() => {
// 		console.log("Промис выполнился и обработались результаты");
// 	});

// console.log(developer);
