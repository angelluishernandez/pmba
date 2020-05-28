import React from "react";
import { Input } from "./styled-components/Input";
import { ButtonContainer } from "./styled-components/ButtonContainer";
import { FormWrapper } from "./styled-components/FormWrapper";
import { FormItemWrapper } from "./styled-components/FormItemWrapper";

const MovieForm = ({
	handleSubmit,
	setMovieName,
	movieName,
	setMovieGenres,
	movieGenres,
}) => {
	return (
		<FormWrapper onSubmit={handleSubmit}>
			<h4>Create a movie</h4>
			<FormItemWrapper>
				<label htmlFor="movieName">Movie name</label>
				<Input
					type="text"
					onChange={(e) => setMovieName(e.target.value)}
					value={movieName}
				/>
			</FormItemWrapper>

			<FormItemWrapper>
				<label htmlFor="movieGenres">Movie genres</label>
				<Input
					type="text"
					onChange={(e) => setMovieGenres(e.target.value)}
					value={movieGenres}
				/>
				<ButtonContainer>Add a movie</ButtonContainer>
			</FormItemWrapper>
		</FormWrapper>
	);
};

export default MovieForm;
