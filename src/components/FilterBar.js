import React from "react";
import FilterBarItem from "./FilterBarItem";
import { FilterBarWrapper } from "./styled-components/FilterBarWrapper";
import { ButtonContainer } from "./styled-components/ButtonContainer";

const FilterBar = (props) => {
	const { genresArr, filtersSelected, handleRadioChange, onReset } = props;

	return (
		<FilterBarWrapper>
			<h4>Filter your movies</h4>
			{genresArr.map((genre, index) => (
				<FilterBarItem
					genre={genre}
					filtersSelected={filtersSelected}
					handleRadioChange={handleRadioChange}
					key={index}
				/>
			))}
			<div>
				<ButtonContainer onClick={onReset}>Reset</ButtonContainer>
			</div>
		</FilterBarWrapper>
	);
};

export default FilterBar;
