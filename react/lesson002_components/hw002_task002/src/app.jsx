import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const forward = () => {
		setActiveIndex((idx) => idx + 1);
	};

	const back = () => {
		setActiveIndex((idx) => idx - 1);
	};

	const startOver = () => {
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	let isFirstStep = activeIndex === 0;
	let isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}

						{steps.map((step, idx) => (
							<li key={step.id}
								className={
									idx <= activeIndex
										? idx === activeIndex
											? styles['steps-item'] +
											  ' ' +
											  styles.done +
											  ' ' +
											  styles.active
											: styles['steps-item'] + ' ' + styles.done
										: styles['steps-item']
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(idx)}
								>
									{idx + 1}
								</button>
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={back}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? startOver : forward}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
