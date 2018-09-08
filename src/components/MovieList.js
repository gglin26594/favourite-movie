import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "../components/MovieCard";

//make it as a stateless component
const MovieList = ({movies, deleteMovie}) => {
	const emptyMessage = (
		<p>Your favourite movie list is empty. Go add one...</p>
	);
	const movieList = (
		<div className="ui four cards">
			{movies.map((movieItem)=>{
				return (
					<MovieCard movieItem={movieItem} key={movieItem._id} deleteMovie={deleteMovie} />
				)
			})
			}
		</div>
	);
	return (<div>
		{movies.length === 0 ? emptyMessage : movieList}
	</div>);
};

MovieList.propTypes = {
	movies: PropTypes.array.isRequired,
}

export default MovieList;
