import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoList, TodoForm, TodoItem } from '../../todo';
import { Loader } from '../../ui';
import { useDebounce } from '../../../hooks';
import {
	selectTodos,
	selectTodosLoading,
	selectError,
	selectActionLoading,
	selectSearchTerm,
	selectSortAlphabetically,
	setupTodosSubscription,
	addTodoAsync,
	toggleTodoAsync,
	updateTodoTitleAsync,
	deleteTodoAsync,
	searchSetTerm,
	searchToggleSort,
} from '../../../store';
import styles from './FirebaseTodoApp.module.css';

export const FirebaseTodoApp = () => {
	const dispatch = useDispatch();

	const todos = useSelector(selectTodos);
	const loading = useSelector(selectTodosLoading);
	const error = useSelector(selectError);
	const actionLoading = useSelector(selectActionLoading);
	const searchTerm = useSelector(selectSearchTerm);
	const sortAlphabetically = useSelector(selectSortAlphabetically);

	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	useEffect(() => {
		const unsubscribe = setupTodosSubscription(dispatch);
		return () => {
			if (typeof unsubscribe === 'function') {
				unsubscribe();
			}
		};
	}, [dispatch]);

	const filteredAndSortTodos = useMemo(() => {
		let result = todos;

		if (debouncedSearchTerm) {
			result = result.filter((todo) =>
				todo.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
			);
		}

		if (sortAlphabetically) {
			result = [...result].sort((a, b) => a.title.localeCompare(b.title));
		}

		return result;
	}, [todos, debouncedSearchTerm, sortAlphabetically]);

	const handleAddTodo = (title) => {
		dispatch(addTodoAsync(title));
	};

	const handleToggleTodo = (id) => {
		dispatch(toggleTodoAsync(id));
	};

	const handleUpdateTodo = (id, newTitle) => {
		dispatch(updateTodoTitleAsync(id, newTitle));
	};

	const handleDeleteTodo = (id) => {
		dispatch(deleteTodoAsync(id));
	};

	const handleSearchChange = (e) => {
		dispatch(searchSetTerm(e.target.value));
	};

	const handleSortToggle = () => {
		dispatch(searchToggleSort());
	};

	if (loading && todos.length === 0) return <Loader />;

	return (
		<TodoList
			todos={filteredAndSortTodos}
			title="Firebase Realtime Todos"
			emptyMessage={debouncedSearchTerm ? 'Ничего не найдено' : 'Список дел пуст'}
			renderTodo={(todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggle={handleToggleTodo}
					onUpdate={handleUpdateTodo}
					onDelete={handleDeleteTodo}
					disabled={actionLoading}
				/>
			)}
		>
			{error && (
				<div className={styles.error} role="alert">
					<strong>Ошибка:</strong> {error}
				</div>
			)}

			<TodoForm onAddTodo={handleAddTodo} disabled={actionLoading} />

			<div className={styles.controls}>
				<input
					type="text"
					placeholder="Поиск дел..."
					value={searchTerm}
					onChange={handleSearchChange}
					className={styles.searchInput}
				/>

				<button
					onClick={handleSortToggle}
					className={`${styles.sortButton} ${
						sortAlphabetically ? styles.active : ''
					}`}
				>
					{sortAlphabetically ? 'Сортировка: Вкл' : 'Сортировка: Выкл'}
				</button>
			</div>
		</TodoList>
	);
};
