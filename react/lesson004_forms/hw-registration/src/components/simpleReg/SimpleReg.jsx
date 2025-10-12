import { useState } from 'react';
import { sendData, validatePassword } from '../../utils';
import styles from './SimpleReg.module.css';
import { calculatePasswordStrength } from '../../utils/calculatePasswordStrength';

const initialState = {
	email: '',
	pass: '',
	repeatPass: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [passwordStrength, setPasswordStrength] = useState('');

	return {
		getState: () => state,
		getErrors: () => errors,
		getPasswordStrength: () => passwordStrength,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		updateErrors: (fieldName, message) => {
			setErrors((prev) => ({
				...prev,
				[fieldName]: message,
			}));
		},
		clearError: (fieldName) => {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[fieldName];
				return newErrors;
			});
		},
		setPasswordStrength: (strength) => setPasswordStrength(strength),
		resetState: () => {
			setState(initialState);
			setErrors({});
			setPasswordStrength('');
		},
	};
};

export const SimpleReg = () => {
	const {
		getState,
		getErrors,
		getPasswordStrength,
		updateState,
		updateErrors,
		clearError,
		setPasswordStrength,
		resetState,
	} = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		const state = getState();

		let hasErrors = false;

		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (!emailPattern.test(state.email)) {
			updateErrors('email', 'Введите корректный email адрес');
			hasErrors = true;
		}

		const passwordErrors = validatePassword(state.pass);
		if (passwordErrors.length > 0) {
			updateErrors(
				'pass',
				`Пароль должен содержать: ${passwordErrors.join(', ')}`,
			);
			hasErrors = true;
		}

		if (state.pass !== state.repeatPass) {
			updateErrors('repeatPass', 'Пароли не совпадают');
			hasErrors = true;
		}

		if (!hasErrors) {
			sendData(state);
		}
	};

	const { email, pass, repeatPass } = getState();
	const errors = getErrors();
	const passwordStrength = getPasswordStrength();

	const onChange = ({ target }) => {
		const newValue = target.value;
		const fieldName = target.name;

		updateState(target.name, target.value);

		const onChangeEmailPattern = /^[a-zA-Z0-9@._%+-]*$/;

		if (fieldName === 'email') {
			if (!onChangeEmailPattern.test(newValue)) {
				updateErrors('email', 'Недопустимый символ адреса электронной почты.');
			} else {
				clearError('email');
			}
		}

		if (fieldName === 'pass') {
			const strength = calculatePasswordStrength(newValue);
			setPasswordStrength(strength);

			if (newValue.length > 0) {
				const passwordErrors = validatePassword(newValue);
				if (passwordErrors.length > 0) {
					updateErrors(
						'pass',
						`Пароль должен содержать: ${passwordErrors.join(', ')}`,
					);
				} else {
					clearError('pass');
				}
			} else {
				clearError('pass');
				setPasswordStrength('');
			}

			if (repeatPass && newValue !== repeatPass) {
				updateErrors('repeatPass', 'Пароли не совпадают');
			} else if (repeatPass && newValue == repeatPass) {
				clearError('repeatPass');
			}
		}

		if (fieldName === 'repeatPass') {
			if (pass && newValue !== pass) {
				updateErrors('repeatPass', 'Пароли не совпадают');
			} else {
				clearError('repeatPass');
			}
		}
	};

	const onBlur = ({ target }) => {
		const fieldName = target.name;
		const onBlurEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (fieldName === 'email') {
			if (email === '') {
				updateErrors('email', 'Email обязателен для заполнения');
			} else if (!onBlurEmailPattern.test(email)) {
				updateErrors('email', 'Введите корректный email адрес');
			} else {
				clearError('email');
			}
		}

		if (fieldName === 'pass' && pass.length > 0) {
			const passwordErrors = validatePassword(pass);
			if (passwordErrors > 0) {
				updateErrors(
					'pass',
					`Пароль должен содержать: ${passwordErrors.join(', ')}`,
				);
			}
		}

		if (fieldName === 'repeatPass') {
			if (pass && repeatPass !== pass) {
				updateErrors('repeatPass', 'Пароли не совпадают');
			}
		}
	};

	const hasErrors = Object.keys(errors).length > 0;

	return (
		<div className={styles.formValidation}>
			<header className={styles.regHeader}>
				Форма регистрации на основе DOM-елемента form
			</header>
			<form className={styles.regForm} onSubmit={onSubmit}>
				{errors.email && (
					<div className={styles.errorLabel}>{errors.email}</div>
				)}
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Почта"
					onChange={onChange}
					onBlur={onBlur}
					className={errors.email ? styles.errorInput : ''}
				/>
				<div className={styles.passwordSection}>
					{errors.pass && (
						<div className={styles.errorLabel}>{errors.pass}</div>
					)}
					{passwordStrength && (
						<div
							className={`${styles.strengthIndicator} ${styles[passwordStrength]}`}
						>
							Сила пароля: {passwordStrength}
						</div>
					)}
					<input
						type="password"
						name="pass"
						value={pass}
						placeholder="Пароль (минимум 8 символов: строчные и прописные буквы, цифры и спецсимволы)"
						onChange={onChange}
						onBlur={onBlur}
						className={errors.pass ? styles.errorInput : ''}
					/>
				</div>
				{errors.repeatPass && (
					<div className={styles.errorLabel}>{errors.repeatPass}</div>
				)}
				<input
					type="password"
					name="repeatPass"
					value={repeatPass}
					placeholder="Повтор пароля"
					onChange={onChange}
					onBlur={onBlur}
					className={errors.repeatPass ? styles.errorInput : ''}
				/>
				<button type="button" onClick={resetState}>
					Сброс
				</button>
				<button type="submit" disabled={hasErrors}>
					Отправить
				</button>
			</form>
		</div>
	);
};
