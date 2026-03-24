import React from 'react';
import { useState, useRef } from 'react';

function App(){
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState(0);
  const [arr, setArr] = useState([]);

  const textRef = useRef(null);
  

  const handleSubmit = () => {
    if (curr > 0 && !active) {
      setArr((prev) => [...prev, textRef.current.value]);
      setCurr((prev) => prev - 1);
      textRef.current.value = "";
    } else {
      setActive(true);
    }
  }

  function getRandomActivity() {
    if (arr.length < count) return "Error occurred earlier";
    let min = Math.ceil(0);
    let max = Math.floor(arr.length - 1);
    let index = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[index];
  }

  return (
    <div>
      {!active && <div>
        <h1>Enter number of hours you will study </h1>
        <input type="number" onChange = {(e) => {setCount(Number(e.target.value)); setCurr(Number(e.target.value));}}/> 
        <h1>Enter {count} break activities you would enjoy </h1>
        </div>}


      { curr > 0 && <div> <input type="text" ref={textRef}></input>
        <button type="button" onClick={handleSubmit}> Submit</button> </div> } 
    

      {active && <div>
        <h1> Spin the wheel! </h1>
        <img src="./wheel.gif"></img>
        <h2> Your activity is {getRandomActivity()} </h2>
      </div>}
    </div>
  );
}

export default App;