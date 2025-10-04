import { RestartBtnLayout } from '../../components';
import { fieldInit } from '../../utils';
import PropTypes from 'prop-types';

export const RestartBtn = ({
	setIsDraw,
	setIsGameEnded,
	setCurrentPlayer,
	setField,
	setWinningCells,
}) => {
	const restartGame = () => {
		setIsDraw(false);
		setIsGameEnded(false);
		setCurrentPlayer('X');
		setField(fieldInit);
		setWinningCells([]);
	};
	return <RestartBtnLayout onClick={restartGame}>Новая игра</RestartBtnLayout>;
};

RestartBtn.propTypes = {
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setField: PropTypes.func,
	setWinningCells: PropTypes.func,
}
