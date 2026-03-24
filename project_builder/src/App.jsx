import React from 'react';
import { useState, useRef } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState(0);
  const [arr, setArr] = useState([]);
  const [result, setResult] = useState('');

  const textRef = useRef(null);

  const handleSubmit = () => {
    if (curr > 0) {
      const val = textRef.current.value.trim();
      if (!val) return;
      const newArr = [...arr, val];
      setArr(newArr);
      setCurr((prev) => prev - 1);
      textRef.current.value = '';

      // All activities entered — go active
      if (curr === 1) setActive(true);
    }
  };

  function getRandomActivity(activities) {
    if (activities.length === 0) return 'No activities entered';
    const index = Math.floor(Math.random() * activities.length);
    return activities[index];
  }

  const handleSpin = () => {
    setResult(getRandomActivity(arr));
  };

  return (
    <div>
      {!active && (
        <div>
          <h1>Enter number of hours you will study</h1>
          <input
            type="number"
            onChange={(e) => {
              const n = Number(e.target.value);
              setCount(n);
              setCurr(n);
              setArr([]);
            }}
          />
          <h1>Enter {curr} break activities you would enjoy</h1>
        </div>
      )}

      {!active && curr > 0 && (
        <div>
          <input type="text" ref={textRef} />
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {active && (
        <div>
          <h1>Spin the wheel!</h1>
          <button onClick={handleSpin}>🎡 Spin</button>
          {result && <h2>Your break activity: {result}</h2>}
        </div>
      )}
    </div>
  );
}

export default App;