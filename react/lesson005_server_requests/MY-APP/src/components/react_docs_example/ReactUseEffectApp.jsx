import { useState, useEffect } from 'react';
import styles from "./ReactUseEffectApp.module.css";

function Playground() {
	const [text, setText] = useState('a');

	useEffect(() => {
		function onTimeout() {
			console.log('⏰ ' + text);
		}

		console.log(`🔵 Запланировать лог "${text}"`);
		const timeoutId = setTimeout(onTimeout, 3000);

		return () => {
			console.log(`🟡 Отменить лог "${text}"`);
			clearTimeout(timeoutId);
		};
	}, [text]);

	return (
		<>
			<label>
				Что вынести в консоль:{' '}
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</label>
			<h1>{text}</h1>
		</>
	);
}

export default function ReactUseEffectApp() {
	const [show, setShow] = useState(false);
	return (
		<div className={styles.app}>
			<h3>Иллюстрация работы useEffect</h3>
			<a href="https://ru.react.dev/learn/synchronizing-with-effects">
				Описание на офдок
			</a>
			<button onClick={() => setShow(!show)}>
				{show ? 'Размонтировать' : 'Установить'} компонент
			</button>
			{show && <hr />}
			{show && <Playground />}
		</div>
	);
}
