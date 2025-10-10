import { useState, useRef } from "react";
import styles from "./UseRefExample.module.css";

export const UseRefExample = () => {
	const [stateCounter, setStateCounter] = useState(0);

	const refCounter = useRef(0);

	const incrementRefCounter = () => {
		refCounter.current += 1;
		console.log("refCounter =", refCounter.current);
	}

	const incrementStateCounter = () => {
		setStateCounter(stateCounter => stateCounter + 1);
		console.log("stateCounter =", stateCounter);
	}

	return (
		<div className={styles.useRefExmaple}>
			<p>refCounter: {refCounter.current}</p>
			<button onClick={incrementRefCounter}>Прибавить refCounter</button>
			<p>stateCounter: {stateCounter}</p>
			<button onClick={incrementStateCounter}>Прибавить stateCounter</button>
		</div>
	)
}
