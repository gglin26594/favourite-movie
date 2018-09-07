import React, { Component } from "react";

class MovieForm extends Component {
  state = {
    title: "",
    cover: "",
    error: {}
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form className="ui form">
          <h1>Add a new movie</h1>
          <div className="field">
            <label>Movie Title</label>
            <input
              value={this.state.title}
              onChange={this.handleOnChange}
              type="text"
              name="title"
              placeholder="Movie Title"
            />
          </div>
          <div className="field">
            <label>Cover Image URL</label>
            <input
              value={this.state.cover}
              onChange={this.handleOnChange}
              type="text"
              name="cover"
              placeholder="Cover Image URL"
            />
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
