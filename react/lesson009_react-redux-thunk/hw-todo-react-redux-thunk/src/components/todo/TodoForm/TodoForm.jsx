import { useState } from 'react';
import styles from './TodoForm.module.css';

export const TodoForm = ({ onAddTodo, disabled = false }) => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim() && !disabled) {
			onAddTodo(title.trim());
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
				disabled={disabled}
			/>
			<button type="submit" className={styles.button} disabled={disabled}>
				{disabled ? 'Добавление...' : 'Добавить'}
			</button>
		</form>
	);
};
