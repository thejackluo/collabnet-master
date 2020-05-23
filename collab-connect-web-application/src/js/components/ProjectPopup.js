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

class ProjectPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // any method using this keyword must bind
    // example: this.method = this.method.bind(this)
  }

  componentDidMount() {
    // Things to do when the component is first rendered into the dom
  }

  componentWillUnmount() {
    // Things to do when the component is removed
  }

  render() {
    let modalClass = "modal fade ";

    return (
      <div className="ProjectPopup">
        <div className="container">
          <button
            type="button"
            className="btn btn-primary"
            dataToggle="modal"
            dataTarget="#myModal"
          >
            Click on this
          </button>
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Idea Name</h4>
                  <button type="button" className="close" dataDismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">Modal body..</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-danger"
                    dataDismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-Primary"
                    dataDismiss="modal"
                  >
                    Join the slack Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPopup;
