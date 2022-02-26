import { useState } from "react";

export const useForm = ( second= [] ) => {
    const [values, setValues] = useState( second );
    
    const reset = () => {
      setValues( second )
    }
   
    const handleInputChange = ( { target } ) => {
        setValues({
        ...values,
        [ target.name ]: target.value
    });
  }
  return [ values, handleInputChange, reset ];
}