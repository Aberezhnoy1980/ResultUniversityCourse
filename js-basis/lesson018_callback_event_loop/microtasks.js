const web003Header =
	"Event Loop. Макрозадачи и микрозадачи. Очередь микрозадач";
console.log(
	`${"=".repeat(web003Header.length)}\n${web003Header}\n${"=".repeat(
		web003Header.length
	)}`
);

// Ход обработки v8 + webApi (libUV)
// Инструкция макрозадачи -> call stack v8
console.log("Давайте начинать!");

// Очередь вызовов callback queue -> webApi
setTimeout(() => {
	console.log("Привет! Я setTimeout!");
}, 1e3);

// Инструкция макрозадачи -> call stack v8
const newPromise = new Promise((resolve) => {
    // синхронное выполнение
	console.log("Я в промисе");
    // асинхронное -> ожидается обрааботчик then -> уходит в микрозадачи microtasks queue
	resolve("Возвращаю результат из промиса");
});

// Очередь вызовов callback queue -> webApi
setTimeout(() => {
	console.log("Я тоже в setTimeout, только жду подольше");
}, 2e3);

// Обработка микрозадачи microtasks queue
newPromise.then((result) => {
	console.log(result);
});

// Инструкция макрозадачи call stack v8
console.log("Давайте заканчивать");

// Микрозадачи это then, catch, finally
// 1. Выполняется мАкроазадча (call stack)
// 2. Вызвать все, что есть в очереди мИкрозадач (microtask)
// 3. Вызывается все, что есть в очереди вызовов (callback queue)

// Поэтому будет такой результат (порядок):
// Давайте начинать!
// microtasks.js:16 Я в промисе
// microtasks.js:28 Давайте заканчивать
// microtasks.js:25 Возвращаю результат из промиса
// microtasks.js:12 Привет! Я setTimeout!
// microtasks.js:21 Я тоже в setTimeout, только жду подольше

const anotherPromise = new Promise((resolve) => {
   console.log('in promise');
   setTimeout(() => {
       console.log('in setTimeout');
       resolve();
   }, 0);
});
 
anotherPromise.then(() => {
   console.log('in then');
});