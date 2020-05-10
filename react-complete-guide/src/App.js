import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "azra", age: "19" },
      { name: "bhaska", age: "19" },
      { name: "rogra", age: "19" },
    ],
  };

  switchHandler = (newName) => {
    // console.log("Was Clicked");
    // this.state.persons[0].name = "Muhammad Bhaska";
    this.setState({
      persons: [
        { name: "afifah", age: "19" },
        { name: "naura", age: "19" },
        { name: newName, age: "19" },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "afifah", age: "19" },
        { name: event.target.value, age: "19" },
        { name: "kamilia", age: "19" },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <p>This i s really working!</p>
        <button style={style} onClick={() => this.switchHandler("adzania")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchHandler("fajriyati")}
          change={this.nameChangedHandler}
        >
          My Hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
