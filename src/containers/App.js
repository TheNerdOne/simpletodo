import React, { Component, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";

import Todos from "../components/Task/Todos";
import TodoContext from "../context/TodoContext";
import AddNewTodo from "../components/Task/AddNewTodo";

class App extends Component {
  state = {
    todos: [],
    todo: "",
    appTitle: "لیست کارهای روزانه",
  };

  constructor(props) {
    super(props);
  }

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
      id: Math.floor(Math.random() * 1000),
      text: this.state.todo,
      completed: false,
      //   use uuid
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
        <Fragment>
          {" "}
          {/* just an example of HOC */}
          <div className="rtl d-flex justify-content-center container">
            <div className="col-md-8">
              <div className="card-hover-shadow-2x mb-3 card p-card">
                <Todos />
              </div>
            </div>
          </div>
          <AddNewTodo />
          <ToastContainer rtl />
        </Fragment>
      </TodoContext.Provider>
    );
  }
}

export default App;
