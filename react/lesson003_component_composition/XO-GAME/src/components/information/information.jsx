import { InformationLayout } from '../../components';
import PropTypes from 'prop-types';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	const infoMsg = isGameEnded
		? `Победа: ${currentPlayer}`
		: isDraw
		? 'Ничья'
		: `Ходит: ${currentPlayer}`;

	const getContainerClass = (styles) => {
		if (isGameEnded) return `${styles.infoContainer} ${styles.win}`;
		if (isDraw) return `${styles.infoContainer} ${styles.draw}`;
		return styles.infoContainer;
	};
	return (
		<InformationLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			getContainerClass={getContainerClass}
		>
			{infoMsg}
		</InformationLayout>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
