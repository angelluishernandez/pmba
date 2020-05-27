const moviesReducerDefaultState = [];

const moviesReducer = (state = moviesReducerDefaultState, action) => {
	switch (action) {
		case "ADD_MOVIE":
			return [...state, action.movie];

		default:
			return state;
	}
};

export default moviesReducer;
