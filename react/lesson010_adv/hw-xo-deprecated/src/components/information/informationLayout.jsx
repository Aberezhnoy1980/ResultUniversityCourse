import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<span>{this.props.children}</span>
			</div>
		);
	}
}

InformationLayout.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
};
