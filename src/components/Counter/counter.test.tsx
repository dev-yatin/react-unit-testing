import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from ".";
describe("Counter", () => {
  test("Render correctly", () => {
    render(<Counter />);
    const counterValueDiv = screen.getByTestId("counter-value");
    expect(counterValueDiv).toBeInTheDocument();
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    expect(incrementBtn).toBeInTheDocument();
  });
  test("Initial Value is 0", () => {
    render(<Counter />);
    const counterValueDiv = screen.getByTestId("counter-value");
    expect(counterValueDiv).toHaveTextContent("0");
  });
  test("Single Click Value is 1", async () => {
    render(<Counter />);
    user.setup();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const incrementBtn = screen.getByRole("button", { name: "Increment" });
      await user.click(incrementBtn);
    });

    const counterValueDiv = screen.getByTestId("counter-value");
    expect(counterValueDiv).toHaveTextContent("1");
  });

  test("Double Click Value is 2", async () => {
    render(<Counter />);
    user.setup();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const incrementBtn = screen.getByRole("button", { name: "Increment" });
      await user.dblClick(incrementBtn);
    });

    const counterValueDiv = screen.getByTestId("counter-value");
    expect(counterValueDiv).toHaveTextContent("2");
  });
  test("Set value", async () => {
    user.setup();
    render(<Counter />);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const numberInput = screen.getByRole("spinbutton");
      // Keyboard interaction
      // Similarly we can also use .tab and toHaveFocus to check focus on elements
      await user.type(numberInput, "10");
      const setBtn = screen.getByRole("button", { name: "Set" });
      await user.click(setBtn);
    });
    const counterValueDiv = screen.getByTestId("counter-value");
    expect(counterValueDiv).toHaveTextContent("10");
  });
});
