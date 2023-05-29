import { render, screen } from "@testing-library/react";
import TestGetByLabelText from ".";

describe("TestGetByLabelText", () => {
  test("Component renders correctly", () => {
    render(<TestGetByLabelText />);
    const nameElement = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByLabelText("Name", { selector: "textarea" });
    expect(descriptionElement).toBeInTheDocument();

    const jobLocationElement = screen.getByLabelText("Job Location");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText("I agree to terms and conditions");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByLabelText("Submit");
    expect(buttonElement).toBeInTheDocument();

    const ageElement = screen.getByPlaceholderText("Age");
    expect(ageElement).toBeInTheDocument();

    const cancelBtn = screen.getByText("Cancel");
    expect(cancelBtn).toBeInTheDocument();

    const salaryInput = screen.getByDisplayValue(30000);
    expect(salaryInput).toBeInTheDocument();

    const image = screen.getByAltText("empty");
    expect(image).toBeInTheDocument();

    const emptyDiv = screen.getByTitle("empty");
    expect(emptyDiv).toBeInTheDocument();

    const testDiv = screen.getByTestId("test123");
    expect(testDiv).toBeInTheDocument();
  });
});
