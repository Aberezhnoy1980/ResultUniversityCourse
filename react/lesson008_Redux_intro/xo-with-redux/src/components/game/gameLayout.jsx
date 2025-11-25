import { Information, Field, RestartBtn } from '../../components';
import styles from './gameLayout.module.css';

export const GameLayout = () => {
	return (
		<div className={styles.gameContainer}>
			<Information />
			<Field />
			<RestartBtn />
		</div>
	);
};
