import { Link } from 'react-router-dom';
import styles from './ErrorPages.module.css';

export const TodoLoadError = () => (
	<div className={styles.errorContainer}>
		<div className={styles.errorContent}>
			<h1 className={styles.errorCode}>⚠️</h1>
			<h2 className={styles.errorTitle}>Ошибка загрузки</h2>
			<p className={styles.errorMessage}>
				Не удалось загрузить задачу. Пожалуйста, попробуйте еще раз позже.
			</p>
			<div className={styles.buttonGroup}>
				<button
					onClick={() => window.location.reload()}
					className={styles.retryButton}
				>
					Попробовать снова
				</button>
				<Link to="/" className={styles.homeButton}>
					На главную
				</Link>
			</div>
		</div>
	</div>
);
