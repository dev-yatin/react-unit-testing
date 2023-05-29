import { render, screen } from "@testing-library/react";
import Skills from ".";

describe("Skills", () => {
  const skills = ["HTML", "JS", "CSS"];

  test("Component renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("List items renders correctly", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
