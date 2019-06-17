import React, {useState} from 'react';

import Tile from './components/Tile/Tile';
import FormInput from './components/FormInput/FormInputDemo';

import './App.css';

function App() {
  const [tileList, setTileList] = useState([
    {name: 'Tile', color: 'pink', id: 0}
  ]);

  return (
    <div className="App">
      <div className="app-title" style={{color: 'black'}}>
        {'Welcome'}
      </div>
      <FormInput onSubmit={() => {}} buttonName="Add Card" />
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
