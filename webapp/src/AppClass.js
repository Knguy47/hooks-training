import React from "react";

import Tile from "./components/Tile/Tile";
import FormInput from "./components/FormInput/FormInput";
import { colorGenerator } from "./utils/colorGenerator";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      cardList: [],
      selectedCardName: "Welcome"
    };

    this.handleOnInputSubmit = this.handleOnInputSubmit.bind(this);
    this.handleOnTileClick = this.handleOnTileClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  timer;

  componentDidMount = () => {
    this.timer = setInterval(this.handleTimer, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  handleTimer = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleOnInputSubmit = input => {
    this.setState(prevState => {
      return {
        cardList: [
          ...prevState.cardList,
          { name: input, color: colorGenerator() }
        ]
      };
    });
  };

  handleOnTileClick = name => {
    this.setState({ selectedCardName: name });
  };

  render = () => {
    return (
      <div className="App">
        <div className="app-timer">{this.state.counter}</div>
        <div className="app-title">{this.state.selectedCardName}</div>
        <FormInput onSubmit={this.handleOnInputSubmit} buttonName="Add Card" />
        <div className="app-view">
          {this.state.cardList.map(({ name, color }, i) => (
            <Tile
              key={i}
              name={name}
              color={color}
              onClick={() => this.handleOnTileClick(name)}
            />
          ))}
        </div>
      </div>
    );
  };
}

export default App;
