import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from '../../components';

export class InformationContainer extends Component {
	getInfoMsg = () => {
		if (this.props.isGameEnded) {
			return `Победа: ${this.props.currentPlayer}`;
		}
		if (this.props.isDraw) {
			return 'Ничья';
		}
		return `Ходит: ${this.props.currentPlayer}`;
	};

	getContainerClass = () => {
		const baseClasses = 'flex justify-center p-2.5 text-center text-2xl font-bold rounded-lg transition-all';
		if (this.props.isGameEnded) {
			return `${baseClasses} bg-green-500 text-white shadow-md`;
		}
		if (this.props.isDraw) {
			return `${baseClasses} bg-orange-500 text-white`;
		}
		return `${baseClasses} text-rebeccapurple`;
	};

	render() {
		return (
			<InformationLayout className={this.getContainerClass()}>
				{this.getInfoMsg()}
			</InformationLayout>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
