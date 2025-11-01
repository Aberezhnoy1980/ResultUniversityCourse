import { TodoList } from '../../todo/TodoList/TodoList';
import { Loader } from '../../ui/Loader/Loader';
import { useApi } from '../../../hooks';
import { jsonPlaceholderApi } from '../../../services';
import styles from './SimpleJsonPlaceholderTodoApp.module.css';

export const SimpleJSONPlaceholderTodoApp = () => {
	const { data: todos, isLoading, error } = useApi(jsonPlaceholderApi.getTodos);

	if (isLoading) return <Loader />;

	if (error) {
		return <div className={styles.error}>Error: {error}</div>;
	}

	return (
		<TodoList todos={todos} title="JSONPlaceholder Todos">
			<p className={styles.description}>
				Data fetched from JSONPlaceholder API (read-only)
			</p>
		</TodoList>
	);
};
