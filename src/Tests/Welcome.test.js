import React from "react";
import { render } from "@testing-library/react";
import Welcome from "../Components/Welcome/Welcome";

test("renders learn react link", () => {
  const { getByText } = render(<Welcome />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
