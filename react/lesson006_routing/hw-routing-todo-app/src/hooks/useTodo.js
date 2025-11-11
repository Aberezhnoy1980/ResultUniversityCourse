import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useTodo = (apiService, id) => {
	const [todo, setTodo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [actionError, setActionError] = useState(null);
	const navigate = useNavigate();

	const fetchTodo = useCallback(async () => {
		if (!id) {
			navigate('/task-not-exists');
			return;
		}

		setLoading(true);
		setActionError(null);
		try {
			const todoData = await apiService.getTodoById(id);
			setTodo(todoData);
		} catch (err) {
			console.error('Error fetching todo:', err);

			if (err.message.includes('Задача не найдена')) {
				navigate('/task-not-exists');
			} else if (
				err.message.includes('Ошибка чтения данных') ||
				err.message.includes('Нет связи с сервером')
			) {
				navigate('/task-load-error');
			} else {
				setActionError(err.message);
			}
		} finally {
			setLoading(false);
		}
	}, [apiService, id, navigate]);

	useEffect(() => {
		fetchTodo();
	}, [fetchTodo]);

	const updateTodo = async (updates) => {
		setActionError(null);
		try {
			const updatedTodo = await apiService.updateTodo(id, updates);
			setTodo(updatedTodo);
			return true;
		} catch (err) {
			console.error('Error updating todo:', err);

			if (err.status === 404 || err.type === 'NOT_FOUND') {
				navigate('/task-not-exists');
			} else {
				setActionError(err.message);
			}
			return false;
		}
	};

	const deleteTodo = async () => {
		setActionError(null);
		try {
			await apiService.deleteTodo(id);
			navigate('/');
			return true;
		} catch (err) {
			console.error('Error deleting todo:', err);

			if (err.status === 404 || err.type === 'NOT_FOUND') {
				navigate('/task-not-exists');
			} else {
				setActionError(err.message);
			}
			return false;
		}
	};

	const clearActionError = () => setActionError(null);

	return {
		todo,
		loading,
		actionError,
		updateTodo,
		deleteTodo,
		refetch: fetchTodo,
		clearActionError,
	};
};
