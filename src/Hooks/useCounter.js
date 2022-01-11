import {useState} from 'react'

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);
    

    // con el factor hago mas flexible el parametro para sumar y restar puedo pasar el valor que quiera en la funcion
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initialState)
    }

    return {counter,  increment, decrement, reset }
}
