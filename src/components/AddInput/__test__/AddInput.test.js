import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput'

const mockedSetTodo = jest.fn()


describe("AddInput", () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo}/>); //setTodos={() => {}}
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument();
  });
  it('should be able to type in input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo}/>); //setTodos={() => {}}
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, {target : {value : "Go Grocery"}})
    expect(inputElement.value).toBe("Go Grocery")
  });
  it('should have empty input when add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo}/>); //setTodos={() => {}}
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", {name : /add/i})
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("")
  });
})
