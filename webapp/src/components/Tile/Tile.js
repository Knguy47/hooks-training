import React from 'react';

import './Tile.css';

const Tile = props => {
  const {onTileClick, name, color, id, onDeleteClick} = props;

  return (
    <div
      onClick={onTileClick}
      className="tile-container"
      style={{backgroundColor: color}}
    >
      <div className="tile-delete">
        <button
          className="tile-delete-icon"
          onClick={event => {
            event.stopPropagation();
            onDeleteClick(id);
          }}
        >
          X
        </button>
      </div>
      <div className="tile-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Tile;
