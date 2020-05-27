import React from "react";
import { FilterBarItemWrapper } from "./styled-components/FilterBarItemWrapper";

const FilterBarItem = ({ genre, handleRadioChange, filterGenres }) => {
	const isChecked = filterGenres.includes(genre.toLowerCase());

	return (
		<FilterBarItemWrapper>
			<label htmlFor="">{genre}</label>
			<input
				type="radio"
				checked={isChecked}
				value={genre}
				onChange={(e) => handleRadioChange(e)}
			/>
		</FilterBarItemWrapper>
	);
};

export default FilterBarItem;
