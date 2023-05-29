import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MockFnCounter from ".";

describe("MockFnCounter", () => {
  test("render", async () => {
    user.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(<MockFnCounter count={0} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />);
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await user.click(incBtn);
      await user.click(decBtn);
    });
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
