import { Component, useState, useEffect } from 'react';
import styles from './ScreenWidthApp.module.css';

export const ScreenWidthApp = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log(message);

		const updateScreenWidth = () => setScreenWidth(window.innerWidth);

		window.addEventListener('resize', updateScreenWidth);

		return () => window.removeEventListener('resize', updateScreenWidth);
	}, []);

	return (
		<div className={styles.app}>
			{message}: {screenWidth}
		</div>
	);
};

export class OldScreenWidthApp extends Component {
	// state = window.innerWidth; как вариант, можно объявить состояние здесь

	constructor(props) {
		super(props);

		// console.log(props.message); // перед монтированием (useLayoutEffect для функционального компонента)

		this.state = {
			screenWidth: window.innerWidth,
		}; // но обычно объявляют здесь

		// this.updateScreenWidth = this.updateScreenWidth.bind(this);
	}

	updateScreenWidth = () => {
		this.setState({ screenWidth: window.innerWidth });
	}

	componentDidMount() {
		console.log(this.props.message);

		window.addEventListener('resize', this.updateScreenWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenWidth);
	}

	render() {
		return (
			<div className={styles.app}>
				{/* {message}: {screenWidth} */}
				{this.props.message}: {this.state.screenWidth}
			</div>
		);
	}
}
