import { useDispatch, useSelector } from 'react-redux';
import { cellClick } from '../../actions';
import { FieldLayout } from '../../components';
import { selectWinningCells } from '../../selectors/select-winnig-cells';

export const Field = () => {
	const dispatch = useDispatch();

	const winningCells = useSelector(selectWinningCells);

	const handleClick = (rowIndex, colIndex) => {
		dispatch(cellClick(rowIndex, colIndex));
	};

	const isWinningCell = (rowIndex, colIndex) => {
		return winningCells.some(
			([winRow, winCol]) => winRow === rowIndex && winCol === colIndex,
		);
	};

	return <FieldLayout onClick={handleClick} isWinningCell={isWinningCell} />;
};
