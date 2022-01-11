import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

// dos casos de uso

// Primer caso: Cuando debemos enviar una funcion a un componente hijo
// Segundo: Cuando tenemos un useEffect
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(
        (num) => {
            // en los casos de los state en el ejmplo de abajo puedo solucionar el tema de las dependencias y se evita que se renderice el componente
            // showincrement cada vez que se modifica mi contador counter + 1 no es c => c + num, eso si a fuerza debo utilizar el react memo en mi componente 
            // el cual importo en este caso el showincrement.

            //recibo el argumento y de esa manera elimino la dependencia
            setCounter(c => c + num);
        },
        [setCounter],
    )

    //
    useEffect(() => {
      // ???
       
    }, [increment])

    return (
        <div>
            <h1>useCallbackHook: { counter }</h1>

          <ShowIncrement increment={increment} />
        </div>
    )
}
