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
        <h1>Counter as a React Component</h1>
        <div className="counter-item">
          <h3>Counter: {this.state.count}</h3>
          <button className="m-2" onClick={this.IncrementCounter}>
            Increment
          </button>
          <button className="m-2" onClick={this.DecrementCounter}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default App;
