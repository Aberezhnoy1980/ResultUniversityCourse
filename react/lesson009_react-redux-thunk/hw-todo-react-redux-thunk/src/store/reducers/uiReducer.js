import {
	UI_SET_ERROR,
	UI_CLEAR_ERROR,
	UI_SET_ACTION_LOADING,
} from '../actions/uiActions';

const initialState = {
	error: null,
	actionLoading: false,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case UI_SET_ERROR:
			return {
				...state,
				error: action.payload,
			};

		case UI_CLEAR_ERROR:
			return {
				...state,
				error: null,
			};

		case UI_SET_ACTION_LOADING:
			return {
				...state,
				actionLoading: action.payload,
			};

		default:
			return state;
	}
};


