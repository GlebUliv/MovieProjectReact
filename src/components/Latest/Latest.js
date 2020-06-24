import React, { Component } from "react";
import "./Latest.css";
import Spinner from "../Spinner/Spinner";

class Latest extends Component {
  state = {
    movies: [],
    showSpinner: true,
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1a271b8d8281edf6db7a03e7998beb84&language=en-US&page=2"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results, showSpinner: false });
      })
      .catch(console.log);
  }

  render() {
    const { showModal } = this.props;
    const { movies, showSpinner } = this.state;
    return (
      <div className="list">
        {showSpinner && <Spinner />}
    
          <h1>Latest</h1>
        
        <div className="main">
          {movies.map(
            ({ poster_path, title, overview, release_date, vote_count, vote_average }) => (
              <div className="container playing">
                <div className="content">
                  {/* <p>{overview}</p> */}
                  <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt="Background"
                    onClick={() => {
                      showModal(title, overview, release_date, vote_count, vote_average);
                    }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Latest;
