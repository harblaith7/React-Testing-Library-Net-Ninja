import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop (getby text)', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i)
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop (getby role)', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", {name : "My Header"})
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop (getby title)', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTitle("header")
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop (getby testid)', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header-1")
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop (findby text)', async() => {
    render(<Header title="My Header"/>);
    const headingElement = await screen.findByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop (queryby text)', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.queryByText(/dog/i)
    expect(headingElement).not.toBeInTheDocument();
  });

  it('should render same text passed into title prop (getallby role)', () => {
    render(<Header title="My Header"/>);
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements.length).toBe(2);
  });