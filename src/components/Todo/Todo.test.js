import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { withBrowserRouter } from "../helpers/helpers";

import Todo from "./Todo";

const addTask = ({ name }) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const addButton = screen.getByText("Add");
  fireEvent.change(inputElement, { target: {value: name }});
  fireEvent.click(addButton);
}

describe("Todo", () => {
  it("renders", () => {
    render (withBrowserRouter(<Todo />))
    const todo = screen.getByTestId("todo");
    expect(todo).toBeInTheDocument();
  })
  it("adds a new task through the input", () => {
    render(withBrowserRouter(<Todo />));
    const task = {
      name: "my incomplete task",
      completed: false
    }
    addTask(task);
    const todoListItem = screen.getByText(task.name);
    expect(todoListItem).toBeInTheDocument();
  });
  it("marks a clicked incomplete task as completed", () => {
    render(withBrowserRouter(<Todo />));
    const task = {
      name: "my incomplete task",
      completed: false
    }
    addTask(task);
    const todoListItem = screen.getByText("my incomplete task");
    expect(todoListItem).not.toHaveClass("todo-item-completed");
    fireEvent.click(todoListItem);
    expect(todoListItem).toHaveClass("todo-item-completed");
  });
  it("marks a clicked completed task as incomplete", () => {
    render(withBrowserRouter(<Todo />));
    const task = {
      name: "my incomplete task",
      completed: false
    }
    addTask(task);
    const todoListItem = screen.getByText("my incomplete task");
    fireEvent.click(todoListItem);
    expect(todoListItem).toHaveClass("todo-item-completed");
    fireEvent.click(todoListItem);
    expect(todoListItem).not.toHaveClass("todo-item-completed");
  });
})

