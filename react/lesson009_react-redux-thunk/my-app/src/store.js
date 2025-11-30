import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { userReducer, productsReducer } from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	userState: userReducer,
	productsState: productsReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
