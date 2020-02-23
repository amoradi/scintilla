import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar, Frame, Line } from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main>
        <div style={{ background: 'red' }}>
          <Frame height={100} >
            <Bar data={[1, 2, 3, 90]} />
            <Line data={[1, 2, 3, 90]} />
          </Frame>
        </div>
      </main>
    </div>
  );
}

export default App;
