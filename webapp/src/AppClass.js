import React from 'react';

import Tile from './components/Tile/Tile';
import FormInput from './components/FormInput/FormInput';
import {colorGenerator} from './utils/colorGenerator';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      tileList: [],
      selectedTileName: {}
    };

    this.handleOnInputSubmit = this.handleOnInputSubmit.bind(this);
    this.handleOnTileClick = this.handleOnTileClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  timer;

  componentDidMount = () => {
    this.timer = setInterval(this.handleTimer, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  handleTimer = () => {
    this.setState({counter: this.state.counter + 1});
  };

  handleOnInputSubmit = input => {
    this.setState(prevState => {
      return {
        cardList: [
          ...prevState.cardList,
          {name: input, color: colorGenerator()}
        ]
      };
    });
  };

  handleDeleteClick = (id, name) => {
    this.setState(prevState => ({
      cardList: prevState.cardList.filter(card => card.id !== id)
    }));
  };

  handleOnTileClick = name => {
    this.setState({selectedTileName: name});
  };

  render = () => {
    return (
      <div className="App">
        <div className="app-timer">{this.state.counter}</div>
        <div className="app-title">{this.state.selectedTileName}</div>
        <FormInput onSubmit={this.handleOnInputSubmit} buttonName="Add Card" />
        <div className="app-view">
          {this.state.tileList.map(tile => (
            <Tile
              key={tile.id}
              name={tile.name}
              color={tile.color}
              id={tile.id}
              onTileClick={this.handleOnTileClick}
              onDeleteClick={this.handleDeleteClick}
            />
          ))}
        </div>
      </div>
    );
  };
}

export default App;
