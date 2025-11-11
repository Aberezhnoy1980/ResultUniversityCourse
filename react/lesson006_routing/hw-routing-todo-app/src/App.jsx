import { Routes, Route, Navigate } from 'react-router-dom';
import {
	JsonServerTodoApp,
	TodoItemPage,
	TodoLoadError,
	TodoNotFound,
	NotFound,
} from './pages';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<JsonServerTodoApp />} />
				<Route path="task/:id" element={<TodoItemPage />} />
				<Route path="/task-load-error" element={<TodoLoadError />} />
				<Route path="/task-not-exists" element={<TodoNotFound />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" replace={true} />} />
			</Routes>
		</div>
	);
};
