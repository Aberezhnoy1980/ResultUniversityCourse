import { useState, useEffect } from 'react';
import ReactUseEffectApp from './components/react_docs_example/ReactUseEffectApp';
import styles from './App.module.css';
import { BackendMockApp } from './components/backend_mock/BackendMockApp';
import { JsonServerApp } from './components/json_server/JsonServerApp';
import { FirebaseServerApp } from './components/firebase_server/FirebaseServerApp';

export const App = ({ siteUrl }) => {
	const [products, setProducts] = useState([]);
	const [counter, setCounter] = useState(0);

	const onClickHandler = () => {};

	useEffect(() => {
		console.log('Первый -', counter);

		return () => console.log('Второй -', counter);
	}, [counter]);

	// Пример этапа жизненного цикла компонента "размонтирование"
	useEffect(() => {
		document.addEventListener('click', onClickHandler);

		return () => document.removeEventListener('click', onClickHandler);
	}, [siteUrl]);

	// Пример этапа жизненного цикла компонента "монтирование"
	useEffect(() => {
		fetch('https://mocki.io/v1/d44ed46a-0912-4b15-84d3-6ee08874647d')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			});
	}, [siteUrl]);

	return (
		<div className={styles.app}>
			{products.map(({ id, name, price }) => (
				<div key={id}>
					{siteUrl}
					{name} - {price}
				</div>
			))}
			<button onClick={() => setCounter(counter + 1)}>+1</button>
			<ReactUseEffectApp />
			<BackendMockApp />
			<JsonServerApp />
			<FirebaseServerApp />
		</div>
	);
};

export default App;
