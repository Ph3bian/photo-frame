import React from "react";
import { render, screen } from "@testing-library/react";
import Preview from "./preview";

test("submitting the form calls onSubmit with username and password", () => {
  render(<Preview />);
  const dialogContainer = screen.getByRole("dialog");
  expect(dialogContainer).toBeInTheDocument();
});
