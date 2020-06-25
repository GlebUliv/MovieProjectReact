import React, { Component } from "react";
// import Spinner from "../Spinner/Spinner";

class Movie extends Component {
  state = {
    movies: [],
  };

  render() {
    const {
      showModal,
      movies: {
        title,
        overview,
        release_date,
        vote_count,
        vote_average,
        poster_path,
      },
    } = this.props;
    // const { movies } = this.state;
    return (
      <div className="container playing">
        <div className="content">
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt="Background"
            onClick={() => {
              showModal(
                title,
                overview,
                release_date,
                vote_count,
                vote_average
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
