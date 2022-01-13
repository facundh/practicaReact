import React from "react";
import { useForm } from "../../Hooks/useForm";

export const TodoAdd = ({ handleTodoAdd }) => {
  // Consumo mi custoom hook: me sirve para cualquier proyecto
  // desestructuro mi use form, se hace con corchetes porque es un array
  // El formValues puedo desesctructurarlo porque solo manejo un input, seria en lugar de forma values { description }
  const [{ description }, handleInputChange, reset] = useForm({
    // el description se asocia con el NAME  de mi input
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion apra que no me agreue strings vacios

    if (description.trim().length <= 1) {
      return;
    }
    // me creo una constante para almacenar mi neuva tarea
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    // Y con el dispatch le mando a mi reducer la accion a realizar
    handleTodoAdd(newTodo);

    // Limpio el formulario
    reset();
  };
  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />

        <button className="btn btn-outline-primary mt-1 w-100" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
