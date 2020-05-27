import React, { useState, useEffect } from "react";
import FilterBarItem from "./FilterBarItem";
import { FilterBarWrapper } from "./styled-components/FilterBarWrapper";
import { ButtonContainer } from "./styled-components/ButtonContainer";

import { connect } from "react-redux";
import { filterByGenre } from "../redux/actions/movies.actions";

const FilterBar = ({ filterGenres, setFilterGenres, handleRadioChange }) => {
	useEffect(() => {
		filterByGenre(filterGenres);
	}, [filterGenres]);

	const onReset = () => setFilterGenres([]);

	return (
		<FilterBarWrapper>
			{filterGenres.map((genre, index) => (
				<FilterBarItem
					genre={genre}
					key={index}
					filterGenres={filterGenres}
					handleRadioChange={handleRadioChange}
				/>
			))}

			<ButtonContainer onClick={onReset}>Reset</ButtonContainer>
		</FilterBarWrapper>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
	filterByGenre: (genres) => dispatch(filterByGenre(genres)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
