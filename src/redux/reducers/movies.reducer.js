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
		case "FILTER_BY_GENRES":
			return state.filter((movie) => {
				let movies = [];
				for (let genre in action.genres) {
					if (movie.movieGenres.includes(action.genres[genre])) {
						return [movies, { ...movie }];
					}
				}
			});

		default:
			return state;
	}
};

export default moviesReducer;
