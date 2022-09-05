import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { withBrowserRouter } from "../helpers/helpers";

import Todo from "./Todo";

const addTask = ({ name, completed }) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const addButton = screen.getByText("Add");
  fireEvent.change(inputElement, { target: {value: name }});
  fireEvent.click(addButton);
  // if task is to be initialized as completed, click it after it is added
  if (completed) {
    const task = screen.getByText(name);
    fireEvent.click(task);
  }
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
  it("does not affect other tasks if a task is clicked", () => {
    render(withBrowserRouter(<Todo />));
    const tasks = [{
      name: "my first incomplete task",
      completed: false
    }, {
      name: "my second incomplete task",
      completed: false
    }, {
      name: "my completed task",
      completed: true
    }]
    tasks.forEach(task => addTask(task));
    const todoListItem1 = screen.getByText("my first incomplete task");
    const todoListItem2 = screen.getByText("my second incomplete task");
    const todoListItem3 = screen.getByText("my completed task");
    fireEvent.click(todoListItem1);
    expect(todoListItem1).toHaveClass("todo-item-completed");
    expect(todoListItem2).not.toHaveClass("todo-item-completed");
    expect(todoListItem3).toHaveClass("todo-item-completed");
    fireEvent.click(todoListItem1);
    expect(todoListItem1).not.toHaveClass("todo-item-completed");
    expect(todoListItem2).not.toHaveClass("todo-item-completed");
    expect(todoListItem3).toHaveClass("todo-item-completed");
  });
})

