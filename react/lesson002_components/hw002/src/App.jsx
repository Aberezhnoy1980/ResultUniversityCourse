import { useState } from 'react';
import { formatDate } from './utils/formatDate';
import styles from './App.module.css';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');

		if (promptValue?.length >= 3) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	function addItem() {
		const newItem = { id: Date.now(), value, createdAt: formatDate(new Date()) };
		setList((list) => [...list, newItem]);
	}

	const onAddButtonClick = () => {
		addItem();
		setValue('');
	};

	const emptyListMsg = (
		<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
	);

	const listRender = (
		<ul className={styles.list}>
			{list.map(({ id, value, createdAt }) => (
				<li key={id} className={styles['list-item']}>
					{value}{' '}
					<span className={styles['list-item-date']}>
						(created at&nbsp;
						{createdAt})
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
					disabled={!value}
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
