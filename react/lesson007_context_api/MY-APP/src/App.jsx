import { useEffect, useReducer } from 'react';
import { Header, UserBlock } from './components';
import scheme from './assets/image.png';
import flux from './assets/flux.png';
import styles from './App.module.css';
import { AppContextProvider } from './app-context-provider';

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

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

function App() {
	// const [userData, setUserData] = useState({});
	const [userData, dispatch] = useReducer(reducer, {});

	// const dispatch = (action) => {
	// 	const newState = reducer(userData, action);

	// 	setUserData(newState);
	// };

	// useEffect(() => {
	// 	const userDataFromServer = getUserFromServer();

	// 	setUserData(userDataFromServer);
	// }, [getUserFromServer]);

	// const onUserChange = () => {
	// 	const anotherUserDataFromServer = getAnotherUserFromServer();

	// 	setUserData(anotherUserDataFromServer);
	// };

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<AppContextProvider
			themeValue={{ theme: 'light' }}
			userValue={{ userData, dispatch }}
			appConfigValue={null}
		>
			<div className={styles.app}>
				<div className={styles.imgContainer}></div>
				<img src={scheme} alt="drilling props" width="500px"/>
				<img src={flux} alt="flux" width="500px"/>
				<hr />
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContextProvider>
	);
}

export default App;
