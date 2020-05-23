import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import ProjectPopup from "./ProjectPopup";

// Things to consider

//  - use className instead of class
//  - self closing tag must be closed with a slash
//     - example: <img />
//  - this is not html, it is jsx
//  - all styles must follow camelCase format
//     - background-color becomes backgroundColor
//     - onclick becomes onClick
//  - you can use {} inside of attributes and text nodes
//     - inside the curly you can put any js expressions
//  - You can add example image using this link
//     - https://picsum.photos/width/height
//     - Be sure to change the width and height

//<img src="..." className="card-img-top" alt="..."></img>

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.projectCardData.name,
      description: this.props.projectCardData.description,
      projectPopupData: {
        data: "Hello World",
      },
    };
    // any method using this keyword must bind
    // example: this.method = this.method.bind(this)
  }

  componentDidMount() {
    // Things to do when the component is first rendered into the dom
  }

  componentWillUnmount() {
    // Things to do when the component is removed
  }

  handlePopup() {}

  render() {
    return (
      <div className="ProjectCard">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <p className="card-text">{this.state.description}</p>
            <ProjectPopup projectData={this.state.projectPopupData} />
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;

/*

getBadgeClasses() {
    let classes = "badge mx-4";
    if (this.state.count === 0) {
      classes += " badge-warning";
    } else {
      classes += " badge-primary";
    }
    return classes;
  }
  */
