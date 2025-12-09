export const TODOS_LOADING_START = 'TODOS_LOADING_START';
export const TODOS_LOADING_SUCCESS = 'TODOS_LOADING_SUCCESS';
export const TODOS_LOADING_ERROR = 'TODOS_LOADING_ERROR';

export const todosLoadingStart = () => ({
	type: TODOS_LOADING_START,
});

export const todosLoadingSuccess = (todos) => ({
	type: TODOS_LOADING_SUCCESS,
	payload: todos,
});

export const todosLoadingError = () => ({
	type: TODOS_LOADING_ERROR,
});


