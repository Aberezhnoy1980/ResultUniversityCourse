import { store } from '../../../../store';

export const UserPersonalInfo = () => {
	const { name, age } = store.getState();

	const onUserUpdate = () => {
		const { name, email, phone } = store.getState();
		const newUserData = { name, age: 45, email, phone };
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	const onUserAgeDecrease = () => {
		const { age } = store.getState();
		const newAge = age - 1;
		store.dispatch({ type: 'SET_USER_AGE', payload: newAge });
	};

	const onUserAgeIncrease = () => {
		const { age } = store.getState();
		store.dispatch({ type: 'SET_USER_AGE', payload: age + 1 });
	};

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>
				<button onClick={onUserAgeIncrease}>+</button>
				Возраст: {age}
				<button onClick={onUserAgeDecrease}>-</button>
			</div>
			<button onClick={onUserUpdate}>Обновить пользователя</button>
		</div>
	);
};
