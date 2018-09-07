import { SET_MOVIES,  SAVE_MOVIES} from "../constants";

export const setMovies = data => {
  return {
    type: SET_MOVIES,
    data
  };
};

export const saveMovie = (data) => {
  return dispatch => {
    fetch("api/games", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type" : "application/json"
      }
    })
  }
}


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
