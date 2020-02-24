import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar, Frame, Line } from './components';

function App() {

  return (
    <div className="App">
      <main>
        <div style={{ padding: '20px' }}>
          <Frame height={100} yRange={[0, 100]} >
            
            <Line data={[12, 33, 66,77,88,44,5,66,66,64,22,33,45,67,89,43,45,33,33,89,90]} stroke={{ color: [[33,150,243, 1], [203, 56, 55, 1], [255, 235, 59, 1]], width: 2, style: "solid" }}/>
            <Line data={[20, 20, 20]} stroke={{ color: [0,0,0, 1], width: 1, style: "dash" }} />
          </Frame>
        </div>
      </main>
    </div>
  );
}

export default App;
