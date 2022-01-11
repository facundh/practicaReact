import React, { useEffect, useState } from 'react'
import Message from './Message';


import './effects.css'
const SimpleForm = () => {
    const [form, setForm] = useState({
        name: '',
        email:''
    });

    const {name , email } = form;
    useEffect(() => {
    //    console.log('hey')
    }, [])
    
    useEffect(() => {
    //    console.log('form cambio')
    }, [form]);

    useEffect(() => {
    //    console.log('email cambio')
    }, [email]);

    // desestructuro de mi evento el target
    const handleInputChange = ({target}) =>{
        // el e.target hace referencia al input que llama a esta funcion
        // console.log(e.target);
        // console.log(e.target.value);

        // asi actualizo los datos de mi input
        setForm({
            // Hago un spread por si hay elementos de mi formulario que no cambian
            ...form,
            // Dirigo mi accion con el target al input a cambiar en este caso el nombre 'name'(en estec caso) y lo que le cambio es el valor por eso llamo el value
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <br/>

            <div className='form-group'>
                <input 
                type='text'
                // Este es el nombre de mi elemento input
                name='name'
                placeholder='Tu nombre'
                autoComplete='off'
                // hace referencia a mi name de mi estado form

                value= {name}

                // por este value debo manejra un onChange
                onChange = {handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                type='email'
                // Este es el nombre de mi elemento input
                name='email'
                placeholder='adas@gmail.com'
                autoComplete='off'
                // hace referencia a mi name de mi estado form

                value= {email}

                // por este value debo manejra un onChange
                onChange = {handleInputChange}
                />
            </div>

            {(name === '12345') && <Message />}

        </>
    )
}

export default SimpleForm
