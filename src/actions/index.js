import { SET_MOVIES} from "../constants";

export const setMovies = data => {
  return {
    type: SET_MOVIES,
    data
  };
};
const handleRes = (res) => {
  if(res.ok) {
    return res.json();
  } else {
    let error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
}

export const saveMovie = (data) => {
  return dispatch => {
    return fetch("api/games", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type" : "application/json"
      }
    }).then(handleRes)
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
