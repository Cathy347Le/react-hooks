import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  IncrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  DecrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Learn React Hooks</h1>
        <div className="counter-item">
          <h2>Counter: {this.state.count}</h2>
          <button onClick={this.IncrementCounter}>Increment</button>
          <button onClick={this.DecrementCounter}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
