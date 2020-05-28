import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import FilterBarItem from "../components/FilterBarItem";

configure({ adapter: new Adapter() });

test("should render FilterBarItem correctly", () => {
	const genre = "genre";
	const filtersSelected = [];
	const wrapper = shallow(
		<FilterBarItem filtersSelected={filtersSelected} genre={genre} />
	);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
