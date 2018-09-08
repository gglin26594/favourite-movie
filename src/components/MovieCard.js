import React from "react";
import {Link} from "react-router-dom";
const MovieCard = ({ movieItem }) => {
  return (
	<div className="ui card">
		<div className="image">
			<img src={movieItem.cover} alt="Movie Cover" />
		</div>
		<div className="content">
			<div className="header">
				{movieItem.title}
			</div>
		</div>
		<div className="extra content">
			<div className="ui two buttons">
				<Link to={`movie/${movieItem._id}`} class="ui basic button green">Edit</Link>
				<div class="ui basic button red">Delete</div>
			</div>
		</div>
	</div>
	);
};
export default MovieCard;
