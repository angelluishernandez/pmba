export default (movies, filters) => {
	let moviesArr = [];
	if (filters.length > 0) {
		movies.forEach((movie) => {
			for (let genre in filters) {
				if (movie.movieGenres.includes(filters[genre])) {
					moviesArr.push(movie);
				}
			}
		});
	} else {
		return (moviesArr = [...movies]);
	}

	return moviesArr;
};
