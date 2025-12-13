import { SEARCH_SET_TERM, SEARCH_TOGGLE_SORT } from '../actions/searchActions';

const initialState = {
	searchTerm: '',
	sortAlphabetically: false,
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_SET_TERM:
			return {
				...state,
				searchTerm: action.payload,
			};

		case SEARCH_TOGGLE_SORT:
			return {
				...state,
				sortAlphabetically: !state.sortAlphabetically,
			};

		default:
			return state;
	}
};




