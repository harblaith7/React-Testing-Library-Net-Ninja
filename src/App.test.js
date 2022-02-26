import { render, screen } from "@testing-library/react";
import Header from "./components/Header/Header";

test("render hello world", async () => {
    render(<Header />);
    const headingElement = await screen.findByText("hello world");
    expect(headingElement).toBeInTheDocument();
});
