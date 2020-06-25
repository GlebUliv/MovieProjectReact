import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    const {
      showModal,
      title,
      overview,
      release_date,
      vote_count,
      vote_average,
    } = this.props;
    return (
      <div
        className="modal-overlay"
        onClick={() => {
          showModal();
        }}
      >
        <span>X</span>
        <div className="modal-content">
          <h1>{title}</h1>
          <p>
            Description: <br />
          </p>
          <h5>{overview}</h5>
          <h2>
            <br />
            Release date: {release_date}
          </h2>
          <h4>
            <br />
            Total votes: {vote_count}
          </h4>
          <h4>Vote average: {vote_average}</h4>
        </div>
      </div>
    );
  }
}

export default Modal;
