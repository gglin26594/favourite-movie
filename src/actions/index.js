import { SET_MOVIES, ADD_MOVIE, MOVIE_FETCHED} from "../constants";

export const setMovies = data => {
  return {
    type: SET_MOVIES,
    data
  };
};

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    movie
  }
}

export const fetchMovie = (id) => {
  return dispatch => {
    fetch( `/api/movies/${id}`)
    .then(res => res.json())
    .then (data => dispatch(movieFetched(data)))
  }
}

export const movieFetched = (data) => {
  return {
    type: MOVIE_FETCHED,
    data
  }
}


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
    return fetch("/api/movies", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type" : "application/json"
      }
    }).then(handleRes)
    .then(data=>dispatch(addMovie(data.movie)))
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
