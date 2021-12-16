# Learn React Hooks

#### Counter as a React Component Branch

- Create a counter and get it to Increment and Decrement
- Add bootstrap `npm install bootstrap` and import 'bootstrap/dist/css/bootstrap.css';

#### Counter as a Function Component

- Create a counter using useState and get it to Increment and Decrement

#### Connect to an API - use AXIOS

https://www.freecodecamp.org/news/how-to-use-axios-with-react/

- Fetch https://randomuser.me/api and display it on screen
- Use Axios console.log the data (axios autommatically transforms the JSON data for you)
- Display the random user on the screen using both ASYNC AWAIT AND PROMISE
- Display data and image (first, last, age, country, profile image)

  - Store random user results in useState, set as empty array since there will be multiple random users (userInfo, setUserInfo)
  - Update useEffect - setUserInfo
  - Make sure fetchRandomData doesn't return results as a string - display as is (usually an object)
  - Function to capture the random user's info - getUserInfo
  - Use map array method on results since there will be multiple users. Learn about importance of keys
  - Display data in a Table - React Tables
    - Get basic table setup done. Use map method to setup the rows
    - Install React bootstrap to style the table npm install react-bootstrap bootstrap@5.1.3
    - NOTE: Need to figure out a cleaner way to do React Tables
  - Work on Pagination

#### Connect to an API - use FETCH

- Fetch https://randomuser.me/api and display it on screen
- Use Fetch (fetch is already built in) and console.log the data
- Display the random user on the screen using both ASYNC AWAIT AND PROMISE
