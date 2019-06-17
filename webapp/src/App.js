import React, {useState} from 'react';

import Tile from './components/Tile/Tile';
import FormInput from './components/FormInput/FormInput';
import {colorGenerator} from './utils/colorGenerator';

import './App.css';

function App() {
  const [tileList, setTileList] = useState([
    {name: 'Tile', color: colorGenerator(), id: 0}
  ]);

  return (
    <div className="App">
      <div className="app-title" style={{color: 'black'}}>
        {'Welcome'}
      </div>
      <FormInput onSubmit={() => {}} buttonName="Add Tile" />
      <div className="app-view">
        {tileList.map(tile => (
          <Tile
            key={tile.id}
            name={tile.name}
            color={tile.color}
            id={tile.id}
            onTileClick={() => {}}
            onDeleteClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
