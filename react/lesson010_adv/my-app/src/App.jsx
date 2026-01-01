import { useCallback, useState, useMemo } from 'react';
import styles from './App.module.css';
import { Field } from './components/NumField';
import { OldScreenWidthApp, ScreenWidthApp } from './components/ScreenWidthApp';
import { UserWidget } from './components/UserWidget';
import { HelloMessage } from './components/HelloMessage';
import { GoodByeMessage } from './components/GoodByeMessage';

function App() {
	console.log('--------- App ---------');

	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);

	const onNumChange = useCallback(({ target }) => {
		setNum(Number(target.value));
	}, []);

	// Аналоги (useCallback на самом деле частный случай useMemo)

	const onNumChange2 = useMemo(
		() =>
			({ target }) => {
				setNum(Number(target.value));
			},
		[],
	);

	const onNumChange3 = useMemo(() => {
		return ({ target }) => {
			setNum(Number(target.value));
		};
	}, []);

	const onDegreeChange = useCallback(({ target }) => {
		setDegree(Number(target.value));
	}, []);

	const hardCalculatedNum = useMemo(
		() => new Array(20000000).fill(0).reduce((res, el) => res + el, num),
		[num],
	);

	const result = Math.pow(hardCalculatedNum, degree);

	return (
		<>
			{/* <UserWidget render={(user) => <HelloMessage user={user} />} /> */}
			{/* <UserWidget>{(user) => <GoodByeMessage user={user} />}</UserWidget> */}
			<UserWidget />
			{/* <UserWidget Message={GoodByeMessage} /> */}
			<ScreenWidthApp message="Функциональный компонент" />
			<OldScreenWidthApp message="Классовый компонент" />
			<div className={styles.app}>
				<div>
					{num} в степени {degree} = {result}
				</div>
				<Field name="num" label="Число" value={num} onChange={onNumChange} />
				<Field
					name="degree"
					label="Степень"
					value={degree}
					onChange={onDegreeChange}
				/>
			</div>
		</>
	);
}

export default App;
