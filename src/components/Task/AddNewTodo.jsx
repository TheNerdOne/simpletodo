import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const AddNewTodo = () => {
  const context = useContext(TodoContext);

  return (
    <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-100 d-flex">
          <input
            type="text"
            className="form-control rounded"
            placeholder="اضافه کردن کار جدید"
            value={context.todo}
            onChange={context.handleTodoInput}
            id="newTodoInput"
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm bg-transparent fa fa-2x fa-plus-square"
              onClick={context.handleNewTodo}
              style={{ marginTop: "-2px", color: "#9fff80" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTodo;
