import { useState } from 'react';
import styles from './App.module.css';
import moment from 'moment';

function App() {
	const [value, setValue] = useState('');
	const [list, setlist] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');

		if (promptValue.length < 3) {
			setIsValueValid(false);
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setIsValueValid(true);
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			const date = Date.now();
			const updatedList = [...list, { id: date, value: value }];
			setlist(updatedList);
			setValue('');
		}
	};

	const emptyListMsg = (
		<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
	);

	const listRender = (
		<ul className={styles.list}>
			{list.map((item) => (
				<li key={item.id} className={styles['list-item']}>
					{item.value}{' '}
					<span className={styles['list-item-date']}>
						(created at&nbsp;
						{moment(item.id).format('DD.MM.YYYY HH:mm:ss')})
					</span>
				</li>
			))}
		</ul>
	);

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{!list.length ? emptyListMsg : listRender}
			</div>
		</div>
	);
}

export default App;
