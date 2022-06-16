import React from "react";

const ToDos = ({ todos, deleteToDo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteToDo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have nothing To Do!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default ToDos;
