import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  const DecrementCounter = () => {
    setCounter(counter - 1);
  };

  // AXIOS AND PROMISE
  const fetchRandomData = () => {
    return (
      axios
        // .get("https://randomuser.me/api")
        .get("https://randomuser.me/api?results=3")
        .then((data) => {
          //handle success
          // console.log(data);
          // console.log(data.data.results);
          // return JSON.stringify(data);
          return data; //can take 3 parameters, value, replacer, and space
        })
        .catch((err) => {
          //handle error
          console.log(err);
        })
    );
  };

  const getUserName = (userInfo) => {
    const {
      name: { first, last },
      location: { country },
      dob: { age },
      gender,
    } = userInfo;
    // console.log(userInfo);
    return `${first} ${last} ${gender} ${age} ${country}`;
  };

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      // setRandomUserData(randomData);
      setRandomUserData(
        JSON.stringify(randomData, null, 2) || "No user data found."
      );
      setUserInfo(randomData.data.results);
    });
  }, []);

  // AXIOS AND ASYNC AWAIT
  // useEffect(() => {
  //   const url = "https://randomuser.me/api";

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       console.log(response);
  //       const jsonString = JSON.stringify(response, null, 2);
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
        <div className="api-data-container">
          <pre>{randomUserData}</pre>
          {userInfo.map((userInfo, index) => (
            <div className="my-5" key={index}>
              <p>{getUserName(userInfo)}</p>
              <img src={userInfo.picture.thumbnail} alt="thumbnail-profile" />
            </div>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((userInfo) => (
              <tr>
                <td>
                  {userInfo.name.first} {userInfo.name.last}
                </td>
                <td>{userInfo.gender}</td>
                <td>{userInfo.dob.age}</td>
                <td>{userInfo.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

/*<button className="mt-5" onClick={fetchRandomData}>
Fetch Random user
</button>
*/

// {userInfo.map((userInfo, index) => (
//   <div className="my-5" key={index}>
//     <p>{getUserName(userInfo)}</p>
//     <img src={userInfo.picture.thumbnail} alt="thumbnail-profile" />
//   </div>
// ))}
