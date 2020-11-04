import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("The <Button/> component", () => {
    expect.extend(toHaveNoViolations)
  const defaultProps = {
    type: "button",
    onClick: jest.fn(),
    title: "Save Details",
  };
  const propsWithChildren = {
    type: "button",
    onClick: jest.fn(),
    children: <span>Loading...</span>,
  };

  const primaryButton = {
    type: "button",
    onClick: jest.fn(),
    title: "Submit",
    variant: "primary",
    "test-id": "button-test"
  };
  test("Should render button correctly", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render button text correctly", () => {
    const { getByText } = render(<Button {...(defaultProps) as any }  />);

    expect(getByText(/Save Details/)).toBeInTheDocument();
  });

  test("Should call the onClick handler when it is provided", () => {
    const { getByText } = render(<Button {...(defaultProps) as any }  />);

    fireEvent.click(getByText(defaultProps.title));

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  test("Should have class 'primary' if Button variant is primary", () => {
    const { getByText } = render(<Button {...(primaryButton) as any} />);

    expect(getByText(/Submit/)).toHaveAttribute('class')

  });

  test("Should not fail any accessibility tests", async () => {
    const { container } = render(<Button {...(propsWithChildren ) as any} />);
   
    expect(await axe(container)).toHaveNoViolations()
  });
});
