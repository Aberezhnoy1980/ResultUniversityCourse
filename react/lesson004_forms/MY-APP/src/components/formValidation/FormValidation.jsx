import * as yup from 'yup';
import { useState, useRef } from 'react';
import styles from './FormValidation.module.css';

const loginChangeScheme = yup
	.string()
	.matches(
		/^\w*$/i,
		'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание.',
	)
	.max(20, 'Неверный логин. Должно быть не больше 20 символов.');

const loginBlurScheme = yup
	.string()
	.min(3, 'Неверный логин! Должно жыть не менее трех символов.');

const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null;

	try {
		scheme.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join('\n');
	}

	return errorMessage;
};

export const FormValidation = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const submitButtonRef = useRef(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);
		// const regExp = /^\w*$/i;
		// let error = null;

		// if (!regExp.test(target.value)) {
		// 	error =
		// 		'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание';
		// } else if (target.value.length > 20) {
		// 	error = 'Неверный логин. Должно быть не больше 20 символов';
		// }

		const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

		setLoginError(error);

		if (target.value.length === 20) {
			submitButtonRef.current.focus();
		}
	};

	const onLoginBlur = ({ target }) => {
		// if (login.length < 3) {
		// 	setLoginError('Неверный логин! Должно жыть не менее трех символов');
		// }
		const newError = validateAndGetErrorMessage(loginBlurScheme, target.value);

		setLoginError((error) => (error ??= newError));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(login);
	};

	return (
		<div className={styles.formValidation}>
			<form onSubmit={onSubmit}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input
					type="text"
					name="login"
					value={login}
					placeholder="Логин"
					onChange={onLoginChange}
					onBlur={onLoginBlur}
				/>
				<button ref={submitButtonRef} type="submit" disabled={!!loginError}>
					Отправить
				</button>
			</form>
		</div>
	);
};
