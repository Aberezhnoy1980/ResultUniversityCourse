const web001Header = "Асинхронность";
console.log(
	`${"=".repeat(web001Header.length)}\n${web001Header}\n${"=".repeat(
		web001Header.length
	)}`
);

// then, catch, finally
// async, await
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

fetch(USERS_URL)
	.then((response) => response.json())
	.then((users) => {
		console.log("users", users);
		const firstUserId = users[0]?.id;
		fetch(TODOS_URL)
			.then((response) => response.json())
			.then((todos) => {
				console.log(
					todos.filter((todo) => (todo.userId = firstUserId))
				);
			})
			.catch((error) => console.log("error", error));
		// 	fetch(`${TODOS_URL}?userId=${firstUserId}`)
		// 		.then((response) => response.json())
		// 		.then((todos) => console.log("todos", todos))
		// 		.catch((error) => console.log("error", error));
	})
	.catch((error) => console.log("error", error));

// async, await - попробуем анонимный самовызов с лютыми вложениями await
(async (users_url, todos_url) => {
	// const users = await (await fetch(users_url)).json();
	// const users = await response.json()
	// console.log((await (await fetch(users_url)).json())[0]?.id);
	console.log(
		await (
			await fetch(
				`${todos_url}?userId=${
					(
						await (await fetch(users_url)).json()
					)[0]?.id
				}`
			)
		).json()
	);
})(USERS_URL, TODOS_URL);

