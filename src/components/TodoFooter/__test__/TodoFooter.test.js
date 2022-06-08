import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter
      numberOfIncompleteTasks={numberOfIncompleteTasks}
    />
  </BrowserRouter>
)

describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(
      <MockTodoFooter numberOfIncompleteTasks={5}/>
    );
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one (toBeVisible)', () => {
    render(
      <MockTodoFooter numberOfIncompleteTasks={1}/>
    );

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible()
  });

  it('should render "task" when the number of incomplete tasks is one (toContainHTML)', () => {
    render(
      <MockTodoFooter numberOfIncompleteTasks={1}/>
    );

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML("p")
  });

  it('should render "task" when the number of incomplete tasks is one (toBe)', () => {
    render(
      <MockTodoFooter numberOfIncompleteTasks={1}/>
    );

    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement.textContent).toBe("1 task left")
  });
})