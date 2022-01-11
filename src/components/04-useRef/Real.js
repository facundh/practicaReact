import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


import '../02-useEffect/effects.css';

export const Real = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <h1>Real useRef Example</h1>
            
            {/* Si Show esta en true que muestre el componente */}
           { show && <MultipleCustomHooks /> } 

           <button className='btn btn-primary'
           onClick={handleShow}
           >
                Show/Hide
           </button>
        </>

        
    )
}
