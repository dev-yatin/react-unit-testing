import { renderHook } from "@testing-library/react";
import useCount from "./useCount";
describe("useCount", () => {
  test("render correctly", () => {
    const { result } = renderHook(useCount, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
});
