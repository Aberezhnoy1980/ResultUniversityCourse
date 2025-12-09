import {
	TODOS_LOADING_START,
	TODOS_LOADING_SUCCESS,
	TODOS_LOADING_ERROR,
} from '../actions/todosActions';

const initialState = {
	todos: [],
	loading: false,
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODOS_LOADING_START:
			return {
				...state,
				loading: true,
			};

		case TODOS_LOADING_SUCCESS:
			return {
				...state,
				todos: action.payload,
				loading: false,
			};

		case TODOS_LOADING_ERROR:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};


