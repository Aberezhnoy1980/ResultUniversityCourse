import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, onToggle, onUpdate, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(todo.title);

	const handleSave = () => {
		if (editTitle.trim()) {
			onUpdate(todo.id, editTitle.trim());
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
				onChange={() => onToggle(todo.id)}
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
							onClick={() => onDelete(todo.id)}
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
