import './index.css'
import {useState} from 'react';

function Sample(){

  const [state, setState] = useState(false);

  function handleOnClick( {target} ){
    console.log(`Button was ${target.value}`);
    setState((prev) => !prev); 
  }
  
  return (<div>
      <h1>Welcome to the Project Builder Application</h1>
      <h2>This is my first-application so I am very nervous</h2>
      <h2>Do you want to hear something cool?</h2>
      <button value="clicked" onClick={handleOnClick}>{state}</button>
      <img src='/coder.jpg'/>
    </div> );
}

export default Sample;