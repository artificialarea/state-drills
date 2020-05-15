import React from "react";
import "./App.css";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import Roulette from './state-drills/Roulette';

function App() {
  return (
    <div className="App">

      <div>
        <Roulette bulletInChamber={6}/>
      </div>

      <div>
        <Bomb />
      </div>

      <div>
        <HelloWorld />
      </div>
      
    </div>
  );
}

export default App;
