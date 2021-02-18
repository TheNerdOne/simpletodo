import React, { Component } from "react";
import TodoContext from "./TodoContext";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

class GlobalState extends Component {
  state = {
    todos: [],
    todo: "",
    appTitle: "لیست کارهای روزانه",
  };

  //   constructor(props) {
  //     super(props);
  //   }

  handleDeleteTodo = (id) => {
    let todos = [...this.state.todos];
    let filteredTodo = todos.filter((p) => p.id !== id);
    this.setState({ todos: filteredTodo });
    toast.error("کار با موفقیت حذف شد.", {
      position: "top-right",
      closeButton: true,
      closeOnClick: true,
    });
  };

  handleCompletedTodo = (id) => {
    const todos = [...this.state.todos];
    const { todos: allTodos } = this.state;
    const todoIndex = allTodos.findIndex((p) => p.id === id);
    const todo = allTodos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    this.setState({ todos });
  };
  handleNewTodo = () => {
    const todos = [...this.state.todos];
    const todo = {
      id: uuidv4(),
      text: this.state.todo,
      completed: false,
    };
    if (todo !== "" && todo !== " ") {
      todos.push(todo);
      this.setState({ todos, todo: "" });
      toast.success("کار با موفقیت اضافه شد.", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
    document.querySelector("#newTodoInput").value = "";
  };

  handleTodoInput = (e) => {
    this.setState({ todo: e.target.value });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          state: this.state,
          handleDeleteTodo: this.handleDeleteTodo,
          handleNewTodo: this.handleNewTodo,
          handleCompletedTodo: this.handleCompletedTodo,
          handleTodoInput: this.handleTodoInput,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default GlobalState;
