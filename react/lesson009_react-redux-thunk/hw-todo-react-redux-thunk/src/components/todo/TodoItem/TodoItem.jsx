import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({
	todo,
	onToggle,
	onUpdate,
	onDelete,
	disabled = false,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(todo.title);

	const handleSave = () => {
		if (editTitle.trim() && !disabled) {
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
				onChange={() => !disabled && onToggle(todo.id)}
				className={styles.checkbox}
				disabled={disabled}
			/>

			{isEditing ? (
				<div className={styles.editContainer}>
					<input
						type="text"
						value={editTitle}
						onChange={(e) => setEditTitle(e.target.value)}
						className={styles.editInput}
						autoFocus
						disabled={disabled}
					/>
					<button
						onClick={handleSave}
						className={styles.saveButton}
						disabled={disabled}
					>
						✓
					</button>
					<button
						onClick={handleCancel}
						className={styles.cancelButton}
						disabled={disabled}
					>
						✕
					</button>
				</div>
			) : (
				<div className={styles.content}>
					<span
						className={styles.text}
						onDoubleClick={() => !disabled && setIsEditing(true)}
					>
						{todo.title}
					</span>
					<div className={styles.actions}>
						<button
							onClick={() => !disabled && setIsEditing(true)}
							className={styles.editButton}
							disabled={disabled}
						>
							✎
						</button>
						<button
							onClick={() => !disabled && onDelete(todo.id)}
							className={styles.deleteButton}
							disabled={disabled}
						>
							🗑️
						</button>
					</div>
				</div>
			)}
		</li>
	);
};
