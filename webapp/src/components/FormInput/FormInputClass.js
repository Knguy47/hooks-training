import React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import "./FormInput.css";

class FormInput extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClearInputValue = this.handleClearInputValue.bind(this);
  }

  handleClearInputValue = () => {
    this.setState({ inputValue: "" });
  };

  handleButtonClick = () => {
    this.props.onSubmit(this.state.inputValue || "Untitled");
    this.handleClearInputValue();
  };

  handleOnChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render = () => {
    return (
      <div className="form-input">
        <Input onChange={this.handleOnChange} value={this.state.inputValue} />
        <Button name={this.props.buttonName} onClick={this.handleButtonClick} />
      </div>
    );
  };
}

export default FormInput;
