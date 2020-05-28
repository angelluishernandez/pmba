import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import moviesReducer from "./reducers/movies.reducer";
import filtersReducer from "./reducers/filters.reducer";
import thunk from "redux-thunk";
// Uncomment on development mode

// import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Uncomment on development mode

// const createLoggerMiddleware = createLogger();

const rootReducer = combineReducers({
	movies: moviesReducer,
	filters: filtersReducer,
});

const middlewares = composeEnhancers(
	applyMiddleware(
		thunk

		// Uncomment on development mode
		// createLoggerMiddleware
	)
);

export default () => {
	const store = createStore(rootReducer, middlewares);
	return store;
};
