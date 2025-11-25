import { FieldLayout } from '../../components';
import { useStore } from '../hooks/useStore';
import { store } from '../../store';
import { cellClick } from '../../gameReducer';
import PropTypes from 'prop-types';

export const Field = () => {
	const { field, winningCells = [] } = useStore();

	const handleClick = (rowIndex, colIndex) => {
		store.dispatch(cellClick(rowIndex, colIndex));
	};

	const isWinningCell = (rowIndex, colIndex) => {
		return winningCells.some(
			([winRow, winCol]) => winRow === rowIndex && winCol === colIndex,
		);
	};

	return (
		<FieldLayout
			field={field}
			onClick={handleClick}
			isWinningCell={isWinningCell}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
	setField: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	winningCells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
	setWinningCells: PropTypes.func,
};
