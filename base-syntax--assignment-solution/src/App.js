import React, { Component } from "react";
import "./App.css";
import Output from "./UserOutput";

class App extends Component {
  state = {
    username: ["azra", "bhaska"],
  };

  eventHandler = () => {
    this.setState({
      username: ["afi", "nia"],
    });
  };

  changeName = (event) => {
    this.setState({
      username: [event.target.value, "nia"],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.eventHandler} className="button">
          Change username
        </button>
        <Output username={this.state.username[0]} change={this.changeName} />
        <Output username={this.state.username[1]} />
      </div>
    );
  }
}

export default App;
