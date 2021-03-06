import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieList from "./MovieList";
import { fetchMovies, deleteMovie } from "../actions";

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div>
        <MovieList movies={this.props.movies} deleteMovie={this.props.deleteMovie} />
      </div>
    );
  }
}

MoviePage.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  { fetchMovies, deleteMovie }
)(MoviePage);
