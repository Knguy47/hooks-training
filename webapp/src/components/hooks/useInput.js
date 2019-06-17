import {useState} from 'react';

export const useInput = callBack => {
  const [inputValue, setInputValue] = useState();

  const handleOnChange = event => {
    setInputValue(event.target.value);
  };

  const resetUseInput = () => {
    setInputValue('');
  };

  const handleButtonClick = () => {
    callBack(inputValue || 'Untitled');
    resetUseInput();
  };

  return [handleOnChange, inputValue, handleButtonClick];
};
