import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import FilterBar from "../components/FilterBar";
import FilterBarItem from "../components/FilterBarItem";

configure({ adapter: new Adapter() });

let genresArr, wrapper;

beforeEach(() => {
	genresArr = ["genreOne", "genreTwo"];
	wrapper = shallow(<FilterBar genresArr={genresArr} />);
});

test("should render FilterBar correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render one filterBarItem for each genre", () => {
	const filterBarItems = wrapper.find(FilterBarItem);
	expect(filterBarItems).toHaveLength(2);
});
