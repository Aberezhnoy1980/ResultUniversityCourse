const BASE_URL = import.meta.env.VITE_JSON_PLACEHOLDER_BASE_URL;

export const jsonPlaceholderApi = {
	async getTodos() {
		const response = await fetch(`${BASE_URL}/todos?_limit=5`);
		if (!response.ok) {
			throw new Error('Ошибка чтения данных');
		}
		return response.json();
	},
};
