import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addMovie } from "../redux/actions/movies.actions";
import MoviesList from "./MoviesList";
import MovieForm from "./MovieForm";
import { v4 as uuidv4 } from "uuid";
import FilterBar from "./FilterBar";
import moviesSelector from "../redux/selectors/movies.selector";
import { setFilters } from "../redux/actions/filters.actions";

const Home = ({ addMovie, moviesToDisplay, setFilters }) => {
	const genresArr = ["Horror", "Romance", "Comedy"];

	const [movieName, setMovieName] = useState("");
	const [movieGenres, setMovieGenres] = useState([]);
	const [movie, setMovie] = useState({});
	const [filtersSelected, setFiltersSelected] = useState([]);

	useEffect(() => {
		if (Object.keys(movie).length !== 0) {
			addMovie(movie);
		}
	}, [movie]);

	useEffect(() => {
		setFilters(filtersSelected);
	}, [filtersSelected]);

	// Handle movie submit

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

	// Handle movie filters

	const handleRadioChange = (e) => {
		const value = e.target.value.toLowerCase();
		if (!filtersSelected.includes(value)) {
			setFiltersSelected([...filtersSelected, value]);
		}
	};

	//Reset filters

	const onReset = () => setFiltersSelected([]);

	return (
		<React.Fragment>
			<FilterBar
				handleRadioChange={handleRadioChange}
				filtersSelected={filtersSelected}
				genresArr={genresArr}
				onReset={onReset}
			/>
			<MovieForm
				handleSubmit={handleSubmit}
				setMovieName={setMovieName}
				movieName={movieName}
				setMovieGenres={setMovieGenres}
				movieGenres={movieGenres}
			/>

			{moviesToDisplay !== [] ? (
				<MoviesList movies={moviesToDisplay} />
			) : (
				<h1>No movies have been added yet</h1>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		moviesToDisplay: moviesSelector(state.movies, state.filters),
	};
};

const mapDispatchToProps = (dispatch) => ({
	addMovie: (movie) => dispatch(addMovie(movie)),
	setFilters: (filtersSelected) => dispatch(setFilters(filtersSelected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
