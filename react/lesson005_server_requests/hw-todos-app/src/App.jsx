import {
	FirebaseTodoApp,
	SimpleJSONPlaceholderTodoApp,
	JsonServerTodoApp,
} from './components/implementation';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<h1>Todo App Comparison</h1>
			<SimpleJSONPlaceholderTodoApp />
			<JsonServerTodoApp />
			<FirebaseTodoApp />
		</div>
	);
}

export default App;
