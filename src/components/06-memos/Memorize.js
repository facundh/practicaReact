import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { Small } from "./Small";

import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <button className="btn btn-outline-warning" onClick={increment}>
        +1
      </button>

      <button
        className="btn-secondary"
        onClick={() => {
          setShow(!show);
        }}
      >
        hide / show {JSON.stringify(show)}
      </button>
    </>
  );
};
