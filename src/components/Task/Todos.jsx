import React, { Component, Fragment } from "react";
import Todo from "./Todo";
import TodoContext from "../../context/TodoContext";
import AddNewTodo from "./AddNewTodo";

class Todos extends Component {
  render() {
    return (
      <Fragment>
        <TodoContext.Consumer>
          {(context) =>
            context.state.todos.length > 0 ? (
              context.state.todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                  <Todo
                    text={todo.text}
                    isCompleted={todo.completed}
                    deleted={() => context.handleDeleteTodo(todo.id)}
                    completed={() => context.handleCompletedTodo(todo.id)}
                    key={todo.id}
                    id={todo.id}
                  />
                </li>
              ))
            ) : (
              <div className="alert alert-light mt-3 w-75 mx-auto">
                <p className="text-center">
                  هیچ کاری برای امروز ثبت نشده دوست من
                </p>
              </div>
            )
          }
        </TodoContext.Consumer>
        <AddNewTodo />
      </Fragment>
    );
  }
}
export default Todos;
