import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "react-bootstrap/Table";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState("");
  const [userInfoList, setUserInfoList] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1); //initialize to the first page

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  const DecrementCounter = () => {
    setCounter(counter - 1);
  };

  // AXIOS AND PROMISE
  const fetchRandomData = (pageNumber) => {
    return (
      axios
        // .get(`https://randomuser.me/api?results=3?page=${pageNumber}`)
        .get(`https://randomuser.me/api?page=${pageNumber}&results=3`)
        .then((data) => {
          console.log(data);
          // console.log(data.data.results);
          // return JSON.stringify(data);
          return data; //can take 3 parameters, value, replacer, and space
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  const getUserInfo = (userInfo) => {
    const {
      name: { first, last },
      location: { country },
      dob: { age },
      gender,
    } = userInfo;
    // console.log(userInfo);
    return `${first} ${last} ${gender} ${age} ${country}`;
  };

  const getNextUser = () => {
    fetchRandomData(nextPageNumber).then((randomData) => {
      const newUserList = [...userInfoList, ...randomData.data.results];
      setUserInfoList(newUserList);
      setNextPageNumber(randomData.data.info.page + 1);
    });
  };

  useEffect(() => {
    // fetchRandomData(nextPageNumber).then((randomData) => {
    //   // setRandomUserData(randomData);
    //   setRandomUserData(
    //     JSON.stringify(randomData, null, 2) || "No user data found."
    //   );
    //   setUserInfoList(randomData.data.results);
    //   setNextPageNumber(randomData.data.info.page + 1);
    // });
    getNextUser();
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
          <button className="m-2" onClick={getNextUser}>
            Add Next Random User
          </button>
          {userInfoList.map((userInfo, index) => (
            <div className="my-5" key={index}>
              <p>{getUserInfo(userInfo)}</p>
              <img src={userInfo.picture.thumbnail} alt="thumbnail-profile" />
            </div>
          ))}
        </div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {userInfoList.map((userInfo, index) => (
              <tr key={index}>
                <td>
                  {userInfo.name.first} {userInfo.name.last}
                </td>
                <td>{userInfo.gender}</td>
                <td>{userInfo.dob.age}</td>
                <td>{userInfo.location.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;

//Button to fetch the data
/*<button className="mt-5" onClick={fetchRandomData}>
Fetch Random user
</button>
*/

//Manual way to writing a table
// {userInfoList.map((userInfo) => (
//   <tr>
//     <td>
//       {userInfo.name.first} {userInfo.name.last}
//     </td>
//     <td>{userInfo.gender}</td>
//     <td>{userInfo.dob.age}</td>
//     <td>{userInfo.location.country}</td>
//   </tr>
// ))}
