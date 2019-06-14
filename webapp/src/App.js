import React, {useState} from 'react';

import Tile from './components/Tile/Tile';
import FormInput from './components/FormInput/FormInput';
import {colorGenerator} from './utils/colorGenerator';
import {useTimer} from './components/hooks/useTimer';

import './App.css';

function App() {
  const [cardList, setCardList] = useState([]);
  const [selectedCardName, setSelectedCardName] = useState('Welcome');
  const [counter] = useTimer();

  const handleOnInputSubmit = input => {
    setCardList([...cardList, {name: input, color: colorGenerator()}]);
  };

  return (
    <div className="App">
      <div className="app-timer">{counter}</div>
      <div className="app-title">{selectedCardName}</div>
      <FormInput onSubmit={handleOnInputSubmit} buttonName="Add Card" />
      <div className="app-view">
        {cardList.map(({name, color}, i) => (
          <Tile
            key={i}
            name={name}
            color={color}
            onClick={() => setSelectedCardName(name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
