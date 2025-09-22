import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [history, setHistory] = useState('');
	const [isResult, setIsResult] = useState(false);

	const buttons = [
		{
			id: 0,
			value: 'C',
		},
		{
			id: 1,
			value: '=',
		},
		{
			id: 2,
			value: '1',
		},
		{
			id: 3,
			value: '2',
		},
		{
			id: 4,
			value: '3',
		},
		{
			id: 5,
			value: '4',
		},
		{
			id: 6,
			value: '5',
		},
		{
			id: 7,
			value: '6',
		},
		{
			id: 8,
			value: '7',
		},
		{
			id: 9,
			value: '8',
		},
		{
			id: 10,
			value: '9',
		},
		{
			id: 11,
			value: '+',
		},
		{
			id: 12,
			value: '0',
		},
		{
			id: 13,
			value: '-',
		},
		{
			id: 14,
			value: 'Enter',
		},
		{
			id: 15,
			value: 'Escape',
		},
		{
			id: 16,
			value: 'c',
		},
	];

	const getClassName = (value) => {
		if (value === 'C') return `${styles.btn} ${styles.clear}`;
		if (value === '=') return `${styles.btn} ${styles.equals}`;
		if (value === '+' || value === '-') return `${styles.btn} ${styles.operator}`;
		return styles.btn;
	};

	const resetAll = () => {
		setOperand1('0');
		setOperator('');
		setOperand2('');
		setHistory('');
		setIsResult(false);
	};

	const calculate = () => {
		const result = operator === '+' ? +operand1 + +operand2 : +operand1 - +operand2;

		const historyEntry = `${operand1}${operator}${operand2}=`;

		setHistory((prev) => {
			if (!prev) return historyEntry;
			let entries = [...prev];
			entries = entries.concat(historyEntry.split(''));
			console.log(entries.length);
			console.log(entries);
			if (entries.length > 25) entries.splice(0, entries.length - 25);
			return entries;
		});

		setOperand1(result);
		setOperator('');
		setOperand2('');
		setIsResult(!isResult);
	};

	const handleInput = (currentInput) => {
		if (currentInput === 'C') {
			resetAll();
			return;
		}

		if (isResult && /^[0-9]$/.test(currentInput)) {
			setOperand1(currentInput);
			setOperator('');
			setOperand2('');
			setIsResult(false);
			setHistory('');
			return;
		}

		if (isResult && (currentInput === '+' || currentInput === '-')) {
			setOperator(currentInput);
			setOperand2('');
			setIsResult(false);
			return;
		}

		if (/^[0-9]$/.test(currentInput) && !operator) {
			if (operand1 === '0') setOperand1(currentInput);
			else setOperand1((value) => value + currentInput);
		}

		if (currentInput === '+' || currentInput === '-') {
			if (operand1 === '0' && currentInput !== '+') {
				setOperand1(currentInput);
				setOperator('');
			} else {
				setOperator(currentInput);
			}
		}

		if (/^[0-9]$/.test(currentInput) && operator) {
			setOperand2((value) => value + currentInput);
		}
		if (currentInput === '=' && operand1 && operator && operand2) {
			calculate();
			setOperator('');
			setOperand2('');
		}
	};

	const onButtonClick = (event) => {
		console.log(`operand1=${operand1}, operator=${operator}, operand2${operand2}`);
		let currentInput = event.target.textContent;

		handleInput(currentInput);
	};

	const onKeyDown = (event) => {
		let currentInput = event.key;
		console.log(currentInput);

		if (!buttons.some(({ id, value }) => currentInput === value)) {
			return;
		}

		event.preventDefault();

		if (currentInput === 'Enter') currentInput = '=';
		if (currentInput === 'Escape' || currentInput.toLowerCase() === 'c')
			currentInput = 'C';

		handleInput(currentInput);
	};

	const getDisplayValue = () => {
		return `${operand1}${operator}${operand2}`;
	};

	const getDisplayClassName = () => {
		return isResult ? `${styles.display} ${styles.result}` : styles.display;
	};

	return (
		<>
			<div
				className={styles.calculator}
				tabIndex="0"
				onKeyDown={onKeyDown}
				style={{ outline: 'none' }}
			>
				<div className={getDisplayClassName()}>
					<div className={styles.history}>{history || 'int'}</div>
					{getDisplayValue()}
				</div>
				<div className={styles.keypad}>
					{buttons.slice(0, 14).map((item) => (
						<button
							onClick={onButtonClick}
							key={item.id}
							className={getClassName(item.value)}
						>
							{item.value}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
