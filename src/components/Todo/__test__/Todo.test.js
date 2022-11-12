import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render Todo element", async () => {
    render(<MockedTodo />);
    addTask(["task 1"]);
    const divElement = screen.getByText(/task 1/i);
    expect(divElement).toBeInTheDocument();
  });
  it("should render Todo elements", async () => {
    render(<MockedTodo />);
    addTask(["task 1", "task 2"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(2);
  });
  it("should render Todo element with correct style", async () => {
    render(<MockedTodo />);
    addTask(["task 1"]);
    const divElement = screen.getByTestId("task-container");
    expect(divElement).not.toHaveClass("todo-item-active");
  });
});
