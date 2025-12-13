export const UI_SET_ERROR = 'UI_SET_ERROR';
export const UI_CLEAR_ERROR = 'UI_CLEAR_ERROR';
export const UI_SET_ACTION_LOADING = 'UI_SET_ACTION_LOADING';

export const uiSetError = (error) => ({
	type: UI_SET_ERROR,
	payload: error,
});

export const uiClearError = () => ({
	type: UI_CLEAR_ERROR,
});

export const uiSetActionLoading = (loading) => ({
	type: UI_SET_ACTION_LOADING,
	payload: loading,
});




