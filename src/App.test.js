/** @format */

import { render, screen } from "@testing-library/react";
import App from "./App";
import Button from "./components/Button";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Cool Application/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Button Component in document", () => {
  render(<Button />);
  const childELement = screen.getByText(/Button/);
  expect(childELement).toBeInTheDocument();
});

test("url is correct", () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-link");
  expect(linkElement.href).toContain("reactjs.org");
});
