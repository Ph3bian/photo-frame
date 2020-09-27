import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

test("button displays right content", () => {
  const message = "Click me";
  const { container } = render(<Button>{message}</Button>);

  expect(container).toHaveTextContent(message);
});
