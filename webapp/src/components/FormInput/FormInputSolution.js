import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

import {useInput} from '../hooks/useInput';

import './FormInput.css';

const FormInput = props => {
  const [handleOnChange, inputValue, handleButtonClick] = useInput(
    props.onSubmit
  );

  return (
    <div className="form-input">
      <Input onChange={handleOnChange} value={inputValue} />
      <Button name={props.buttonName} onClick={handleButtonClick} />
    </div>
  );
};

export default FormInput;
