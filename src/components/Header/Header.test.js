import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders with no props", () => {
    render(<Header />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe("")
  })

  it("renders text passed as prop", () => {
    render(<Header title="test-title" />);
    const header = screen.getByRole("heading");
    expect(header.textContent).toBe("test-title");
  })

  it("renders heading size 1", () => {
    render(<Header title="test-title" />);
    const header = screen.getByRole("heading");
    expect(header.nodeName).toBe("H1");
  })
})

