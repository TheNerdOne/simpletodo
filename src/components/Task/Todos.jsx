import React, { Component } from "react";
import Todo from "./Todo";
import TodoContext from "../../context/TodoContext";
class Todos extends Component {
  render() {
    return (
      <TodoContext.Consumer>
        {(context) =>
          context.state.todos.length > 0 ? (
            context.state.todos.map((todo) => (
              <li key={context.state.todo.id} className="list-group-item">
                <Todo
                  text={todo.text}
                  isCompleted={todo.completed}
                  deleted={() => context.handleDeleteTodo(todo.id)}
                  completed={() => context.handleCompletedTodo(todo.id)}
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
    );
  }
}
export default Todos;
