import styles from './TodoList.module.css';

export const TodoList = ({ todos, title, children }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			{children}
			<ul className={styles.list}>
				{todos.map(({ id, title, completed }) => (
					<li key={id} className={styles.item}>
						<span className={completed ? styles.completed : ''}>
							{title}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
