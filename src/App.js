import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState("");

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  const DecrementCounter = () => {
    setCounter(counter - 1);
  };

  const fetchRandomData = () => {
    return axios
      .get("https://randomuser.me/api")
      .then((data) => {
        //handle success
        console.log(data);
        // return JSON.stringify(data);
        return JSON.stringify(data, null, 2); //can take 3 parameters, value, replacer, and space
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      // setRandomUserData(randomData);
      setRandomUserData(randomData || "No user data found.");
    });
  }, []);

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
        <div className="api-data-container">
          <pre>{randomUserData}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;

/*<button className="mt-5" onClick={fetchRandomData}>
Fetch Random user
</button>
*/
