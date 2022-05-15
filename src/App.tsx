import React from 'react';
import { Container, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  return (
    <Container className="App centered">
      <Board/>
    </Container>

  );
}

export default App;
