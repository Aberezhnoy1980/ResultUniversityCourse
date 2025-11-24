import styles from './TodoList.module.css';

export const TodoList = ({
	todos,
	title,
	children,
	renderTodo,
	emptyMessage = 'Список пуст',
}) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			{children}

			{todos.length === 0 ? (
				<div className={styles.empty}>{emptyMessage}</div>
			) : (
				<ul className={styles.list}>
					{todos.map((todo) =>
						renderTodo ? (
							renderTodo(todo)
						) : (
							<li key={todo.id} className={styles.item}>
								<span
									className={todo.completed ? styles.completed : ''}
								>
									{todo.title}
								</span>
							</li>
						),
					)}
				</ul>
			)}
		</div>
	);
};
