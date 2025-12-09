import { firebaseService } from '../../services';
import {
	todosLoadingStart,
	todosLoadingSuccess,
	todosLoadingError,
} from './todosActions';
import { uiSetError, uiClearError, uiSetActionLoading } from './uiActions';

export const setupTodosSubscription = (dispatch) => {
	dispatch(todosLoadingStart());

	try {
		const unsubscribe = firebaseService.subscribeToTodos((firebaseTodos) => {
			dispatch(todosLoadingSuccess(firebaseTodos));
			dispatch(uiClearError());
		});

		return unsubscribe;
	} catch (err) {
		dispatch(todosLoadingError());
		dispatch(uiSetError(err.message));
		return () => {};
	}
};

export const addTodoAsync = (title) => {
	return async (dispatch) => {
		dispatch(uiSetActionLoading(true));
		dispatch(uiClearError());

		try {
			await firebaseService.createTodo({ title });
		} catch (err) {
			dispatch(uiSetError(err.message));
		} finally {
			dispatch(uiSetActionLoading(false));
		}
	};
};

export const toggleTodoAsync = (id) => {
	return async (dispatch, getState) => {
		dispatch(uiSetActionLoading(true));
		dispatch(uiClearError());

		try {
			const state = getState();
			const todo = state.todosState.todos.find((t) => t.id === id);

			if (!todo) {
				throw new Error('Todo not found');
			}

			await firebaseService.updateTodo(id, {
				completed: !todo.completed,
			});
		} catch (err) {
			dispatch(uiSetError(err.message));
		} finally {
			dispatch(uiSetActionLoading(false));
		}
	};
};

export const updateTodoTitleAsync = (id, newTitle) => {
	return async (dispatch) => {
		dispatch(uiSetActionLoading(true));
		dispatch(uiClearError());

		try {
			await firebaseService.updateTodo(id, { title: newTitle });
		} catch (err) {
			dispatch(uiSetError(err.message));
		} finally {
			dispatch(uiSetActionLoading(false));
		}
	};
};

export const deleteTodoAsync = (id) => {
	return async (dispatch) => {
		dispatch(uiSetActionLoading(true));
		dispatch(uiClearError());

		try {
			await firebaseService.deleteTodo(id);
		} catch (err) {
			dispatch(uiSetError(err.message));
		} finally {
			dispatch(uiSetActionLoading(false));
		}
	};
};

