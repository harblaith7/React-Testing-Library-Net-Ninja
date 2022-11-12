import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="header title" />);
  const headerElement = screen.getByText(/header title/i);
  expect(headerElement).toBeInTheDocument();
});

it("should render header", () => {
  render(<Header title="header title" />);
  const headerElement = screen.getByRole("heading", { name: "header title" });
  expect(headerElement).toBeInTheDocument();
});

it("should render header", () => {
  render(<Header title="header title" />);
  const headerElement = screen.getByTitle("Header");
  expect(headerElement).toBeInTheDocument();
});

it("should render header", () => {
  render(<Header title="header title" />);
  const headerElement = screen.getByTestId("header1");
  expect(headerElement).toBeInTheDocument();
});

it("should render same text passed into title prop", async () => {
  render(<Header title="header title" />);
  const headerElement = await screen.findByText(/header title/i);
  expect(headerElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title="header title" />);
  const headerElement = screen.queryByText(/dogs/i);
  expect(headerElement).not.toBeInTheDocument();
});
