import React from "react";

import "./Tile.css";

const Tile = props => {
  const { onClick, name, color } = props;

  const buttonStyle = {
    backgroundColor: color,
    border: "none",
    "font-weight": "bold",
    "font-size": "20px",
    color: "white"
  };

  return (
    <div
      onClick={onClick}
      className="tile-container"
      style={{ backgroundColor: color }}
    >
      <div className="tile-delete">
        <button style={{ ...buttonStyle }}>X</button>
      </div>
      <div className="tile-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Tile;
