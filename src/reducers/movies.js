import {SET_MOVIES, SAVE_MOVIES, ADD_MOVIE} from "../constants";

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
        default: return state;
    }
}

export default movies;