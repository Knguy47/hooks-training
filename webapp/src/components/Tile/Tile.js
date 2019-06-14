import React from "react";

import "./Tile.css";

const Tile = props => {
  const { onClick, name, color } = props;

  return (
    <div onClick={onClick} className="tile-container">
      <div className="tile-content">
        <div style={{ backgroundColor: color }} />
      </div>
      <div className="tile-header">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Tile;
