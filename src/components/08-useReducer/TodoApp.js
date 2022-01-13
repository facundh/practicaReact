import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer.js";
import { TodoList } from "./TodoList.js";
import { TodoAdd } from "./TodoAdd.js";

import "./styles.css";
// 1 paso creamos el intialState

const init = () => {
 
  return JSON.parse(localStorage.getItem("todos")) || [];
};


export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {

    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToogle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleTodoAdd = (newTodo) => {

    dispatch({
      type: 'add',
      payload: newTodo
    });
  };

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleTodoAdd={handleTodoAdd} />
        </div>
      </div>
    </>
  );
};
