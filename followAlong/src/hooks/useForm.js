import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useForm = (initialValues)=> {
    const [values, setValues] = useLocalStorage("form", initialValues);
  
    const handleChanges = e => {
      //setValues("warren")
      //setValues({
      //  email:"w@w.com"
      // firstName:"warren"
      //});
  
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return([values, handleChanges, clearForm]);
  };

  export default useForm;