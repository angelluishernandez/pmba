import React, { useState } from "react";
import { Input } from "./styled-components/Input";
import { ButtonContainer } from "./styled-components/ButtonContainer";

const Home = () => {
	const [movieName, setMovieName] = useState("");
	const [movieGenres, setMovieGenres] = useState([]);
	const [movie, setMovie] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const movieGenresArr = movieGenres.split(/[ ,]+/);
		console.log(movieGenresArr);

		setMovie({
			movieName,
			movieGenresArr,
		});

		console.log(movie);

		// Call redux method and clear inputs
	};

	return (
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
	);
};

export default Home;
