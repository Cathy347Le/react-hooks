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

  const fetchRandomData = () => {
    fetch("https://randomuser.me/api")
      .then((res) => {
        console.log(res.json());
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
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
      <div className="api-data-container mt-5">
        <button onClick={fetchRandomData}>Get Random User</button>
      </div>
    </div>
  );
}

export default App;
