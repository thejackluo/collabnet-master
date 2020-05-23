import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import "../../css/components/Example.css";

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jack</td>
              <td>Programmer</td>
            </tr>
            <tr>
              <td>Jack</td>
              <td>Entrepreneur</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Example;
