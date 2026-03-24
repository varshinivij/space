import React from 'react';
import { useState, useRef } from 'react';

function App(){
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState(0);
  const [arr, setArr] = useState([]);

  const textRef = useRef(null);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (curr > count) {
      setArr((prev) => [...prev, textRef.current.value]);
      setCurr((prev) => prev - 1)
    } else {
      setActive(true);
    }
  }

  function getRandomActivity() {
    if (length(arr) < count) return "Error occurred earlier";
    min = Math.ceil(0);
    max = Math.floor(length(arr) - 1);
    index = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[index];
  }

  return (
    <div>
      {!active && <div>
        <input onChange = {(e) => {setCount(Number(e.target.value)); setCurr(Number(e.target.value));}}> Enter number of yours you will study </input>
        <h1>Enter {count} break activities you would enjoy </h1>
        curr && <input type="text" ref={textRef}></input>
        <button type="submit" onClick={handleSubmit}> Submit</button>
      </div>}

      {arr && <div>
        <h1> Spin the wheel! </h1>
        <img src="./wheel.gif"></img>
        <h2> </h2>
      </div>}
    </div>
  );
}

export default App;