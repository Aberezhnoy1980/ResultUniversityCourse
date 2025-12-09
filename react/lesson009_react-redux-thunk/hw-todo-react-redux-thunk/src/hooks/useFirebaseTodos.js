import { useState, useEffect } from 'react';

export const useFirebaseTodos = (firebaseService) => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [actionLoading, setActionLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		try {
			const unsubscribe = firebaseService.subscribeToTodos((firebaseTodos) => {
				setTodos(firebaseTodos);
				setLoading(false);
				setError(null);
			});

			return () => unsubscribe();
		} catch (err) {
			setError(err.message);
			setLoading(false);
			return () => {};
		}
	}, [firebaseService]);

	const runSafeAction = async (action) => {
		setActionLoading(true);
		setError(null);
		try {
			await action();
		} catch (err) {
			const errorMessage =
				err?.message || 'Произошла ошибка при выполнении операции';
			setError(errorMessage);
		} finally {
			setActionLoading(false);
		}
	};

	const addTodo = (title) =>
		runSafeAction(() => firebaseService.createTodo({ title }));

	const toggleTodo = (id) =>
		runSafeAction(() => {
			const todo = todos.find((t) => t.id === id);
			if (!todo) {
				throw new Error('Todo not found');
			}
			return firebaseService.updateTodo(id, {
				completed: !todo.completed,
			});
		});

	const updateTodoTitle = (id, newTitle) =>
		runSafeAction(() => firebaseService.updateTodo(id, { title: newTitle }));

	const deleteTodo = (id) => runSafeAction(() => firebaseService.deleteTodo(id));

	return {
		todos,
		loading,
		actionLoading,
		error,
		addTodo,
		toggleTodo,
		updateTodoTitle,
		deleteTodo,
	};
};
