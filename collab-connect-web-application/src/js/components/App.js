import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import "../../css/components/App.css";
import RowProjectCard from "./RowProjectCard";
import CreateProjectForm from "./CreateProjectForm";
import Filter from "./Filter";
import SideBar from "./SideBar";

// To Do: change the github page link to a link you want

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <CreateProjectForm />
          <RowProjectCard />
          <Filter />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;
