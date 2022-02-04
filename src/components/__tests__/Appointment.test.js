
import React from "react";

// import helper functions from the react-testing-library
//  render function allows render Components

import { render } from "@testing-library/react";

import Application from "components/Application";


// test will render React Component

describe("Appointment", () => {
it("renders without crashing", () => {
  render(<Application />);
});
});