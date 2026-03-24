import React from 'react';
import { useState, useRef } from 'react';
import wheelGif from './assets/wheel.gif'; 

function App(){
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState(0);
  const [arr, setArr] = useState([]);

  const textRef = useRef(null);
  

  const handleSubmit = () => {
    if (curr > 0) {
      let val = textRef.current.value.trim();
      const newArr = [...arr, val];
      setArr(newArr);
      setCurr((prev) => prev - 1);
      textRef.current.value = "";
      if (curr == 1) setActive(true);
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
      {active == false && <div>
        <h1>Enter number of hours you will study </h1>
        <input type="number" onChange = {(e) => {setCount(Number(e.target.value)); setCurr(Number(e.target.value));}}/> 
        
        </div>}

      { curr > 0 && <div> <h1>Enter {curr} break activities you would enjoy </h1>
      <input type="text" ref={textRef}></input>
        <button type="button" onClick={handleSubmit}> Submit</button> </div> } 
    

      {active == true && <div>
        <h1> Spin the wheel! </h1>
        <img src={wheelGif}></img>
        <h2> Your activity is {getRandomActivity()} </h2>
      </div>}
    </div>
  );
}

export default App;