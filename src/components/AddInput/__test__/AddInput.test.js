import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const addInputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    expect(addInputElement).toBeInTheDocument();
  });
  it("should be able to type into input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const addInputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(addInputElement, { target: { value: "task 1" } });
    expect(addInputElement.value).toBe("task 1");
    fireEvent.click(buttonElement);
    expect(addInputElement.value).toBe("");
  });
});
