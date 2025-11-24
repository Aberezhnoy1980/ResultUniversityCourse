import { useContext, useState } from 'react';
import { TodoCRUDContext } from '../../../todo-context';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo }) => {
	const { toggleTodo, updateTodoTitle, deleteTodo } = useContext(TodoCRUDContext);
	const [isEditing, setIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(todo.title);

	const handleSave = () => {
		if (editTitle.trim()) {
			updateTodoTitle(todo.id, editTitle.trim());
			setIsEditing(false);
		}
	};

	const handleCancel = () => {
		setEditTitle(todo.title);
		setIsEditing(false);
	};

	return (
		<li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
				className={styles.checkbox}
			/>

			{isEditing ? (
				<div className={styles.editContainer}>
					<input
						type="text"
						value={editTitle}
						onChange={(e) => setEditTitle(e.target.value)}
						className={styles.editInput}
						autoFocus
					/>
					<button onClick={handleSave} className={styles.saveButton}>
						✓
					</button>
					<button onClick={handleCancel} className={styles.cancelButton}>
						✕
					</button>
				</div>
			) : (
				<div className={styles.content}>
					<span
						className={styles.text}
						onDoubleClick={() => setIsEditing(true)}
					>
						{todo.title}
					</span>
					<div className={styles.actions}>
						<button
							onClick={() => setIsEditing(true)}
							className={styles.editButton}
						>
							✎
						</button>
						<button
							onClick={() => deleteTodo(todo.id)}
							className={styles.deleteButton}
						>
							🗑️
						</button>
					</div>
				</div>
			)}
		</li>
	);
};
