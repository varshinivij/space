import './index.css';
import { useEffect, useState } from 'react';
import { Button, Container } from '@mui/material';

function Sample() {
  const [state, setState] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    state ? setText("This is my first application ever!") : setText("Bye then!");
  }, [state]
  );

  return (
    <div id='main_app'>
      <Container maxWidth="fixed" className="my_container">
        <h1>Welcome to the Project Builder Application</h1>
        <h1>Do you want to hear something cool?</h1>
        <Button variant="contained" value="clicked" onClick={() => {setState((prev) => !prev)}}>
          {state ? 'Yes' : 'No'}
        </Button>
        <h2>{text}</h2>
        <img src="/coder.jpg" alt="coder" />
      </Container>
    </div>
  );
}

export default Sample;
