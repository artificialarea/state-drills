import React from "react";
import HelloWorld from "./state-drills/HelloWorld";
import "./App.css";
import Bomb from "./state-drills/Bomb";

function App() {
  return (
    <div className="App">
      <div>
        <HelloWorld />
      </div>
      <div>
        <Bomb />
      </div>
    </div>
  );
}

export default App;
