import { NavLink } from 'react-router-dom';
import { TITLE_SYMBOL_LENGTH as limit, normalizeTitle } from '../../../utils';
import styles from './TodoList.module.css';

export const TodoList = ({ todos, onToggle, emptyMessage = 'Список пуст' }) => {
	return (
		<div className={styles.listContainer}>
			{todos.length === 0 ? (
				<div className={styles.empty}>{emptyMessage}</div>
			) : (
				<ul className={styles.list}>
					{todos.map((todo) => (
						<TodoListItem key={todo.id} todo={todo} onToggle={onToggle} />
					))}
				</ul>
			)}
		</div>
	);
};

const TodoListItem = ({ todo, onToggle }) => {
	const handleToggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onToggle(todo.id);
	};

	return (
		<li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
			<NavLink to={`/task/${todo.id}`} className={styles.link}>
				<button
					onClick={handleToggle}
					className={`${styles.toggleButton} ${todo.completed ? styles.checked : ''}`}
					title={todo.completed ? 'Отметить как невыполненное' : 'Отметить как выполненное'}
				>
					{todo.completed ? '✓' : '○'}
				</button>

				<span className={styles.text}>
					{todo.title.length > limit
						? normalizeTitle(todo.title, limit, '...')
						: todo.title}
				</span>

				{todo.completed && <span className={styles.statusBadge}>Выполнено</span>}
			</NavLink>
		</li>
	);
};
