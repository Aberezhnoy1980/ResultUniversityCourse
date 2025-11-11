import { useParams, useNavigate } from 'react-router-dom';
import { useTodo } from '../../hooks';
import { jsonServerApi } from '../../services';
import { TodoItemDetail } from '../../components/todo';
import { Loader } from '../../components/ui';
import styles from './TodoItemPage.module.css';

export const TodoItemPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		todo,
		loading,
		actionError,
		updateTodo,
		deleteTodo,
		refetch,
		clearActionError,
	} = useTodo(jsonServerApi, id);

	const handleToggle = async () => {
		await updateTodo({ completed: !todo.completed });
	};

	const handleUpdateTitle = async (newTitle) => {
		return await updateTodo({ title: newTitle });
	};

	const handleDelete = async () => {
		await deleteTodo();
	};

	if (loading) {
		return (
			<div className={styles.container}>
				<Loader />
			</div>
		);
	}

	if (!todo) {
		return (
			<div className={styles.container}>
				<div className={styles.error}>Задача не найдена</div>
				<div className={styles.buttonGroup}>
					<button onClick={refetch} className={styles.retryButton}>
						Попробовать снова
					</button>
					<button onClick={() => navigate('/')} className={styles.homeButton}>
						На главную
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<button onClick={() => navigate(-1)} className={styles.backButton}>
					← Назад
				</button>
				<h1>Задача #{todo.id}</h1>
			</div>

			{actionError && (
				<div className={styles.actionError}>
					Ошибка: {actionError}
					<button onClick={clearActionError} className={styles.clearButton}>
						×
					</button>
				</div>
			)}

			<TodoItemDetail
				todo={todo}
				onToggle={handleToggle}
				onUpdate={handleUpdateTitle}
				onDelete={handleDelete}
			/>
		</div>
	);
};
