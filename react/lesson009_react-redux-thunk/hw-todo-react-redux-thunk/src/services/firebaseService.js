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

const envCheck = checkEnvVars(REQUIRED_ENV_VARS);

let database = null;
let todosRef = null;
let initError = null;

try {
	if (!envCheck.ok) {
		throw new Error(envCheck.message);
	}

	const app = initializeApp(firebaseConfig);
	database = getDatabase(app);
	todosRef = ref(database, 'todos');
} catch (err) {
	initError = err;
}

class FirebaseService {
	ensureReady() {
		if (initError) {
			throw initError;
		}
		if (!database || !todosRef) {
			throw new Error('Firebase is not configured correctly.');
		}
	}

	subscribeToTodos(callback) {
		this.ensureReady();
		const todosQuery = query(todosRef, orderByChild('createdAt'));

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
		this.ensureReady();
		const newTodoRef = push(todosRef);
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
		this.ensureReady();
		const todoRef = ref(database, `todos/${id}`);
		await update(todoRef, updates);
		return {
			id,
			...updates,
		};
	}

	async deleteTodo(id) {
		this.ensureReady();
		const todoRef = ref(database, `todos/${id}`);
		await remove(todoRef);
		return id;
	}

	async getTodos() {
		this.ensureReady();
		return new Promise((resolve, reject) => {
			const todosQuery = query(todosRef, orderByChild('createdAt'));

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
