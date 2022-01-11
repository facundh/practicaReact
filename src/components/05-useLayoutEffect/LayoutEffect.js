import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
  // Importo mi useCounter
  const { counter, increment } = useCounter(1);
  const [box, setBox] = useState({});
  // Este es mi state desestructurado de mi use fetch, loading:en true y data en null el error no lo estoy manejando
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  
  // 1 Paso extraer la informacion de mi state, debo hacer una pequeña validacion
  // Explicacion de la linea que sigue lo que quiero hacer es cambiar la data que es NULL en un FALSE ; aqui en este
  // ejemplo lo que hago es consultar si existe la data entonces extraigo la data en la posicion 0
  // si no existe la data osea esta null como cuando carga entonce no sigue evaluando por ende no extrae la data ya que es undefinded
  const { quote } = !!data && data[0];
  
  const pTag = useRef();
  useLayoutEffect(() => {
    setBox(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout</h1>

      <blockquote className="blockquote text-end">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(box, null, 3)}</pre>

      <button className="btn btn-secondary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
