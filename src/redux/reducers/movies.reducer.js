const moviesReducer = (
	state = [{ name: "some movie", movieGenres: ["one", "two"], watched: false }],
	action
) => {
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
