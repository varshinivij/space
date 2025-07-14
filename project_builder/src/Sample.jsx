import './index.css';
import { useState } from 'react';
import { Button, Container } from '@mui/material';


function Sample() {
  const [state, setState] = useState(false);

  function handleOnClick({ target }) {
    console.log(`Button was ${target.value}`);
    setState((prev) => !prev);
    state ? text = "This is my first application ever" : text ="BYE THEN!"; 
  }

  return (
    <div id='main_app'>
      <Container maxWidth="sm">
      <h1>Welcome to the Project Builder Application</h1>
      <h1>Do you want to hear something cool?</h1>
      <Button variant="contained" value="clicked" onClick={handleOnClick}>
        {state ? 'Yes' : 'No'}
      </Button>
      <img src="/coder.jpg" alt="coder" />
      </Container>
    </div>
  );
}

export default Sample;
