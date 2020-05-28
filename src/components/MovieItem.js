import React from "react";
import { ButtonContainer } from "./styled-components/ButtonContainer";
import { MovieItemWrapper } from "./styled-components/MovieItemWrapper";
import { setToWatched } from "../redux/actions/movies.actions";
import { connect } from "react-redux";
import { FormItemWrapper } from "./styled-components/FormItemWrapper";

const MovieItem = ({ movie, setToWatched }) => {
	const handleRadioChange = (e) => {
		setToWatched(movie.id);
	};

	return (
		<>
			{movie === undefined && movie !== [] ? (
				<div>Loading...</div>
			) : (
				<MovieItemWrapper>
					<div>
						<h3>{movie.name}</h3>
					</div>
					<div>
						<h3>Genres</h3>
						<ul>
							{movie.movieGenres.map((genre, index) => (
								<li>{genre}</li>
							))}
						</ul>
					</div>

					<FormItemWrapper>
						<div>
							<label>Have you watched it already?</label>
						</div>
						<input
							type="checkbox"
							value="hasBeenWatched"
							checked={movie.watched}
							onChange={(e) => handleRadioChange(e)}
						/>
						<ButtonContainer delete>Delete</ButtonContainer>
					</FormItemWrapper>
				</MovieItemWrapper>
			)}
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setToWatched: (movieName) => dispatch(setToWatched(movieName)),
});

export default connect(undefined, mapDispatchToProps)(MovieItem);
