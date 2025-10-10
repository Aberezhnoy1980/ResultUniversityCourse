import { useState } from 'react';
import styles from './App.module.css';
import { FormValidation, MyForm, MySelect, ReactHookFormExample, SelectFromLib, UseRefExample } from './components';

const sendData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const [formData, setFormData] = useState({
		email: '',
		login: '',
		password: '',
	});
	const [value, setValue] = useState('');
	// const [email, setEmail] = useState('');
	// const [login, setLogin] = useState('');
	// const [password, setPassword] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		sendData({ formData });
	};

	return (
		<div className={styles.app}>
			<p className={styles.text}>
				поле ввода становится контроллируемым (react) при добавлении в поле
				вводв втрибута value. Что бы управлять этим value можно использоватаь
				useState и setter соответственно
			</p>
			<input
				type="text"
				value={value} // контролируемое поле ввода становится таковым при добавлении этого атрибута
				onChange={(target) => setValue(target.value)}
				placeholder="контролируемое поле ввода"
			/>
			<p className={styles.text}>
				Для примера создаем неконтроллируемое поле ввода, которое обрабатывается
				с помощью css (не рекомендуется такой подход использовать в реальных
				react проектах, в связи с плохой читаемостью кода)
			</p>
			<label htmlFor="chceckbox">Скрыть/отобразить контент</label>
			<input id="checkbox" type="checkbox" />
			<div className={styles.content}>Любой контент</div>
			<p className={styles.text}>
				Разница между react onChange (соответствует событию input в js) и
				нативным js обработчиком change заключается в том, что в react
				обрабатывается любое каждой изменение, при том что в js обрабатывается
				группа изменений после подтверждения всего ввода в поле, например после
				разфокусировки (напротив, js событие input реагирует на каждый акт ввода
				с клавиатуры)
			</p>
			<p className={`${styles.text} ${styles.totalText}`}>
				Как итог: любой input в react мы будем обрабатывать с помощью onChange.
				А onInput в react не используется
			</p>

			<form title="Регистрация" name="Регистрация" onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					value={formData.email}
					placeholder="Почта"
					// onChange={({ target }) => setEmail(target.value)}
					onChange={({ target }) =>
						setFormData({ ...formData, email: target.value })
					}
				/>
				<input
					type="text"
					name="login"
					value={formData.login}
					placeholder="Логин"
					// onChange={({ target }) => setLogin(target.value)}
					onChange={({ target }) =>
						setFormData({ ...formData, login: target.value })
					}
				/>
				<input
					type="password"
					name="password"
					value={formData.password}
					placeholder="Пароль"
					// onChange={({ target }) => setPassword(target.value)}
					onChange={({ target }) =>
						setFormData({ ...formData, password: target.value })
					}
				/>
				<button type="submit">Отправить</button>
			</form>
			<MyForm sendData={sendData} />
			<MySelect />
			<SelectFromLib />
			<FormValidation />
			<UseRefExample />
			<ReactHookFormExample />
		</div>
	);
};
