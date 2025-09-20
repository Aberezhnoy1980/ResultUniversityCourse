import { useState } from 'react';
import styles from './App.module.css';
import tasks from './data/tasks.json'

function App() {
	const [tasks, setTasks] = useState(tasks);

	return (
		<>
			<header>
				<h1>Курс Джуниор Frontend-разработчик Result University</h1>
			</header>
		</>
	);
}

export default App;
