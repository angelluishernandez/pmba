const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_MOVIE":
			return [...state, { ...action.movie }];

		case "SET_MOVIE_TO_WATCHED":
			return state.map((movie) => {
				return movie.id === action.movieId
					? { ...movie, watched: !movie.watched }
					: movie;
			});

		default:
			return state;
	}
};

export default moviesReducer;
