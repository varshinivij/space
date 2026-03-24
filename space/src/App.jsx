import React from 'react';


function App(){
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  const textRef = useRef("");
  var curr = 0;
  let arr = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (curr > count) {
      arr.push(e.current.value);
      curr -= 1;
    } else {
      setActive(true);
    }
  }

  function getRandomActivity(max) {
    if (length(arr) < count) return "Error occurred earlier";
    min = Math.ceil(0);
    max = Math.floor(max - 1);
    index = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[index];
  }

  return (
    !active && <div>
      <input onChange = {() => setCount(value)} >  Enter number of yours you will study </input>
      <h1>Enter {count} break activities you would enjoy </h1>
      curr && <input type="text" ref={textRef}></input>
      <button type="submit" onSubmit={handleSubmit}> Submit</button>
    </div>

    arr && <div>
      <h1> Spin the wheel! </h1>
      <img></img>
      <h2> </h2>
    </div>

    

  );
}