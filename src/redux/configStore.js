import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import moviesReducer from "./reducers/movies.reducer";
import filtersReducer from "./reducers/filters.reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createLoggerMiddleware = createLogger();

const rootReducer = combineReducers({
	movies: moviesReducer,
	filters: filtersReducer,
});

export default () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk, createLoggerMiddleware))
	);
	return store;
};
