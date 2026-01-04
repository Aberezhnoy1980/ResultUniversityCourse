import { Component } from 'react';
import { connect } from 'react-redux';
import { cellClick } from '../../actions';
import { FieldLayout } from '../../components';

export class FieldContainer extends Component {
	isWinningCell = (rowIndex, colIndex) => {
		return this.props.winningCells.some(
			([winRow, winCol]) => winRow === rowIndex && winCol === colIndex,
		);
	};

	render() {
		return (
			<FieldLayout
				onClick={this.props.handleClick}
				isWinningCell={this.isWinningCell}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	winningCells: state.winningCells,
});

const mapDispatchToProps = (dispatch) => ({
	handleClick: (rowIndex, colIndex) => dispatch(cellClick(rowIndex, colIndex)),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
