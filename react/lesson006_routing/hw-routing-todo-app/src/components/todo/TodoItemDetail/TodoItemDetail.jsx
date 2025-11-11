import { useState, useEffect } from 'react';
import styles from './TodoItemDetail.module.css';

export const TodoItemDetail = ({ todo, onToggle, onUpdate, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(todo.title);
	const [saveError, setSaveError] = useState(null);

	useEffect(() => {
		setEditTitle(todo.title);
	}, [todo.title]);

	const handleSave = async () => {
		if (editTitle.trim() && editTitle !== todo.title) {
			const success = await onUpdate(editTitle.trim());
			if (success) {
				setIsEditing(false);
				setSaveError(null);
			} else {
				setSaveError('Не удалось сохранить изменения');
			}
		} else {
			setIsEditing(false);
			setSaveError(null);
		}
	};

	const handleCancel = () => {
		setEditTitle(todo.title);
		setIsEditing(false);
		setSaveError(null);
	};

	return (
		<div className={`${styles.todoCard} ${todo.completed ? styles.completed : ''}`}>
			<div className={styles.statusSection}>
				<label className={styles.checkboxLabel}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={onToggle}
						className={styles.checkbox}
					/>
					<span className={styles.checkmark}></span>
					Статус: {todo.completed ? 'Выполнено' : 'В процессе'}
				</label>
				<div className={styles.createdAt}>
					Создано: {new Date(todo.createdAt).toLocaleDateString()}
				</div>
			</div>

			<div className={styles.contentSection}>
				{isEditing ? (
					<div className={styles.editContainer}>
						<textarea
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
							className={styles.editInput}
							rows="3"
							autoFocus
						/>
						<div className={styles.editActions}>
							<button onClick={handleSave} className={styles.saveButton}>
								Сохранить
							</button>
							<button
								onClick={handleCancel}
								className={styles.cancelButton}
							>
								Отмена
							</button>
						</div>
						{saveError && (
							<div className={styles.errorMessage}>{saveError}</div>
						)}
					</div>
				) : (
					<>
						<div
							className={styles.title}
							onDoubleClick={() => setIsEditing(true)}
						>
							{todo.title}
						</div>
						<div className={styles.actions}>
							<button
								onClick={() => setIsEditing(true)}
								className={styles.editButton}
							>
								Редактировать
							</button>
							<button onClick={onDelete} className={styles.deleteButton}>
								Удалить
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
