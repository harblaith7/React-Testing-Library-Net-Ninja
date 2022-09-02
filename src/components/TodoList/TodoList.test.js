import { render, screen } from "@testing-library/react";
import { withBrowserRouter } from "../helpers/helpers";

import TodoList from "./TodoList";

const todos = [
  {
    completed: false,
    id: "cd745527-4c56-431a-87e2-26343d30e467",
    task: "my incomplete task"
  },
  {
    completed: true,
    id: "7cd67dd5-ee30-4eb6-9d35-5898cfa952f6",
    task: "my completed task"
  }
]

describe("TodoList", () => {
  it("renders an empty list with no items with no props", () => {
    render(withBrowserRouter(<TodoList />));
    const todoList = screen.getByTestId("todolist-container")
    const todoListItems = todoList.querySelectorAll(".todo-item")
    expect(todoList).toBeInTheDocument();
    expect(todoListItems).toHaveLength(0);
  })
  it("renders a single item", () => {
    render(withBrowserRouter(<TodoList todos={todos.slice(0, 1)} />)); // array containing first element
    const todoListItem = screen.getByText("my incomplete task");
    expect(todoListItem).toBeInTheDocument();
  })
  it("renders multiple items", () => {
    render(withBrowserRouter(<TodoList todos={todos} />));
    todos.forEach(todo => {
      const todoListItem = screen.getByText(todo.task);
      expect(todoListItem).toBeInTheDocument();  
    })
  })
})
