import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";
import configureMockStore from "redux-mock-store";

import MovieItem from "../components/MovieItem";

configure({ adapter: new Adapter() });
const middlewares = [];
const createMockStore = configureMockStore(middlewares);

test("should render MovieItem correctly", () => {
	const initialState = { movies: [], filters: [] };
	const store = createMockStore(initialState);
	const wrapper = shallow(<MovieItem store={store} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
