import styles from './fieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onClick, isWinningCell }) => {
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
	field: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
	onClick: PropTypes.func,
	isWinningCell: PropTypes.func,
};
