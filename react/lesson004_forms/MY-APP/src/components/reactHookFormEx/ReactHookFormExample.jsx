import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './ReactHookFormExample.module.css';

const fieldsScheme = yup.object().shape({
	login: yup
		.string()
		.matches(/^\w*$/, 'Должны использоваться буквы, цифры или нижнее подчеркивание')
		.max(20, 'Должно быть меньше 20 символов')
		.min(3, 'Должно быть больше трех символов'),
});

export const ReactHookFormExample = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldsScheme),
	});

	// const loginProps = {
	// 	minLength: { value: 3, message: 'Должно быть больше трех символов' },
	// 	maxLength: { value: 20, message: 'Должно быть меньше 20 символов' },
	// 	pattern: {
	// 		value: /^\w*$/,
	// 		message: 'Должны использоваться буквы, цифры или нижнее подчеркивание',
	// 	},
	// };

	const loginError = errors.login?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={styles.reactHookFormExample}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				{/* <input name="login" type="text" {...register('login', loginProps)} /> */}
				<input name="login" type="text" {...register('login')} />
				<button type="submit" disabled={!!loginError}>
					Отправить
				</button>
			</form>
		</div>
	);
};
