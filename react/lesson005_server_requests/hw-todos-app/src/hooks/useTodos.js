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
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [apiService]);

	useEffect(() => {
		loadTodos();
	}, [loadTodos]);

	const addTodo = async (title) => {
		try {
			const newTodo = await apiService.createTodo({ title });
			setTodos((prev) => [...prev, newTodo]);
		} catch (err) {
			setError(err.message);
		}
	};

	const toggleTodo = async (id) => {
		const todo = todos.find((t) => t.id === id);
		try {
			const updatedTodo = await apiService.updateTodo(id, {
				completed: !todo.completed,
			});
			setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
		} catch (err) {
			setError(err.message);
		}
	};

	const updateTodoTitle = async (id, newTitle) => {
		try {
			const updatedTodo = await apiService.updateTodo(id, {
				title: newTitle,
			});
			setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
		} catch (err) {
			setError(err.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			await apiService.deleteTodo(id);
			setTodos((prev) => prev.filter((t) => t.id !== id));
		} catch (err) {
			setError(err.mesasge);
		}
	};

	return {
		todos,
		loading,
		error,
		addTodo,
		toggleTodo,
		updateTodoTitle,
		deleteTodo,
		refetch: loadTodos,
	};
};
