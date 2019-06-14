import React from 'react';
import './Button.css';

const Button = props => {
  const {onClick} = props;
  return (
    <button onClick={onClick} className="button">
      {props.name}
    </button>
  );
};

export default Button;
