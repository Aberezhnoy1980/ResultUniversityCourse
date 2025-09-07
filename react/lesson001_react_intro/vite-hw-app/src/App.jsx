import ReactLogo from './assets/react.svg?react';
import './App.css';
import Dater from './components/DateComponent';

// Декларативный стиль
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<ReactLogo />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Dater />
			</header>
		</div>
	);
};
