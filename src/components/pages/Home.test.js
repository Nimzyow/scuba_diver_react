import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/TestUtils";
import Home from "./Home";

/**
 * setup function for app component
 * @returns { ShallowWrapper }
 */
const setup = () => {
  return shallow(<Home />);
};

test("renders Home container", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "home-container");
  expect(component.length).toBe(1);
});
test("button is rendered", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "button-container");
  expect(button.length).toBe(1);
});
