import React, { useState } from "react";

import Tile from "./components/Tile/Tile";
import FormInput from "./components/FormInput/FormInput";
import { colorGenerator } from "./utils/colorGenerator";
import { useTimer } from "./components/hooks/useTimer";

import "./App.css";

function App() {
  const [cardList, setCardList] = useState([]);
  const [selectedCardName, setSelectedCardName] = useState("Welcome");
  const [counter] = useTimer();

  const handleOnInputSubmit = input => {
    setCardList([
      ...cardList,
      { name: input, color: colorGenerator(), id: Math.random() }
    ]);
  };

  const removeCard = (id, name) => {
    setCardList(cardList.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      <div className="app-timer">{counter}</div>
      <div className="app-title">{selectedCardName}</div>
      <FormInput onSubmit={handleOnInputSubmit} buttonName="Add Card" />
      <div className="app-view">
        {cardList.map(({ name, color, id }, i) => (
          <Tile
            key={i}
            name={name}
            color={color}
            id={id}
            onTileClick={() => setSelectedCardName(name)}
            onDeleteClick={() => removeCard(id, name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
