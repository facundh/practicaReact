import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coors, setCoors] = useState({ x: 0, y: 0});
    const {x, y} = coors;

    // Para evitar problemas con mis efectos, debo armar una funcion separada para llamarla cuando la necesito, dentro del use effect veo nla utlilidad

     // (x e y) son desestructurados del e (evento)
    const mouseMove = (e) =>{
        const coors = {x: e.x, y: e.y}
        setCoors(coors)

    }

    useEffect(() => {
       
        window.addEventListener('mousemove', mouseMove)

        // Sirve para vaciar formularios, o realizar bajas de suscripciones
        return () => {

            // Desmonto el efecto y asi evito duplicidades
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <>
            <h3>Prueba de Message</h3>
            <p>
                x:{x}
                y:{y}
            </p>
        </>
    )
}

export default Message
