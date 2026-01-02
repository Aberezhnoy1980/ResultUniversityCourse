import { useSelector } from 'react-redux';
import styles from './fieldLayout.module.css';
import PropTypes from 'prop-types';
import { selectField } from '../../selectors/select-field';

export const FieldLayout = ({ isWinningCell, onClick }) => {
	const field = useSelector(selectField);

	return (
		<div className={styles.fieldContainer}>
			{field.map((row, rowIndex) =>
				row.map((cell, colIndex) => {
					const cellClass = `${styles.gridItem} ${
						isWinningCell(rowIndex, colIndex) ? styles.winCell : ''
					}`;

					return (
						<div
							key={`${rowIndex}-${colIndex}`}
							className={cellClass}
							onClick={() => onClick(rowIndex, colIndex)}
						>
							{cell}
						</div>
					);
				}),
			)}
		</div>
	);
};

FieldLayout.propTypes = {
	onClick: PropTypes.func,
	isWinningCell: PropTypes.func,
};
