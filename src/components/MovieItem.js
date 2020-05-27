import React from "react";
import { ButtonContainer } from "./styled-components/ButtonContainer";
import { setToWatched } from "../redux/actions/movies.actions";
import { connect } from "react-redux";

const MovieItem = ({ movie, setToWatched }) => {
	const handleRadioChange = (e) => {
		setToWatched(movie.id);
	};

	console.log("*********************************");
	console.log(movie);

	return (
		<div>
			{movie === undefined && movie !== [] ? (
				<div>Loading...</div>
			) : (
				<div>
					<h5>Movie name</h5>
					<p>{movie.name}</p>
					<div>
						<h5>Genres</h5>
						{movie.movieGenres.map((genre, index) => (
							<span key={index}>{genre}</span>
						))}
					</div>
					<h5>Has been watched?</h5>
					<input
						type="checkbox"
						value="hasBeenWatched"
						checked={movie.watched}
						onChange={(e) => handleRadioChange(e)}
					/>
					<ButtonContainer delete>Delete</ButtonContainer>
				</div>
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setToWatched: (movieName) => dispatch(setToWatched(movieName)),
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
