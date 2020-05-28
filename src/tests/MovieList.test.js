import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import MoviesList from "../components/MoviesList";

configure({ adapter: new Adapter() });

test("should render MoviesList correctly", () => {
	const movies = [];
	const wrapper = shallow(<MoviesList movies={movies} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render MovieList with empty list message", () => {
	const wrapper = shallow(<MoviesList movies={[]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
