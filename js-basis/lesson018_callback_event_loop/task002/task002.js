function runCode() {
	console.log("Before promise");
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Zero Promise");
			resolve();
		}, 0);
	});
}

setTimeout(() => {
	console.log("Zero");
}, 0);

runCode().then(() => console.log("Zero Promise Invoked"));
console.log("One");

// Порядок выполнения:
// 1. Синхронный вызов из call stack "Before promise"
// 2. Синхронный вызов из call stack "One"
// 3. Вызов из callback queue Zero
// 4. Вызов из callback queue Zero Promise
// 5. Вызов микрозадачи Zero Promise Invoked попавшей в очередь microtasks queue из callback queue

// https://codepen.io/bxzcnzcb-the-typescripter/pen/KwdxJrv