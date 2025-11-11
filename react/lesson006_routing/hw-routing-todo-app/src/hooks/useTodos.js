import { useState, useEffect, useCallback } from 'react';

export const useTodos = (apiService) => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const loadTodos = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await apiService.getTodos();
			setTodos(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}, [apiService]);

	useEffect(() => {
		loadTodos();
	}, [loadTodos]);

	const addTodo = async (title) => {
		setError(null);
		try {
			const newTodo = await apiService.createTodo({ title });
			setTodos((prev) => [...prev, newTodo]);
			return newTodo;
		} catch (err) {
			setError(err.message);
		}
	};

	const toggleTodo = async (id) => {
		setError(null);
		const todo = todos.find((t) => t.id === id);
		if (!todo) {
			setError('Задача не найдена');
			return;
		}

		try {
			const updatedTodo = await apiService.updateTodo(id, {
				completed: !todo.completed,
			});
			setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
			return updatedTodo;
		} catch (err) {
			setError(err.message);
		}
	};

	const clearError = () => setError(null);

	return {
		todos,
		loading,
		error,
		addTodo,
		toggleTodo,
		refetch: loadTodos,
		clearError,
	};
};
