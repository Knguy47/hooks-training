import React, {useState} from 'react';

import Tile from './components/Tile/Tile'
import Button from './components/Button/Button';


import './App.css';

function App() {
  const [cardList, setCardList] = useState([]);
  const [selectedCardName, setSelectedCardName] = useState('');

  const addCard = card => {
    setCardList(prevState => ([
      ...prevState,
      {name: 'test'},
    ]));

  }

  return (
    <div className="App">
      <div>{selectedCardName}</div>
      <Button onClick={addCard}/>
      <div className="app-view">
        {cardList.map(({name}) => <Tile key={name} name={name} onClick={() => setSelectedCardName(name)}/>)}
      </div>
    </div>
  );
}

function handler() {
  const [] = useState()
}

export default App;
