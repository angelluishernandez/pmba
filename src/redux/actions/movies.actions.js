export const addMovie = (movie) => ({
	type: "ADD_MOVIE",
	movie,
});

export const setToWatched = (movieId) => ({
	type: "SET_MOVIE_TO_WATCHED",
	movieId,
});
