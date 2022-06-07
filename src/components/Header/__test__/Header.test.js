import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop (getByText)', () => {
  render(<Header title='My Header'/>);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop (getByRole)', () => {
  render(<Header title='My Header'/>);
  const headingElement = screen.getByRole("heading", { name: 'My Header' })
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', () => {
//   render(<Header title='My Header'/>);
//   const headingElement = screen.getByTitle("header")
//   expect(headingElement).toBeInTheDocument();
// });

// FIND BY 
it('should render same text passed into title prop (findByText)', async () => {
  render(<Header title='My Header'/>);
  const headingElement = await screen.findByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});


// QUERY BY
it('should render same text passed into title prop (queryByText)', () => {
  render(<Header title='My Header'/>);
  const headingElement = screen.queryByText(/dog/i);
  expect(headingElement).not.toBeInTheDocument();
});


it('should render same text passed into title prop (getAllByRole)', () => {
  render(<Header title='My Header'/>);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(1)
});