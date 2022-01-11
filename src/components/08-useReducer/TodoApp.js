import React, {useReducer} from 'react';
import  {todoReducer}  from './todoReducer.js';


import './styles.css';

// 1 paso creamos el intialState

const initialState = [{
    id: new Date().getTime(),
    desc:'Aprender React',
    done:false
}];

// 2 Paso creamos el reducer, pero esto lo realizamos en un archivo independiente 
// porque se puede alargar mucho y lo agrego a mi reducer.


export const TodoApp = () => {

    // inicializamos nuestro use reducer
    // Lo primero es el reducer que hace referencia a mi fucnion usereducer
    // initalStae es el estado inicial
    // Init se utiliza como una funcion para inicializar el state en caos sea como procesado o haga varias acciones
    // Dispatch: dispara las acciones hacia mi reducer
    // const [state, dispatch] = useReducer(reducer, initialState, init);

    // Primer caso mas simple sin disptach y el init, al state como es posicional puedo ponerle cualquier nombre en esta
    // caso conviene poner todos porque es una lista de tareas 
    const [ todos ] = useReducer(todoReducer, initialState );

    console.log(todos)

    return (
        <>
            <h1>Todo App</h1>
            <hr/>

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>

        </>
    )
}
