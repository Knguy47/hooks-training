import React, {useState} from 'react';
import './Button.css';


const Button = (props) => {
  const {onClick} = props;
  const [isOn, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  return (<button onClick={()=> {
    setToggle(!isOn);
    setCount(count + 1);
    onClick();
  }} className={isOn ? "button" : 'button off'}>{count}</button>)
}

export default Button;