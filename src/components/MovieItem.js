import React from "react";
import { ButtonContainer } from "./styled-components/ButtonContainer";

const MovieItem = ({ name, movieGenres, watched }) => {
	return (
		<div>
			<h5>Movie name</h5>
			<p>{name}</p>
			{movieGenres.map((genre, index) => (
				<div key={index}>
					<h5>Genres</h5>
					<span>{genre}</span>
				</div>
			))}
			<h5>Has been watched?</h5>
			<input type="radio" defaultChecked={watched} />
			<ButtonContainer delete>Delete</ButtonContainer>
		</div>
	);
};

export default MovieItem;
