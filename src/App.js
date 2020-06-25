import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import Latest from "./components/Latest/Latest";
import Upcoming from "./components/Upcoming/Upcoming";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
    title: "",
    overview: "",
    release_date: "",
    vote_count: "",
    vote_average: "",
  };

  showModal = (title, overview, release_date, vote_count, vote_average) => {
    this.setState({
      showModal: !this.state.showModal,
      title,
      overview,
      release_date,
      vote_count,
      vote_average,
    });
  };

  render() {
    const {
      showModal,
      title,
      overview,
      release_date,
      vote_count,
      vote_average,
    } = this.state;
    return (
      <div className="wrapper">
        {showModal && (
          <Modal
            showModal={() => this.showModal()}
            title={title}
            overview={overview}
            release_date={release_date}
            vote_count={vote_count}
            vote_average={vote_average}
          />
        )}

        <div className="">
          <NowPlaying
            showModal={(
              title,
              overview,
              release_date,
              vote_count,
              vote_average
            ) =>
              this.showModal(
                title,
                overview,
                release_date,
                vote_count,
                vote_average
              )
            }
          />
        </div>

        <div className="">
          <Latest
            showModal={(
              title,
              overview,
              release_date,
              vote_count,
              vote_average
            ) =>
              this.showModal(
                title,
                overview,
                release_date,
                vote_count,
                vote_average
              )
            }
          />
        </div>

        <div className="">
          <Upcoming
            showModal={(
              title,
              overview,
              release_date,
              vote_count,
              vote_average
            ) =>
              this.showModal(
                title,
                overview,
                release_date,
                vote_count,
                vote_average
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
