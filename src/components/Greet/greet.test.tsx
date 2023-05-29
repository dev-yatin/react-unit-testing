import { render, screen } from "@testing-library/react";
import Greet from ".";

test("Testing Greet", () => {
  render(<Greet name={""} />);
  const textElement = screen.getByText(/hello guest/i);
  expect(textElement).toBeInTheDocument();
});

test("Testing Greet Yatin", () => {
  const name = "Yatin";
  render(<Greet name={name} />);
  const textElement = screen.getByText(`Hello ${name}`);
  expect(textElement).toBeInTheDocument();
});
