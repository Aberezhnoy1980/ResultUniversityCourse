export const SEARCH_SET_TERM = 'SEARCH_SET_TERM';
export const SEARCH_TOGGLE_SORT = 'SEARCH_TOGGLE_SORT';

export const searchSetTerm = (term) => ({
	type: SEARCH_SET_TERM,
	payload: term,
});

export const searchToggleSort = () => ({
	type: SEARCH_TOGGLE_SORT,
});




