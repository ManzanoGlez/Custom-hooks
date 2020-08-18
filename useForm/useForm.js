import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const setInputValue = (inputName: String, value: String) => {
    setValues({
      ...values,
      [inputName]: value,
    });
  };

  const reset = () => setValues(initialState);

  return [values, handleInputChange, setInputValue, reset];
};
