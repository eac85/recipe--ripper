import React, { useState, useLayoutEffect } from 'react';
import Button from "./Button";
import './css/fonts.css';
import './css/index.css';
import logic from "./logic";

function RecipeRipper() {
 const [isPressed, setIsPressed] = useState(false);
 const [buttons, setButtons] = useState([
  { id: 1, name: 'start' }
  ]);


 function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


return (
  <div>
  <h1 id="title">RECIPE RIPPER</h1>
  <div id="page" style={{paddingTop: '30px' }}>
  <div>
  <div id="textareas">
  <label htmlFor="textarea1">RECIPE RIPPER</label>
  <textarea id="textarea1" cols={32}>add ingredients</textarea>
  <textarea id="textarea2" cols={32} style={{ display: 'none' }}>add instructions</textarea>
  </div>

  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
    <div id="button1">
      <Button
      key="1"
      name="start"
      text="start"
      isPressed={isPressed}
      setIsPressed={setIsPressed}
      id="1"
      />
    </div>

    <div id="button2">
      <Button
      key="2"
      name="next"
      text="next"
      isPressed={isPressed}
      setIsPressed={setIsPressed}
      id="2"
      />
    </div>

    <div id="button3">
      <Button
      key="3"
      name="send"
      text="send"
      isPressed={isPressed}
      setIsPressed={setIsPressed}
      id="3"
      />
    </div>
  </div>           
  </div>
  </div>
  </div>
  );
}

export default RecipeRipper;