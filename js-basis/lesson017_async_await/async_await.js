const getTodosWithUserData = async () => {
	try {
		const response = await fetch(USERS_URL); // Ожидание
		if (!response.ok) {
			throw new Error("Ошибка в получении данных пользователей");
		}
		console.log("response", response); // Здесь просто необработанный объект Response
		const users = await response.json();
		console.log("users from async await", users); // массив users
		const firstUserId = users[0]?.id;
		const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`);
		if (!todosResponse.ok) {
			throw new Error("Ошибка в получении задач");
		}
		const todos = await todosResponse.json();
		console.log("todos from async await", todos);
	} catch (error) {
		console.log("error", error); // error.message
	} finally {
		console.log("finally");
	}
}; // async возвращает Promise
const promise = getTodosWithUserData();
console.log("promise", promise);

// try catch finally
