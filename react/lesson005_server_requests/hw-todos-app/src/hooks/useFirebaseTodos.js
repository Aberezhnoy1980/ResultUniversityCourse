import { useState, useEffect } from 'react';

export const useFirebaseTodos = (firebaseService) => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		const unsubscribe = firebaseService.subscribeToTodos((firebaseTodos) => {
			setTodos(firebaseTodos);
			setLoading(false);
			setError(null);
		});

		return () => unsubscribe();
	}, [firebaseService]);

	const addTodo = async (title) => {
		try {
			await firebaseService.createTodo({ title });
		} catch (err) {
			setError(err.message);
		}
	};

	const toggleTodo = async (id) => {
		const todo = todos.find((t) => t.id === id);

		try {
			await firebaseService.updateTodo(id, {
				completed: !todo.completed,
			});
		} catch (err) {
			setError(err.message);
		}
	};

	const updateTodoTitle = async (id, newTitle) => {
		try {
			await firebaseService.updateTodo(id, { title: newTitle });
		} catch (err) {
			setError(err.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			await firebaseService.deleteTodo(id);
		} catch (err) {
			setError(err.message);
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
	};
};
