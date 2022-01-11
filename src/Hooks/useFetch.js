import { useEffect, useRef, useState } from "react";

// Recibe por argumento una url
export const useFetch = (url) => {

  // Prueba con useRef para solventar el problema de que me haga crash la aplicacion cuando carga un componente y se cierra de manera
  // repentina por demora en la carga o por lo que sea
  
  // La idea de este ref es que mantenga la referencia,  se iniciliza en true porque efectivamente el componente esta renderizando
  // la idea principal es que el hook manetga la referenicua mientras el componente esta vivo o cuando el componente sigue montado 
  // cuando yo cambie los valores de mi isMounted yo no quiero lanzar una renderizacion del componente simplemente estoy manteniendo la referencia 
  // al valor
  const isMounted = useRef(true);

  // Uso un useEffect para cuando se ejecuta la primera vez el componente, por eso las llaves vacias

  useEffect(() => {
    // Con esto evito el error en caso de cierre repentino de mi componente, aseguro mas mi peticion fetch, que si mi componente se desmonta mi setSTATE no se va a ejecutar
    return () => {
      isMounted.current = false;
    }
  }, [])

  // Chequear que venga una url

  if (!url) {
    console.log("Es necesario una url");
  }
  // Pr defecto tiene un estado inicial
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // Una vez recibido el url ejecutamos un efecto

  useEffect(() => {

    
      if(isMounted.current){
        // Este paso es para que se me cargue el loading cuando camnio de qoute
      setState({ data: null, loading: true, error: null });
      // Peticion a mi url
      fetch(url)
       // Forma de recibir la respuesta a mi peticion
        .then((resp) => resp.json())
        // Data es para extraer lo que quiero de mi peticion
        .then((data) => {
          setState({ loading: false, error: null, data });
        });
      } else {
        console.log('Setstate no se ejecuto')
      }
      
   
  }, [url]);


  return state;
};
