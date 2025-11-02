import { initializeApp } from 'firebase/app';
import {
	getDatabase,
	ref,
	onValue,
	push,
	update,
	remove,
	query,
	orderByChild,
} from 'firebase/database';
import { checkEnvVars, REQUIRED_ENV_VARS } from '../utils';

checkEnvVars(REQUIRED_ENV_VARS);

const {
	VITE_API_KEY: apiKey,
	VITE_AUTH_DOMAIN: authDomain,
	VITE_PROJECT_ID: projectId,
	VITE_STORAGE_BUCKET: storageBucket,
	VITE_MESSAGING_SENDER_ID: messagingSenderId,
	VITE_APP_ID: appId,
	VITE_DATABASE_URL: databaseURL,
} = import.meta.env;

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	databaseURL,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const TODOS_REF = ref(database, 'todos');

class FirebaseService {
	subscribeToTodos(callback) {
		const todosQuery = query(TODOS_REF, orderByChild('createdAt'));

		const unsubscribe = onValue(todosQuery, (snapshot) => {
			const todos = [];
			snapshot.forEach((childSnapshot) => {
				todos.push({
					id: childSnapshot.key,
					...childSnapshot.val(),
				});
			});
			callback(todos);
		});

		return unsubscribe;
	}

	async createTodo(todo) {
		const newTodoRef = push(TODOS_REF);
		const newTodo = {
			...todo,
			createdAt: new Date().toISOString(),
			completed: false,
		};

		await update(newTodoRef, newTodo);
		return {
			id: newTodoRef.key,
			...newTodo,
		};
	}

	async updateTodo(id, updates) {
		const todoRef = ref(database, `todos/${id}`);
		await update(todoRef, updates);
		return {
			id,
			...updates,
		};
	}

	async deleteTodo(id) {
		const todoRef = ref(database, `todos/${id}`);
		await remove(todoRef);
		return id;
	}

	async getTodos() {
		return new Promise((resolve, reject) => {
			const todosQuery = query(TODOS_REF, orderByChild('createdAt'));

			onValue(
				todosQuery,
				(snapshot) => {
					const todos = [];
					snapshot.forEach((childSnapshot) => {
						todos.push({
							id: childSnapshot.key,
							...childSnapshot.val(),
						});
					});
					resolve(todos);
				},
				reject,
				{ onlyOnce: true },
			);
		});
	}
}

export const firebaseService = new FirebaseService();
