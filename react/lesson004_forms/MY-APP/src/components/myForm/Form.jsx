import { useState } from 'react';

const initialState = {
	email: '',
	login: '',
	password: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => {
			setState(initialState);
		},
	};
};

export const MyForm = ({ sendData }) => {
	const { getState, updateState, resetState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, login, password } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<form onSubmit={onSubmit}>
			<input
				type="email"
				name="email"
				placeholder="Почта"
				value={email}
				onChange={onChange}
			/>
			<input
				type="text"
				name="login"
				placeholder="Логин"
				value={login}
				onChange={onChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Пароль"
				value={password}
				onChange={onChange}
			/>
			<button type="button" onClick={resetState}>Сброс</button>
			<button type="submit">Отправить</button>
		</form>
	);
};
