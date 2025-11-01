import { SimpleJSONPlaceholderTodoApp } from './components/implementation';
import { JsonServerTodoApp } from './components/implementation';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<h1>Todo App Comparison</h1>
			<SimpleJSONPlaceholderTodoApp />
			<JsonServerTodoApp />
		</div>
	);
}

export default App;
