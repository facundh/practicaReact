import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './counter.css'
export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter()
    return (
        <>
            <h1>Hook Counter : {state}</h1>
           

            <button className='btn btn-primary m-5' onClick={() => increment(2)}> +1 </button>
            <button className='btn btn-secondary m-5'onClick={() => decrement(2)} > -1</button>
            <button className='btn btn-success m-5' onClick={reset}> Reset</button>
        </>
    )
}
