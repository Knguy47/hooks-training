import React from 'react';

import './Input.css';

const Input = props => {
  return (
    <div className="input-container">
      <input
        placeholder="Tile Name"
        className="input-text"
        type="text"
        name="tilename"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default Input;
