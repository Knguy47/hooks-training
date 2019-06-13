import React from 'react';

import './Tile.css';


const Tile = (props) => {
  const {onClick, name} = props;
  return (
    <div onClick={onClick} className="tile-container">
      <div className="tile-content">
        <img alt='' src="https://media3.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=790b76115d014a295765715545a5cf5e&rid=giphy.gif" />
      </div>
      <div className="tile-header">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Tile;