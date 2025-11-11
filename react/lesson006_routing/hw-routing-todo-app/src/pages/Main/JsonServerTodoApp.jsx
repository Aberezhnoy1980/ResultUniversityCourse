import { useState, useMemo } from 'react';
import { TodoList, TodoForm } from '../../components/todo';
import { Loader } from '../../components/ui';
import { useTodos, useDebounce } from '../../hooks';
import { jsonServerApi } from '../../services';
import styles from './JsonServerTodoApp.module.css';

export const JsonServerTodoApp = () => {
	const { todos, loading, error, addTodo, toggleTodo, refetch, clearError } =
		useTodos(jsonServerApi);

	const [searchTerm, setSearchTerm] = useState('');
	const [sortAlhpabetically, setSortAlphabetically] = useState(false);

	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	const filteredAndSortedTodos = useMemo(() => {
		let result = todos;

		if (debouncedSearchTerm) {
			result = result.filter((todo) =>
				todo.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
			);
		}

		if (sortAlhpabetically) {
			result = [...result].sort((a, b) => a.title.localeCompare(b.title));
		}

		return result;
	}, [todos, debouncedSearchTerm, sortAlhpabetically]);

	if (loading && todos.length === 0) return <Loader />;

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>JSON server todos (CRUD)</h2>

			<TodoForm onAddTodo={addTodo} />

			<div className={styles.controls}>
				<input
					type="text"
					placeholder="Поиск дел..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={styles.searchInput}
				/>

				<button
					onClick={() => setSortAlphabetically(!sortAlhpabetically)}
					className={`${styles.sortButton} ${
						sortAlhpabetically ? styles.active : ''
					}`}
				>
					{sortAlhpabetically ? 'Сортировка: Вкл' : 'Сортировка: Выкл'}
				</button>
			</div>

			{error ? (
				<div className={styles.error}>
					Ошибка: {error}
					<button onClick={clearError} className={styles.clearButton}>
						×
					</button>
					<button onClick={refetch} className={styles.retryButton}>
						Попробовать снова
					</button>
				</div>
			) : (
				<TodoList
					todos={filteredAndSortedTodos}
					onToggle={toggleTodo}
					emptyMessage={
						debouncedSearchTerm ? 'Ничего не найдено' : 'Список дел пуст'
					}
				/>
			)}
		</div>
	);
};
