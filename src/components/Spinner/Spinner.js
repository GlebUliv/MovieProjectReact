import React, { Component } from "react";
import "./Spinner.css";

class Spinner extends Component {


  render() {
    return (
      <div className="spinner">
          <img src="spinner.gif" alt="" />
      </div>
    );
  }
}

export default Spinner;
