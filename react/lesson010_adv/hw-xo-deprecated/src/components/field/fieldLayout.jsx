import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class FieldLayoutContainer extends Component {
	render() {
		const hasWinningCells = this.props.field.some((row, rowIndex) =>
			row.some((_, colIndex) => this.props.isWinningCell(rowIndex, colIndex))
		);

		return (
			<div className="grid grid-cols-3 grid-rows-3 gap-1 bg-black w-[310px] h-[310px]">
				{this.props.field.map((row, rowIndex) =>
					row.map((cell, colIndex) => {
						const isWinning = this.props.isWinningCell(rowIndex, colIndex);
						const cellClass = `flex justify-center items-center bg-white text-center text-black text-6xl leading-none transition-all cursor-pointer ${
							isWinning
								? 'bg-green-500 text-white text-7xl font-bold scale-110'
								: hasWinningCells
								? 'opacity-50 bg-gray-100 text-gray-500'
								: ''
						}`;

						return (
							<div
								key={`${rowIndex}-${colIndex}`}
								className={cellClass}
								onClick={() => this.props.onClick(rowIndex, colIndex)}
							>
								{cell}
							</div>
						);
					}),
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);

FieldLayoutContainer.propTypes = {
	onClick: PropTypes.func,
	isWinningCell: PropTypes.func,
};
