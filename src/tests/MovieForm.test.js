import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";
import configureMockStore from "redux-mock-store";

import MovieForm from "../components/MovieForm";
import Home from "../components/Home";

const middlewares = [];
const createMockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

test("should render Movieform correctly", () => {
	const wrapper = shallow(<MovieForm />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should change movie name in parent component on input change", () => {
	const initialState = { movies: [], filters: [] };
	const store = createMockStore(initialState);
	const value = "movieName";
	const wrapper = mount(<Home store={store} />);
	const input = wrapper.find(<MovieForm movieName={""} />).at(0);
	input.simulate("change", { target: { value } });
	expect(input.prop("movieName")).toEqual(value);
});
