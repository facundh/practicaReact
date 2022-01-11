import React, { useEffect, useState } from "react";
import { useForm } from "../../Hooks/useForm";

import "./effects.css";
const FormWithCustomHook = () => {
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  useEffect(() => {
    console.log('emial cambio')
  }, [email])

  const handleSubmit = (e) =>{
      e.preventDefault();
    console.log(values)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <br />

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="adas@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Pass"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
          Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
