import { useState } from "react"


// este hook recibe un objeto con sus propiedades
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
      setValues(initialState);
    }

      const handleInputChange = ({ target }) => {
        setValues({
          ...values,
    
          [target.name]: target.value,
        });
      };

      return [values, handleInputChange, reset];
}
