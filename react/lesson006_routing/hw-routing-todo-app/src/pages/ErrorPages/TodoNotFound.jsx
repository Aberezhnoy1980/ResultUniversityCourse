import { Link } from 'react-router-dom';
import styles from './ErrorPages.module.css';

export const TodoNotFound = () => (
	<div className={styles.errorContainer}>
		<div className={styles.errorContent}>
			<h1 className={styles.errorCode}>😕</h1>
			<h2 className={styles.errorTitle}>Задача не найдена</h2>
			<p className={styles.errorMessage}>
				Задача, которую вы ищете, не существует или была удалена.
			</p>
			<Link to="/" className={styles.homeButton}>
				Вернуться к списку задач
			</Link>
		</div>
	</div>
);
