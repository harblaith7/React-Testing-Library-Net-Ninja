import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => (
  <BrowserRouter>
    <Todo/>
  </BrowserRouter>
)

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  });
}

describe('Todo', () => {
  it('should add and render a new task', () => {
    render(<MockTodo/>);
    addTask(['Go Grocery Shopping'])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    expect(divElement).toBeInTheDocument()
  });

  it('should add and render multiple tasks', () => {
    render(<MockTodo/>);
    addTask(['Go Grocery Shopping', 'Pet my cat', 'Wash my hands'])
    const divElement = screen.getAllByRole('listitem')
    expect(divElement.length).toBe(3)
  });

  it('tasks should not have completed class when initially rendered', () => {
    render(<MockTodo/>);
    addTask(['Go Grocery Shopping'])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    expect(divElement).not.toHaveClass("todo-item-active")
  });
  
  it('tasks should have completed class when clicked', () => {
    render(<MockTodo/>);
    addTask(['Go Grocery Shopping'])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
  });
})