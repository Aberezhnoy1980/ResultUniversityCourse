import { useState, useMemo } from 'react';
import { TodoList, TodoForm, TodoItem } from '../../todo';
import { Loader } from '../../ui';
import { useFirebaseTodos, useDebounce } from '../../../hooks';
import { firebaseService } from '../../../services';
import styles from './FirebaseTodoApp.module.css';

export const FirebaseTodoApp = () => {
	const {
		todos,
		loading,
		actionLoading,
		error,
		addTodo,
		toggleTodo,
		updateTodoTitle,
		deleteTodo,
	} = useFirebaseTodos(firebaseService);

	const [searchTerm, setSearchTerm] = useState('');
	const [sortAlphabetically, setSortAlphabetically] = useState(false);

	const debouncedSearchTerm = useDebounce(searchTerm, 300);

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
					onToggle={toggleTodo}
					onUpdate={updateTodoTitle}
					onDelete={deleteTodo}
					disabled={actionLoading}
				/>
			)}
		>
			{error && (
				<div className={styles.error} role="alert">
					<strong>Ошибка:</strong> {error}
				</div>
			)}

			<TodoForm onAddTodo={addTodo} disabled={actionLoading} />

			<div className={styles.controls}>
				<input
					type="text"
					placeholder="Поиск дел..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={styles.searchInput}
				/>

				<button
					onClick={() => setSortAlphabetically(!sortAlphabetically)}
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
