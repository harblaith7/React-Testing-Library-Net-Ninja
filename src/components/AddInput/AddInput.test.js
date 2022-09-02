import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { v4 } from "uuid"; 

import AddInput from "./AddInput";

jest.mock('uuid', () => ({ v4: jest.fn() }));

describe("AddInput", () => {

  beforeEach(() => {
    const dummyUUID = "00000000-0000-0000-0000-000000000000";
    v4.mockReturnValue(dummyUUID);
  })
  it("renders", () => {
    render(<AddInput />)
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });
  it("shows text when the user types in characters", () => {
    render(<AddInput />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, { target: {value: "My new task" }});
    expect(inputElement.value).toBe("My new task");
  });

  it("adds a new item when the 'Add' button is clicked", () => {
    const setTodos = jest.fn();
    const expectedNewTask = {
      completed: false,
      id: "00000000-0000-0000-0000-000000000000",
      task: "My new task"
    };
    render(<AddInput todos={[]} setTodos={setTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const addButton = screen.getByText("Add");
    fireEvent.change(inputElement, { target: { value: "My new task" }});
    fireEvent.click(addButton);
    expect(setTodos).toHaveBeenCalledTimes(1);
    expect(setTodos).toHaveBeenCalledWith([expectedNewTask]);
  });
  it("does not add a new item when the 'Add' button is clicked with an empty field", () => {
    const setTodos = jest.fn();
    render(<AddInput todos={[]} setTodos={setTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const addButton = screen.getByText("Add");
    expect(inputElement.value).toBe("");
    fireEvent.click(addButton);
    expect(setTodos).not.toHaveBeenCalled();
  });
})

