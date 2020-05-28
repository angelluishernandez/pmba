import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import Navbar from "../components/Navbar";

configure({ adapter: new Adapter() });

test("should render navbar correctly", () => {
	const wrapper = shallow(<Navbar />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
