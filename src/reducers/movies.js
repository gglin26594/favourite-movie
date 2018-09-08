import {SET_MOVIES, SAVE_MOVIES, ADD_MOVIE, MOVIE_FETCHED} from "../constants";

const movies = (state=[], action={})=> {
    switch(action.type) {
        case SET_MOVIES: {
            return action.data;
        }
        case SAVE_MOVIES: {
            return state;
        }
        case ADD_MOVIE: {
            return [...state, action.movie]
        }
        case MOVIE_FETCHED: {
            const index = state.findIndex(item => {return item._id === action.data._id});
            if(index > -1) {
                return  state.map(item => {
                    if(item._id === action.data._id) return action.data;
                    return item;
                });
            } else {
                return [...state, action.data];
            } 
        }
        default: return state;
    }
}

export default movies;