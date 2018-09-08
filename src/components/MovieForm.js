import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { saveMovie, fetchMovie, updateMovie } from "../actions";
import { Redirect } from "react-router-dom";

class MovieForm extends Component {
  state = {
    _id: null,
    title: this.props.movie ? this.props.movie.title : "",
    cover: this.props.movie ? this.props.movie.cover : "",
    errors: {},
    isLoading: false,
    done: false
  };

  componentDidMount() {
    const {match} = this.props;
    if(match.params.id) {
      this.props.fetchMovie(match.params.id);
    }
  }

  //??
  componentWillReceiveProps(nextProps){
    this.setState({
      _id: nextProps.movie._id,
      title: nextProps.movie.title,
      cover: nextProps.movie.cover,
    });
  }

  handleOnChange = e => {
    if (!!this.state.errors[e.target.name]) {
      if (e.target.value !== "") {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({ errors });
      }
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let errors = {};
    if (this.state.title === "") {
      errors.title = "Movie title can NOT be empty.";
    }
    if (this.state.cover === "") {
      errors.cover = "Cover URL can NOT be empty.";
    }
    this.setState({ errors });
    let isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const { _id, title, cover } = this.state;
      if(_id) {
        this.props.updateMovie({ _id, title, cover }).then(
          () => {
            this.setState({ done: true });
          },
          err => {
            err.response.json().then(({ errors }) => {
              this.setState({ errors, isLoading: false });
            });
          }
        );
      } else {
        this.props.saveMovie({ title, cover }).then(
          () => {
            this.setState({ done: true });
          },
          err => {
            err.response.json().then(({ errors }) => {
              this.setState({ errors, isLoading: false });
            });
          }
        );
      }

      this.setState({ isLoading: true });
    }
  }

  render() {
    const form = (
      <div>
        <form
          className={classnames("ui", "form", {
            loading: this.state.isLoading
          })}
        >
          <h1>Add a new movie</h1>
          {!!this.state.errors.global && (
            <div className="ui negative message">
              {this.state.errors.global}
            </div>
          )}
          <div
            className={classnames("field", {
              error: !!this.state.errors.title
            })}
          >
            <label>Movie Title</label>
            <input
              value={this.state.title}
              onChange={this.handleOnChange}
              type="text"
              name="title"
              placeholder="Movie Title"
            />
            <span>{this.state.errors.title}</span>
          </div>
          <div
            className={classnames("field", {
              error: !!this.state.errors.cover
            })}
          >
            <label>Cover Image URL</label>
            <input
              value={this.state.cover}
              onChange={this.handleOnChange}
              type="text"
              name="cover"
              placeholder="Cover Image URL"
            />
            <span>{this.state.errors.cover}</span>
          </div>
          <div className="field">
            {this.state.cover !== "" && (
              <img
                className="ui medium bordered image"
                src={this.state.cover}
                alt="movie_cover"
              />
            )}
          </div>
          <button
            onClick={e => this.handleSubmit(e)}
            className="ui primary button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
    return <div>{this.state.done ? <Redirect to="/movies" /> : form}</div>;
  }
}

const mapStateToProps = (state, props) => {
  const {match} = props;
  if(match.params.id) {
    return {
      movie: state.movies.find(item => item._id === match.params.id)
    }
  }

  return {movie: null};
}

export default connect(
  mapStateToProps,
  { saveMovie, fetchMovie, updateMovie }
)(MovieForm);
