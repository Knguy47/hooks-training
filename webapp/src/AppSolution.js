import React, {useState} from 'react';

import Tile from './components/Tile/Tile';
import FormInput from './components/FormInput/FormInputDemo';
import {colorGenerator} from './utils/colorGenerator';
import {useTimer} from './components/hooks/useTimer';

import './App.css';

function App() {
  const [tileList, setTileList] = useState([
    {name: 'Tile', color: colorGenerator(), id: 0}
  ]);
  const [selectedTile, setSelectedTile] = useState({});
  const [counter] = useTimer();

  const handleOnInputSubmit = input => {
    setTileList([
      ...tileList,
      {name: input, color: colorGenerator(), id: tileList.length}
    ]);
  };

  const handleDeleteClick = (id, name) => {
    setTileList(tileList.filter(card => card.id !== id));
    setSelectedTile({});
  };

  return (
    <div className="App">
      <div className="app-timer">User session time: {counter}</div>
      <div className="app-title" style={{color: selectedTile.color}}>
        {selectedTile.name || 'Welcome'}
      </div>
      <FormInput onSubmit={handleOnInputSubmit} buttonName="Add Card" />
      <div className="app-view">
        {tileList.map(tile => (
          <Tile
            key={tile.id}
            name={tile.name}
            color={tile.color}
            id={tile.id}
            onTileClick={() => setSelectedTile(tile)}
            onDeleteClick={() => handleDeleteClick(tile.id, tile.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
