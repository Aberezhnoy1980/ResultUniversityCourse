import { RestartBtnLayout } from '../../components';
import { store } from '../../store';
import { restartGame } from '../../gameReducer';
import PropTypes from 'prop-types';

export const RestartBtn = () => {
	const handleRestart = () => {
		store.dispatch(restartGame());
	};
	return <RestartBtnLayout onClick={handleRestart}>Новая игра</RestartBtnLayout>;
};

RestartBtn.propTypes = {
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setField: PropTypes.func,
	setWinningCells: PropTypes.func,
};
