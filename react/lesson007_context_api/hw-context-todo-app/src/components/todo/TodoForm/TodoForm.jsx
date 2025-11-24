import { useContext, useState } from 'react';
import { TodoCRUDContext } from '../../../todo-context';
import styles from './TodoForm.module.css';

export const TodoForm = () => {
	const { addTodo } = useContext(TodoCRUDContext);
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim()) {
			addTodo(title.trim());
			setTitle('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Добавить новое дело..."
				className={styles.input}
			/>
			<button type="submit" className={styles.button}>
				Добавить
			</button>
		</form>
	);
};
