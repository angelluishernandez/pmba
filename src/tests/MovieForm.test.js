import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import MovieForm from "../components/MovieForm";
import { Input } from "../components/styled-components/Input";

let wrapper, props;

beforeEach(() => {
	props = {
		setMovieName: jest.fn(),
		setMovieGenres: jest.fn(),
	};
	wrapper = shallow(
		<MovieForm
			setMovieName={props.setMovieName}
			setMovieGenres={props.setMovieGenres}
		/>
	);
});

configure({ adapter: new Adapter() });

test("should render Movieform correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should call setMovieName onchange event in first input", () => {
	const input = wrapper.find(Input).at(0);

	const event = {
		preventDefault() {},
		target: { value: "movieName" },
	};

	input.simulate("change", event);

	expect(props.setMovieName).toHaveBeenCalled();
});

test("should call setMovieGenres on change event in second input", () => {
	const input = wrapper.find(Input).at(1);

	const event = {
		preventDefault() {},
		target: { value: "movieName" },
	};

	input.simulate("change", event);

	expect(props.setMovieGenres).toHaveBeenCalled();
});
