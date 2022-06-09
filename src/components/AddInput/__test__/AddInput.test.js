import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn()

describe('AddInput', () => {
  it('should render input element', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodos}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument();
  });
  
  it('should be able to type in input', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodos}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
    expect(inputElement.value).toBe("Go grocery shopping")
  })
  
  it('should have empty input when add button is clicked', () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodos}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("")
  })
})