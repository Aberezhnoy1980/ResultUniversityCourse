import { Information, Field, RestartBtn } from '../../components';
import styles from './gameLayout.module.css';

export const GameLayout = (props) => {
	return (
		<div className={styles.gameContainer}>
			<Information {...props} />
			<Field {...props} />
			<RestartBtn {...props} />
		</div>
	);
};
