import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import "../../css/components/App.css";
import RowProjectCard from "./RowProjectCard";
import CreateProjectForm from "./CreateProjectForm";
import Filter from "./Filter";
import SideBar from "./SideBar"; // To Do: change the github page link to a link you want

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "Project 1",
          description: "Project 1 test des",
        },
        {
          name: "Project 2",
          description: "Project 2 test des",
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // any method using this keyword must bind
    // example: this.method = this.method.bind(this)
  }

  handleSubmit = (project) => {
    this.setState({
      projects: [...this.state.projects, project],
    });
  };

  /* removeProject = (index) => {
    const { projects } = this.state;

    this.setState({
      projects: projects.filter((project, i) => {
        return i !== index;
      }),
    });
  }; */

  render() {
    const { projects } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <SideBar />
          <CreateProjectForm handleSubmit={this.handleSubmit} />
          <RowProjectCard projectData={projects} />
          <Filter />
        </div>
      </div>
    );
  }
}

export default App;
