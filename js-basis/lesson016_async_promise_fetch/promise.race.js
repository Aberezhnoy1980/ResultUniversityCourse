const web005Header = "Promise.race()";
console.log(
	`${"=".repeat(web005Header.length)}\n${web005Header}\n${"=".repeat(
		web005Header.length
	)}`
);

// Promise.race() возвращает первый выполненный (и fulfilled и reject)
const promise1 = new Promise((resolve) => {
	// reject не используем в данном примере
	setTimeout(() => {
		resolve("promise1");
	}, 500);
});

const promise2 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("promise2");
	}, 2000);
});

const promise3 = new Promise((resolve,reject) => {
	setTimeout(() => {
		// resolve("promise3");
		reject("promise3");
	}, 1000);
});

Promise.race([promise1, promise2, promise3])
	.then((result) => console.log("result", result))
	.catch((error) => console.log("error", error));
