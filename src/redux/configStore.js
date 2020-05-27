import { createStore, applyMiddleware, combineReducers } from "redux";
import moviesReducer from "./reducers/movies.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	movies: moviesReducer,
});

export default () => {
	const store = createStore(rootReducer, applyMiddleware(thunk));
	return store;
};
