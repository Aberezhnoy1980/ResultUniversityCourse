import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { uiReducer } from './uiReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
	todosState: todosReducer,
	uiState: uiReducer,
	searchState: searchReducer,
});


