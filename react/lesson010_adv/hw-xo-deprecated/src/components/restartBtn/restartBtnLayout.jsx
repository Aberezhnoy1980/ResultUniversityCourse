import { Component } from 'react';
import PropTypes from 'prop-types';

export class RestartBtnLayout extends Component {
	render() {
		return (
			<button
				className="bg-rebeccapurple text-xl text-aliceblue p-2.5 rounded-lg"
				onClick={this.props.onClick}
			>
				{this.props.children}
			</button>
		);
	}
}

RestartBtnLayout.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
};
