import React, { useState, useEffect } from "react";
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

  // FETCH AND PROMISE
  const fetchRandomData = () => {
    return (
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        // .then((jsonData) => console.log(jsonData)) //Need to use another then to console.log the JSON data
        .then((jsonStringData) => JSON.stringify(jsonStringData, null, 2))
    );
  };

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      // console.log(randomData);
      setRandomUserData(randomData || "No user data found.");
    });
  }, []);

  // FETCH AND ASYNC AWAIT
  // useEffect(() => {
  //   const url = "https://randomuser.me/api";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //       const jsonString = JSON.stringify(json, null, 2);
  //       setRandomUserData(jsonString);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
        <pre>{randomUserData}</pre>
      </div>
    </div>
  );
}

export default App;

/*<div className="api-data-container mt-5">
<button onClick={fetchRandomData}>Get Random User</button>
</div>

*/
