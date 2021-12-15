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

  const getData = () =>
    fetch("https://randomuser.me/api").then((data) => {
      let randomDataJSON = data.json();
      console.log(randomDataJSON);
      // return JSON.stringify(randomDataJSON);
    });

  useEffect(() => {
    getData().then((data) => setRandomUserData(data));
  }, []);

  // const fetchRandomData = () => {
  //   fetch("https://randomuser.me/api")
  //     .then((res) => {
  //       console.log(res.json());
  //       res.json();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   const url = "https://randomuser.me/api";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json.results);
  //       setRandomUserData(json.results);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, [randomUserData]);

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
        <p>{randomUserData}</p>
      </div>
    </div>
  );
}

export default App;

/*<div className="api-data-container mt-5">
<button onClick={fetchRandomData}>Get Random User</button>
</div>
*/
