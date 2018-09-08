import React, { Component } from "react";
import { connect } from "react-redux";
import { saveMovie, fetchMovie, updateMovie } from "../actions";
import { Redirect } from "react-router-dom";
import MovieForm from "./MovieForm";

class MovieFormPage extends Component {
  state = {
    redirect: false
  };
  componentDidMount() {
    const { match } = this.props;
    if (match.params.id) {
      this.props.fetchMovie(match.params.id);
    }
  }

  saveMovie = ({ _id, title, cover }) => {
    if (_id) {
      return this.props.updateMovie({ _id, title, cover }).then(() => {
        this.setState({ redirect: true });
      });
    } else {
      return this.props.saveMovie({ title, cover }).then(() => {
        this.setState({ redirect: true });
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect ? (
          <Redirect to="/movies" />
        ) : (
          <MovieForm saveMovie={this.saveMovie} movie={this.props.movie} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { match } = props;
  if (match.params.id) {
    return {
      movie: state.movies.find(item => item._id === match.params.id)
    };
  }

  return { movie: null };
};

export default connect(
  mapStateToProps,
  { saveMovie, fetchMovie, updateMovie }
)(MovieFormPage);
