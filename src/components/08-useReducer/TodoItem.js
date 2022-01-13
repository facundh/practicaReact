import React from "react";

export const TodoItem = ({ todo, index, handleDelete, handleToogle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      {/* Condicion para saber si una tarea esta finalizada marcarla como comleta es lo que esta dentro de mi classname */}
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToogle(todo.id)}
      >
       
        {index + 1}. {todo.desc}
      </p>

      {/* El onclick va con un callback porque recibe un argumento mi funcion  handle delete */}
      <button
        className="btn btn-danger text-center"
        onClick={() => handleDelete(todo.id)}
      >
        
        Eliminar
      </button>
    </li>
  );
};
