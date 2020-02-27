import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Bar, Frame, Line } from "./components";
// import Scintilla from 'scintilla';

{
  /* <Scintilla.Frame>
  <Scintilla.Line />
  <Scintilla.Line />
</Scintilla.Frame> */
}

function App() {
  return (
    <div className="App">
      <main>
        <div style={{ padding: "20px" }}>
          <Frame height={100} yRange={[0, 100]}>
            <Line
              data={[
                30,
                30,
                30,
                60,
                45,
                90,
                45,
                67,
                88,
                77,
                55,
                34,
                44,
                45,
                23,
                34,
                36,
                67,
                89
              ]}
              stroke={{
                color: {
                  gradient: [
                    [33, 150, 243, 1],
                    [0, 0, 0, 1],
                    [255, 0, 0, 1]
                  ]
                },
                width: 0,
                style: "solid"
              }}
              fill={{
                // gradient: [
                //   [255, 0, 0, 1],
                //   [33, 150, 243, 1],
                //   [0, 0, 0, 1]
                // ],
                solid: [255, 0, 0, 1]
              }}
            />
            <Line
              data={[50, 50, 50]}
              stroke={{
                color: { solid: [255, 0, 0, 1] },
                width: 1,
                style: "dash"
              }}
            />
            <Line
              data={[10, 20, 30, 40, 50, 30, 50, 100]}
              stroke={{
                color: {
                  solid: [
                    [255, 0, 0, 1],
                    [255, 0, 0, 1],
                    [255, 0, 0, 1],
                    [255, 0, 0, 1],
                    [255, 0, 0, 1],
                    [255, 0, 0, 1],
                    [33, 150, 243, 1],
                    [33, 150, 243, 1]
                  ]
                },
                width: 2,
                style: "solid"
              }}
            />
          </Frame>
        </div>
      </main>
    </div>
  );
}

export default App;
