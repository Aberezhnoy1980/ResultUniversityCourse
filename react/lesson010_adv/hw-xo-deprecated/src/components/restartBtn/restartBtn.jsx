import { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../actions/';
import { RestartBtnLayout } from '../../components';

export class RestartBtnContainer extends Component {
	render() {
		return (
			<RestartBtnLayout onClick={this.props.handleRestart}>
				Новая игра
			</RestartBtnLayout>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleRestart: () => dispatch(restartGame()),
});

export const RestartBtn = connect(null, mapDispatchToProps)(RestartBtnContainer);
