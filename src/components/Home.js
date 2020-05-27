import React, { useState, useEffect } from "react";
import { Input } from "./styled-components/Input";
import { ButtonContainer } from "./styled-components/ButtonContainer";
import { connect } from "react-redux";
import { addMovie } from "../redux/actions/movies.actions";
import MoviesList from "./MoviesList";
import { v4 as uuidv4 } from "uuid";

const Home = ({ addMovie, movies }) => {
	const [movieName, setMovieName] = useState("");
	const [movieGenres, setMovieGenres] = useState([]);
	const [movie, setMovie] = useState({});

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (Object.keys(movie).length !== 0) {
			addMovie(movie);
		}
	}, [movie]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const movieGenresArr = movieGenres.split(/[ ,]+/);
		const moviesToLowerCase = movieGenresArr.map((movie) =>
			movie.toLowerCase()
		);

		const reducedGenres = moviesToLowerCase.reduce(
			(movieArr, currentMovie) =>
				movieArr.includes(currentMovie)
					? movieArr
					: [...movieArr, currentMovie],
			[]
		);

		setMovie({
			name: movieName,
			movieGenres: reducedGenres,
			watched: false,
			id: uuidv4(),
		});
	};

	return (
		<React.Fragment>
			{/* // This should have its own component */}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="movieName">Movie name</label>
					<Input
						type="text"
						onChange={(e) => setMovieName(e.target.value)}
						value={movieName}
					/>
				</div>

				<div>
					<label htmlFor="movieGenres">Movie genres</label>
					<Input
						type="text"
						onChange={(e) => setMovieGenres(e.target.value)}
						value={movieGenres}
					/>
				</div>
				<ButtonContainer>Add a movie</ButtonContainer>
			</form>

			<MoviesList movies={movies} />
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
	addMovie: (movie) => dispatch(addMovie(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
