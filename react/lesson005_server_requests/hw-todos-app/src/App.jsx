import { SimpleJSONPlaceholderTodoApp } from './components/implementaion/simpleJSONPlacegolderTodoApp/simpleJsonPlaceholderTodoApp';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<h1>Todo App Comparison</h1>
			<SimpleJSONPlaceholderTodoApp />
		</div>
	);
}

export default App;
