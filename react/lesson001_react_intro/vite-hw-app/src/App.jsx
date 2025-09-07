import ReactLogo from './assets/react.svg?react';
import './App.css';
import Dater from './components/DateComponent';
import { createElement } from 'react';

// Декларативный стиль
// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<ReactLogo />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<Dater />
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	return createElement('div', {
		className: 'App',
		children: createElement('header', {
			className: 'App-header',
			children: [
				createElement(ReactLogo, { key: 'logo' }),
				createElement('p', {
					key: 'text',
					children: [
						'Edit ',
						createElement('code', {
							key: 'code',
							children: 'src/App.js',
						}),
						' and save to reload.',
					],
				}),
				createElement('a', {
					key: 'link',
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
					children: 'Learn React',
				}),
				createElement(Dater, { key: 'dater' }),
			],
		}),
	});
};
