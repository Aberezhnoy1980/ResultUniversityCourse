import { TodoCRUDContext } from './todo-context';
import { JsonServerTodoApp } from './components/JsonServerTodoApp/JsonServerTodoApp';
import { useTodos } from './hooks';
import { jsonServerApi } from './services';
import styles from './App.module.css';

function App() {
	const todosCRUD = { ...useTodos(jsonServerApi) };
	
	return (
		<TodoCRUDContext value={todosCRUD}>
			<div className={styles.app}>
				<JsonServerTodoApp />
			</div>
		</TodoCRUDContext>
	);
}

export default App;
