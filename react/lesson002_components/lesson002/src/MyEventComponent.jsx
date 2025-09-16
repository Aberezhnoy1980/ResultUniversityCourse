import { useState } from 'react';
import styles from './MyEvent.module.css';

export const MyEventComponent = () => {
	const [value, setValue] = useState(0);
	const [showText, setShowText] = useState(true);
	const [showRedText, setShowRedText] = useState(false);

	const onClick = (event) => {
		setShowText(!showText);
		setShowRedText(!showRedText);
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
		console.log(event);
	};

	const text = <div>{value}</div>;

	return (
		<>
			{showText && text}
			<button className={showRedText ? styles.red : styles.black}
			onClick={onClick}>
				{showText ? 'Скрыть' : 'Показать'} {showRedText ? 'Красный текст' : 'Черный текст'} Прибаваить + 1 три раза
			</button>
		</>
	);
};
