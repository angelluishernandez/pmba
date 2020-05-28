import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import MoviesList from "../components/MoviesList";
import MovieItem from "../components/MovieItem";

configure({ adapter: new Adapter() });

let movies, wrapper;

beforeEach(() => {
	movies = [
		{
			movieName: "movieName",
			genres: ["one", "two"],
			watched: false,
			id: 1,
		},

		{
			movieName: "movieName2",
			genres: ["three", "four"],
			watched: false,
			id: 2,
		},

		{
			movieName: "movieName3",
			genres: ["comedy", "four"],
			watched: false,
			id: 3,
		},
	];
	wrapper = shallow(<MoviesList movies={movies} />);
});

test("should render MoviesList correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render MovieList with empty list message", () => {
	const wrapper = shallow(<MoviesList movies={[]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render one MovieItem for each movie", () => {
	const movieItems = wrapper.find(MovieItem);
	expect(movieItems).toHaveLength(3);
});
