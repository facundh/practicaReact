import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleDelete, handleToogle }) => {
  return (
    
      <ul className="list-group list-group-flush">
        {/* Mapeo mis todos para ver cada uno */}
        {
            todos.map((todo, i) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                index={i}
                handleDelete={handleDelete}
                handleToogle={handleToogle}
            />
            ))
        }
      </ul>
    
  );
};
