import { Component } from 'react';
import { Information, Field, RestartBtn } from '../../components';

export class GameLayout extends Component {
	render() {
		return (
			<div className="flex flex-col gap-10">
				<Information />
				<Field />
				<RestartBtn />
			</div>
		);
	}
}
