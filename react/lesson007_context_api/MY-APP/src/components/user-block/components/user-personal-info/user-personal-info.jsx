import { use } from 'react';
// import { AppContext } from '../../../../context';
import { UserDataContext } from '../../../../user-data-context';

export const UserPersonalInfo = () => {
	const { userData, dispatch } = use(UserDataContext);
	const { name, age, email, phone } = userData;

	const onUserUpdate = () => {
		const newUserData = { name, age: 45, email, phone };
		// setUserData(newUserData);
		dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	const onUserAgeDecrease = () => {
		const newAge = age - 1;
		dispatch({ type: 'SET_USER_AGE', payload: newAge });
	};

	const onUserAgeIncrease = () => {
		dispatch({ type: 'SET_USER_AGE', payload: age + 1 });
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
