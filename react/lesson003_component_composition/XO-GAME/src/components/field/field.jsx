import { FieldLayout } from '../../components';
import { checkWin, checkIsDraw } from '../../utils';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	currentPlayer,
	setCurrentPlayer,
	winningCells,
	setWinningCells,
}) => {
	const handleClick = (rowIndex, colIndex) => {
		const newField = field.map((row) => [...row]);
		if (!newField[rowIndex][colIndex] && !isGameEnded) {
			newField[rowIndex][colIndex] = currentPlayer;
			setField(newField);

			if (checkIsDraw(newField)) {
				setIsDraw(true);
			}

			const winResult = checkWin(newField, currentPlayer);
			if (winResult?.isWin) {
				setIsGameEnded(true);
				setWinningCells(winResult.cells);
				return;
			}

			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
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
