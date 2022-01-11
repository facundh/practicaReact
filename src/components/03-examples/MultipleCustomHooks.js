import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  // Importo mi useCounter
  const { counter, increment } = useCounter(1);
  // Este es mi state desestructurado de mi use fetch, loading:en true y data en null el error no lo estoy manejando
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // 1 Paso extraer la informacion de mi state, debo hacer una pequeña validacion
  // Explicacion de la linea que sigue lo que quiero hacer es cambiar la data que es NULL en un FALSE ; aqui en este
  // ejemplo lo que hago es consultar si existe la data entonces extraigo la data en la posicion 0
  // si no existe la data osea esta null como cuando carga entonce no sigue evaluando por ende no extrae la data ya que es undefinded
  const { author, quote, series } = !!data && data[0];

  return (
    <div>
      <h1>Custom Hook Breaking Bad!!</h1>

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
            <h2 className='text-decoration-underline text-danger'>{series}</h2>
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-secondary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
