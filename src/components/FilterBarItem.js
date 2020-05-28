import React from "react";
import { FilterBarItemWrapper } from "./styled-components/FilterBarItemWrapper";

const FilterBarItem = ({ genre, handleRadioChange, filtersSelected }) => {
	const isChecked = filtersSelected.includes(genre.toLowerCase());

	return (
		<FilterBarItemWrapper>
			<div>
				<label htmlFor={genre}>{genre}</label>
				<input
					type="radio"
					checked={isChecked}
					value={genre}
					onChange={(e) => handleRadioChange(e)}
				/>
			</div>
		</FilterBarItemWrapper>
	);
};

export default FilterBarItem;
