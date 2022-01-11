import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../Hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  // Si no alteramos el counter no se va a ejecutar el proceso pesado, esto oprimiza la velocidad de mi aplicacion
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <>
      <h1>MemoHook</h1>
      <h1>
        Counter: <small> {counter} </small>
      </h1>

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-outline-warning" onClick={increment}>
        +1
      </button>

      <button
        className="btn-secondary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {/* Para mostrar in booelan en pantalla hay que usar el stringify */}
        hide / show {JSON.stringify(show)}
      </button>
    </>
  );
};
