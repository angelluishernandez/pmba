import React from "react";
import MovieItem from "./MovieItem";

const MoviesList = ({ movies }) => {
	const sortedMovies = movies.sort(
		(movieA, movieB) => movieA.watched - movieB.watched
	);

	return (
		<div>
			{sortedMovies.map((movie, index) => (
				<MovieItem movie={movie} key={index} />
			))}
		</div>
	);
};

export default MoviesList;
