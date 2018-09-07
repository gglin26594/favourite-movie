import React, { Component } from "react";
import classnames from "classnames";

class MovieForm extends Component {
  state = {
    title: "",
    cover: "",
    errors: {}
  };

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
  }
  render() {
    return (
      <div>
        <form className="ui form">
          <h1>Add a new movie</h1>
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
  }
}
export default MovieForm;
