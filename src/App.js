import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  const DecrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Learn React Hooks</h1>
      <div className="counter-item">
        <h3>Counter: {counter}</h3>
        <button className="m-2" onClick={IncrementCounter}>
          Increment
        </button>
        <button className="m-2" onClick={DecrementCounter}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
