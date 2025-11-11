import { Link } from 'react-router-dom';
import styles from './ErrorPages.module.css';

export const NotFound = () => (
	<div className={styles.errorContainer}>
		<div className={styles.errorContent}>
			<h1 className={styles.errorCode}>404</h1>
			<h2 className={styles.errorTitle}>Страница не найдена</h2>
			<p className={styles.errorMessage}>
				Извините, запрашиваемая страница не существует.
			</p>
			<Link to="/" className={styles.homeButton}>
				Вернуться на главную
			</Link>
		</div>
	</div>
);
