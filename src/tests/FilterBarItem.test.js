import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import React from "react";

import FilterBarItem from "../components/FilterBarItem";
import { fireEvent } from "@testing-library/react";

configure({ adapter: new Adapter() });

let wrapper, props;

beforeEach(() => {
	props = {
		genre: "genre",
		handleRadioChange: jest.fn(),
		filtersSelected: [],
	};

	wrapper = shallow(
		<FilterBarItem
			filtersSelected={props.filtersSelected}
			genre={props.genre}
			handleRadioChange={props.handleRadioChange}
		/>
	);
});

test("should render FilterBarItem correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should call handleRadioChange onclick", () => {
	const event = {
		preventDefault() {},
		target: { value: true },
	};

	const input = wrapper.find("input").at(0);
	input.simulate("change", event);
	expect(props.handleRadioChange).toHaveBeenCalled();
});
