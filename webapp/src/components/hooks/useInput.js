import { useState } from "react";

export const useInput = initialValue => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleOnChange = event => {
    setInputValue(event.target.value);
  };

  const resetUseInput = () => {
    setInputValue("");
  };

  return [handleOnChange, inputValue, resetUseInput];
};
