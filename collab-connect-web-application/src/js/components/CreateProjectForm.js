import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";

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

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    // any method using this keyword must bind
    // example: this.method = this.method.bind(this)
  }

  componentDidMount() {
    // Things to do when the component is first rendered into the dom
  }

  componentWillUnmount() {
    // Things to do when the component is removed
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
      description: this.state.description,
    });
  };

  handleChangeDescription = (event) => {
    this.setState({ name: this.state.name, description: event.target.value });
  };

  ha;

  render() {
    return (
      <div className="Example">
        <h3>Name: {this.state.name}</h3>
        <h3>Description: {this.state.description}</h3>
        <form className="form my-4">
          <div class="form-group">
            <label for="pname">Project Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Project Name"
              name="pname"
              onChange={this.handleChangeName}
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="form-group">
            <label for="pdescription">Project Description:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Project Description"
              name="pdescription"
              onChange={this.handleChangeDescription}
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Example;
