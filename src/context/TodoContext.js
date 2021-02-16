import { createContext } from "react";
import { cssTransition } from "react-toastify";

const TodoContext = createContext({
  state: {},
  handleDeleteTodo: () => {},
  handleNewTodo: () => {},
  handleTodoInput: () => {},
  handleCompletedTodo: () => {},
});

export default TodoContext;
