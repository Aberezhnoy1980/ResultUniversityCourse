import { useState, useMemo, useContext } from 'react';
import { TodoList, TodoForm, TodoItem } from '../todo';
import { Loader } from '../ui';
import { useDebounce } from '../../hooks';
import styles from './JsonServerTodoApp.module.css';
import { TodoCRUDContext } from '../../todo-context';

export const JsonServerTodoApp = () => {
	const { todos, loading, error } = useContext(TodoCRUDContext);

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
		<TodoList
			todos={filteredAndSortedTodos}
			title="JSON server todos (CRUD)"
			emptyMessage={debouncedSearchTerm ? 'Ничего не найдено' : 'Список дел пуст'}
			renderTodo={(todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
				/>
			)}
		>
			{error && <div className={styles.error}>Error: {error}</div>}

			<TodoForm />

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
		</TodoList>
	);
};
