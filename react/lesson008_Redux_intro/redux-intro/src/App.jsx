import { useEffect } from 'react';
import { Header, UserBlock } from './components';
import redux from './assets/redux.png';
import flux from './assets/flux.png';
import { store } from './store';
import styles from './App.module.css';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Иван',
	age: 23,
	email: 'ivan@mail.ru',
	phone: '+7 999-999-99-99',
});

const getAnotherUserFromServer = () => ({
	id: 'b22200',
	name: 'Васиий',
	age: 27,
	email: 'vasiliy@mail.ru',
	phone: '+7 111-111-11-11',
});

function App() {

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });

	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		store.dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<div className={styles.app}>
			<div className={styles.imgContainer}></div>
			<img src={redux} alt="drilling props" width="500px" />
			<img src={flux} alt="flux" width="500px" />
			<hr />
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
}

export default App;
