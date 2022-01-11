import React, { useState } from "react";

function CounterApp() {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter4: 20,
    counter5: 20,
  });


  // Extraigo los valores que me interesan de mi state
  const {counter1, counter2} = state;
  return (
    <>
      <h1>Counter App {counter1}</h1>
      <h1>Counter App {counter2}</h1>
      <hr />

      <button
        className="btn btn-primary m-4 w-25"
        onClick={() => {
            // Hago una copia de mi state y solo cambio lo que me interesa
          setState({...state, counter1: counter1 + 1, counter2: counter2 - 1});
          
        }}
      >
        +1
      </button>
    </>
  );
}

export default CounterApp;
