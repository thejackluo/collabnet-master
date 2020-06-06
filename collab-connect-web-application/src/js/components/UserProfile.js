import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import "../../css/components/UserProfile.css";

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

class UserProfile extends Component {
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
      <div className="UserProfile">
        <div className="navbarProfile">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Idea
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="jumbotron">
          <h1 className="display-4">Welcome Coder</h1>
          <img
            src="profile.png"
            className="rounded-circle align-center"
            alt="Cinque Terre"
          />
          <p className="lead">
            I am intrested to work on technical projects like Machine Learning,
            AI and Web development. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Minus expedita id, assumenda nostrum voluptates
            ut, consequuntur quia repellat magni quasi reprehenderit iste cum.
            Omnis velit blanditiis possimus mollitia reprehenderit magni?
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>

          <div className="projects my-4">
            <h3 className="">DASHBOARD</h3>
            <div className="row">
              <div className="col-sm-4">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <div className="progress my-2 ">
                      <div
                        className="progress-bar progress_style"
                        role="progressbar"
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        72%
                      </div>
                    </div>
                    <a href="#" className="btn btn-dark">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">Project 2</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>

                    <div className="progress my-2 progress_style">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="12"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        12%
                      </div>
                    </div>
                    <a href="#" className="btn btn-dark">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <div className="progress my-2 progress_style">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="32"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        32%
                      </div>
                    </div>
                    <a href="#" className="btn btn-dark ">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>Technical Interest</h3>
          <p>
            <span className="badge badge-primary">GitHub</span>
            <span className="badge badge-secondary">Machine Learning</span>
            <span className="badge badge-success">React</span>
            <span className="badge badge-danger">firebase</span>
            <span className="badge badge-warning">Google Cloud</span>
          </p>

          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <a className="btn btn-dark btn-lg" href="#" role="button">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a className="btn btn-danger btn-lg" href="#" role="button">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </a>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default UserProfile;
