import { SET_MOVIES } from "../constants";

export const setMovies = data => {
  return {
    type: SET_MOVIES,
    data
  };
};

export const fetchMovies = () => {
  return dispatch => {
    fetch("/api/movies")
      .then(res => 
        
        res.json()
      )
      .then(data => 
        
        dispatch(setMovies(data.movies))
      );
  };
};
