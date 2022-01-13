import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer.js";
import { useForm } from "../../Hooks/useForm.js";

import "./styles.css";
import { TodoList } from "./TodoList.js";
import { TodoAdd } from "./TodoAdd.js";

// 1 paso creamos el intialState
// Usando init, lo que me devuelva es lo que va a ser mi inital state, por eso por default en mi reducer ponemos cono un array vacio el initialstate
const init = () => {
  // Pequeña verificacion de que si mi localstorage esta vaacio que me devuelva un array vacio, sino que me devuelva mis todos
  return JSON.parse(localStorage.getItem("todos")) || [];
};

// 2 Paso creamos el reducer, pero esto lo realizamos en un archivo independiente
// porque se puede alargar mucho y lo agrego a mi reducer.

export const TodoApp = () => {
  // inicializamos nuestro use reducer
  // Lo primero es el reducer que hace referencia a mi funcion usereducer
  // initalStae es el estado inicial
  // Init se utiliza como una funcion para inicializar el state en caos sea como procesado o haga varias acciones
  // Dispatch: dispara las acciones hacia mi reducer
  // const [state, dispatch] = useReducer(reducer, initialState, init);

  // Primer caso mas simple sin disptach y el init, al state como es posicional puedo ponerle cualquier nombre en esta
  // caso conviene poner todos porque es una lista de tareas
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);

    const actionDelete = {
      type: "delete",
      payload: todoId,
    };

    dispatch(actionDelete);
  };

  const handleToogle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleTodoAdd = (newTodo) => {
    // Este type es lo que voy a recibir en mi switch del reducer
    // Le paso la tarea a mi reducer
    dispatch({
      action: "add",
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>Todo App {todos.length}</h1>
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
