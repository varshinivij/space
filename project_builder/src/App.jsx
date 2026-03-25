import React from 'react';
import { useState, useRef, useEffect } from 'react';
import wheelGif from './assets/wheel.gif'; 
import wheelPng from './assets/wheel_still.png';
import './index.css';

function App(){
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState(0);
  const [arr, setArr] = useState([]);
  const [click, setClick] = useState(false);
  const [showClick, setshowClick] = useState(false);
  const [finalClick, setfinalClick] = useState(false);
  
  const textRef = useRef(null);

  useEffect(()=>{
    const time = setTimeout(()=> {
      setshowClick(true);
      setfinalClick(true);
    }, 1000);
    return () => clearTimeout(time);
  }, [click]);
  

  const handleSubmit = () => {
    if (curr > 0) {
      let currentVal = textRef.current.value.trim();
      const newArr = [...arr, currentVal];
      setArr(newArr);
      if (curr == 1) setActive(true);
      setCurr((prev) => prev - 1);
      textRef.current.value = "";
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
    <div className="card">
      {active == false && <div className="counter">
        <h1>Enter number of hours you will study </h1>
        <input type="number" onChange = {(e) => {setCount(Number(e.target.value)); setCurr(Number(e.target.value));}}/> 
        </div>}

      {active == false && curr > 0 && <div className="counter"> <h1>Enter {curr} break activities you would enjoy </h1>
      {arr.map(curr => <h2> {curr} </h2>)}
      <input type="text" ref={textRef}></input>
        <button type="button" onClick={handleSubmit}> Submit</button> </div> } 
    

      {active == true && <div className="wheel-wrapper">
        {click == false && <div>
          <button type="button" onClick={() => setClick(true)}> Spin the wheel </button> 
          <img src={wheelPng}/> 
          </div>}
        {click == true && finalClick == false && <img src={wheelGif}/> }
        {showClick == true && <h2> Your activity is {getRandomActivity()} </h2>}
      </div>}
    </div>
  );
}

export default App;