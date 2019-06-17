import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './FormInput.css';

const FormInput = props => {
  return (
    <div className="form-input">
      <Input onChange={() => {}} value={'Value'} />
      <Button name={props.buttonName} onClick={() => {}} />
    </div>
  );
};

export default FormInput;
