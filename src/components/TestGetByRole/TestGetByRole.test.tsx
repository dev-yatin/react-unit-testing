import { render, screen } from "@testing-library/react";
import TestGetByRole from ".";

describe("TestGetByRole", () => {
  test("Component renders correctly", () => {
    render(<TestGetByRole />);
    const mainHeading = screen.getByRole("heading", {
      name: "Main Heading",
    });
    expect(mainHeading).toBeInTheDocument();

    // const subHeading = screen.getByRole("heading", {
    //   name: "Sub-Heading",
    // });
    // expect(subHeading).toBeInTheDocument();

    const subHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(subHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByRole("textbox", {
      name: "Description",
    });
    expect(descriptionElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
