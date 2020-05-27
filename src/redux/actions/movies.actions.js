export const addMovie = (movie) => ({
	type: "ADD_MOVIE",
	movie,
});

export const setToWatched = (movieId) => ({
	type: "SET_MOVIE_TO_WATCHED",
	movieId,
});

export const filterByGenre = (genres) => {
	return {
		type: "FILTER_BY_GENRES",
		genres,
	};
};
