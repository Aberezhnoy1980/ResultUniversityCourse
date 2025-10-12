import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { sendData, calculatePasswordStrength } from '../../utils';
import styles from './ReactHookFormReg.module.css';

const regScheme = yup.object().shape({
	email: yup
		.string()
		.required('Email обязателен для заполнения')
		.matches(/^[a-zA-Z0-9@.%+-]*$/, 'Недопустимый символ адреса электронной почты')
		.test('email-format', 'Введите корректный email адрес', (value) => {
			if (!value) return true;
			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			return emailPattern.test(value);
		}),
	pass: yup
		.string()
		.min(8, 'Пароль должен содержать минимум 8 символов')
		.matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
		.matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
		.matches(/\d/, 'Пароль должен содержать хотя бы одну цифру')
		.matches(
			/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
			'Пароль должен содержать хотя бы один спецсимвол',
		)
		.required('Пароль обязателен для заполнения'),
	repeatPass: yup
		.string()
		.oneOf([yup.ref('pass')], 'Пароли не совпадают')
		.required('Повтор пароля обязателен'),
});

export const ReactHookFormReg = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty },
		reset,
		watch,
		trigger,
	} = useForm({
		resolver: yupResolver(regScheme),
		mode: 'onChange',
		reValidateMode: 'onBlur',
	});

	const onSubmit = (data) => {
		sendData(data);
	};

	const [passValue] = watch(['pass']);

	const handleReset = () => {
		reset();
		setTimeout(() => trigger(), 0);
	};

	const passwordStrength = calculatePasswordStrength(passValue);

	return (
		<div className={styles.formValidation}>
			<header className={styles.regHeader}>
				Форма регистрации на основе react-hook-form + yup
			</header>
			<form className={styles.regForm} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						type="email"
						placeholder="Почта"
						{...register('email')}
						className={errors.email ? styles.errorInput : ''}
					/>
					{errors.email && (
						<div className={styles.errorLabel}>{errors.email.message}</div>
					)}
				</div>

				<div>
					{passValue && passwordStrength && (
						<div
							className={`${styles.strengthIndicator} ${styles[passwordStrength]}`}
						>
							Сила пароля: {passwordStrength}
						</div>
					)}
					<input
						type="password"
						placeholder="Пароль (минимум 8 символов: строчные и прописные буквы, цифры и спецсимволы)"
						{...register('pass')}
						className={errors.pass ? styles.errorInput : ''}
					/>
					{errors.pass && (
						<div className={styles.errorLabel}>{errors.pass.message}</div>
					)}
				</div>

				<div>
					<input
						type="password"
						placeholder="Повтор пароля"
						{...register('repeatPass')}
						className={errors.repeatPass ? styles.errorInput : ''}
					/>
					{errors.repeatPass && (
						<div className={styles.errorLabel}>
							{errors.repeatPass.message}
						</div>
					)}
				</div>

				<button type="button" onClick={handleReset}>
					Сброс
				</button>
				<button type="submit" disabled={!isValid || !isDirty}>
					Отправить
				</button>
			</form>
		</div>
	);
};
