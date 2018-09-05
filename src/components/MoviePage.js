import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from './MovieList'

class MoviePage extends Component {
	render() {
		return (
			<div>
					<MovieList movies={this.props.movies} />
			</div>
		);
	}
}

MoviePage.propTypes = {
	movies: PropTypes.array.isRequired
}

const mapStateToProps = (state)=> {
	return {
		movies: state.movies,
	}
}

export default connect(mapStateToProps)(MoviePage);
