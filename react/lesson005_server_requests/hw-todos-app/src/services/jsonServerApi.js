const BASE_URL = import.meta.env.VITE_JSON_SERVER_BASE_URL;

export const jsonServerApi = {
	async getTodos() {
		const response = await fetch(`${BASE_URL}/todos`);
		if (!response.ok) throw new Error('Ошибка чтения данных');
		return response.json();
	},
	async createTodo(todo) {
		const response = await fetch(`${BASE_URL}/todos`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				...todo,
				createdAt: new Date().toISOString(),
				completed: false,
			}),
		});
		if (!response.ok) throw new Error('Ошибка при создании записи');
		return response.json();
	},
	async updateTodo(id, updates) {
		const response = await fetch(`${BASE_URL}/todos/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(updates),
		});
		if (!response.ok) throw new Error('Ошибка обновления записи');
		return response.json();
	},
	async deleteTodo(id) {
		const response = await fetch(`${BASE_URL}/todos/${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) throw new Error('Ошибка при удалении записи');
		return id;
	},
};
