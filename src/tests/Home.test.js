import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";
import configureMockStore from "redux-mock-store";

import Home from "../components/Home";
import FilterBar from "../components/FilterBar";
import MovieForm from "../components/MovieForm";

const middlewares = [];
const createMockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

test("should render home correctly", () => {
	const initialState = { movies: [], filters: [] };
	const store = createMockStore(initialState);
	const wrapper = shallow(<Home store={store} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Home should render FilterBar and MovieForm on mounting", () => {
	const initialState = { movies: [], filters: [] };
	const store = createMockStore(initialState);
	const wrapper = shallow(<Home store={store} />);
	expect(wrapper.find(FilterBar));
	expect(wrapper.find(MovieForm));
});
