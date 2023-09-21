/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import React, { useState } from 'react';

function Square({ number, isActive }) {
  const squareStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '80px',
    margin: '20px',
    fontSize: '30px',
    border: isActive ? '7px solid blue' : '7px solid grey'
  };

  return (
    <div style={squareStyle}>{number}</div>
  )
}

function Button({ onClick }) {
  return (
    <button onClick={onClick}>Toggle</button>
  )
}

export default function App() {
  const [activeSquareIndex, setActiveSquareIndex] = useState(0);

  const toggle = () => {
    setActiveSquareIndex((activeSquareIndex + 1) % 5)
  }

  const display = {
    display: 'flex',
    flexDirection: 'row'
  }
  return (
    <div>
      <div style={display}>
        <Square number={1} isActive={1 === activeSquareIndex}></Square>
        <Square number={2} isActive={2 === activeSquareIndex}></Square>
        <Square number={3} isActive={3 === activeSquareIndex}></Square>
        <Square number={4} isActive={4 === activeSquareIndex}></Square>
        <Square number={5} isActive={0 === activeSquareIndex}></Square>
      </div>
      <Button onClick={toggle}></Button>
    </div>
  )
};
