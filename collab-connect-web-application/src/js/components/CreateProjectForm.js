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

class CreatePodForm extends Component {
  initialState = {
    name: "",
    description: "",
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    // any method using this keyword must bind
    // example: this.method = this.method.bind(this)
  }

  componentDidMount() {
    // Things to do when the component is first rendered into the dom
  }

  componentWillUnmount() {
    // Things to do when the component is removed
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="CreatePodForm">
        <h3>Name: {this.state.name}</h3>
        <h3>Description: {this.state.description}</h3>
        <form className="form my-4">
          <div class="form-group">
            <label for="name">Project Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Project Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="form-group">
            <label for="description">Project Description:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Project Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <input
            type="button"
            value="submit"
            class="btn btn-primary"
            onClick={this.submitForm}
          />
        </form>
      </div>
    );
  }
}

export default CreatePodForm;
