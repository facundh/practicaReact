import React from 'react';
import {todos, handleDelete, handleToogle } from './TodoApp';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    todos, handleDelete, handleToogle
}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
            {/* Mapeo mis todos para ver cada uno */}
            {todos.map((todo, index) => (
               <TodoItem todo={todo} key={todo.id} index={index} handleDelete={handleDelete} handleToogle={handleToogle} />
            ))}
          </ul>
        </>
    )
}
