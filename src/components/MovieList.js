import React from "react";
import PropTypes from 'prop-types';

//make it as a stateless component
const MovieList = ({movies}) => {
	console.log(movies);
	const emptyMessage = (
		<p>Your favourite movie list is empty. Go add one...</p>
	);
	const movieList = (
		<p>Movie List</p>
	);
	return (<div>
		{movies.length === 0 ? emptyMessage : movieList}
	</div>);
};

MovieList.propTypes = {
	movies: PropTypes.array.isRequired,
}

export default MovieList;
