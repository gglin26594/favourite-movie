import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movieItem, deleteMovie }) => {
	return (
		<div className="ui card">
			<div className="image">
				<img src={movieItem.cover} alt="Movie Cover" />
			</div>
			<div className="content">
				<div className="header">{movieItem.title}</div>
			</div>
			<div className="extra content">
				<div className="ui two buttons">
					<Link
						to={`movies/${movieItem._id}`}
						className="ui basic button green"
					>
						Edit
					</Link>
					<div className="ui basic button red" onClick={()=>deleteMovie(movieItem._id)}>Delete</div>
				</div>
			</div>
		</div>
	);
};
export default MovieCard;
