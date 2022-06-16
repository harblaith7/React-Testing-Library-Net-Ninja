import React, { Component } from "react";
import ToDos from "./ToDos";
import "./App.css";
import AddToDo from "./AddToDo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "learn react" },
      { id: 2, content: "learn react again" },
    ],
  };

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    })
  }

  addToDo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center purple-text">ToDo's</h1>
        <ToDos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
