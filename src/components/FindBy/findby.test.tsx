import { render, screen } from "@testing-library/react";
import FindBy from ".";

describe("FindBy", () => {
  test("component render correctly", async () => {
    render(<FindBy />);
    const btn = await screen.findByRole("button", { name: "Allow User" }, { timeout: 1500 });
    expect(btn).toBeInTheDocument();
  });
});
