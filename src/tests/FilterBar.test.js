import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import FilterBar from "../components/FilterBar";

configure({ adapter: new Adapter() });

test("should render FilterBar correctly", () => {
	const genresArr = [];
	const wrapper = shallow(<FilterBar genresArr={genresArr} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
