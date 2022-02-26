import { render, screen } from "@testing-library/react";
import Header from "./components/Header/Header";

test("render hello world", () => {
    render(<Header />);
    const headingElement = screen.getByText("hello world");
    expect(headingElement).toBeInTheDocument();
});
