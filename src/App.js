import React from "react";
import Characters from "./components/Characters";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Starwars Characters</h1>
        <Characters />
      </header>
    </div>
  );
}

export default App;
