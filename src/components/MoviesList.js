import React from "react";
import MovieItem from "./MovieItem";

const MoviesList = ({ movies }) => {
	const sortedMovies = movies.sort(
		(movieA, movieB) => movieA.watched - movieB.watched
	);

	return (
		<>
			{sortedMovies.map((movie, index) => (
				<MovieItem
					name={movie.name}
					movieGenres={movie.movieGenres}
					wacthed={movie.watched}
					key={index}
				/>
			))}
		</>
	);
};

export default MoviesList;
