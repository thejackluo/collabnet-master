import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";

// Things to consider

//  - use classNameName instead of className
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
    return (
      <div className="ideaSlider">
        <div
          id="multi-item-example"
          className="carousel slide carousel-multi-item my-4"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div class
              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style= {float:left}>
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style="float:left">
                <div className="card mb-2">
                  <div className="card-body">
                    <h4 className="card-title">Project Name</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center ">
            <div className="controls-top  align-center mx-6 my-4">
              <a
                className="btn btn-sm bg-dark Text-center"
                href="#multi-item-example"
                data-slide="prev"
              >
                {" "}
                next
              </a>
            </div>
            <div className="controls-top  align-center mx-6">
              <a
                className="btn btn-sm bg-dark Text-center"
                href="#multi-item-example"
                data-slide="next"
              >
                previous
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ideaSlider;
