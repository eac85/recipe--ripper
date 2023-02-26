import React, { useState } from 'react';
import './css/fonts.css';
import './css/index.css';
import {handleLogic, disappear} from "./logic";


function Button(props) {
  const [isPressed, setIsPressed] = useState(false);
  const [name] = useState(props.name);
  const [id] = useState(props.id);

  const handleClick = () => {
    setIsPressed(true);
    handleLogic(id);
  };

  return (
    <button
      onClick={handleClick}
      className="button-56"
    >
      {props.name}
    </button>
  );
}

export default Button;