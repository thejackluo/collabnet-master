import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import "../../css/components/App.css";
import Example from "./Example";

// To Do: change the github page link to a link you want

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <header className="App-header">
            <h1>Hello World</h1>
            <button className="btn btn-primary">Click here</button>
          </header>
          <Example />
        </div>
      </div>
    );
  }
}

export default App;
