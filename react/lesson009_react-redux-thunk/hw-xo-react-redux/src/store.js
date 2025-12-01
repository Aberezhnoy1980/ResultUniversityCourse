import { createStore, compose } from 'redux';
import { gameReducer } from './gameReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(gameReducer, composeEnchancers());
