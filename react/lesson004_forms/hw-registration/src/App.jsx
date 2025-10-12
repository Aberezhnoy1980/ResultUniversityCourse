import { SimpleReg, ReactHookFormReg } from './components';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<SimpleReg />
			<ReactHookFormReg />
		</div>
	);
}

export default App;
