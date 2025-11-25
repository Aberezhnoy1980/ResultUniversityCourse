import { useStore } from '../../../../hooks/useStore';
import { store } from '../../../../store';

export const UserPersonalInfo = () => {
	const { name, age, email, phone } = useStore();

	const onUserUpdate = () => {
		const newUserData = { name, age: 45, email, phone };
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	const onUserAgeDecrease = () => {
		const newAge = age - 1;
		store.dispatch({ type: 'SET_USER_AGE', payload: newAge });
	};

	const onUserAgeIncrease = () => {
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
