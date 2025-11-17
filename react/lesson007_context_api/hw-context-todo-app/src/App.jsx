import { JsonServerTodoApp } from './components/JsonServerTodoApp/JsonServerTodoApp';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<JsonServerTodoApp />
		</div>
	);
}

export default App;
