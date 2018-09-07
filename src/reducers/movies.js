import {SET_MOVIES, SAVE_MOVIES} from "../constants";

const movies = (state=[], action={})=> {
    switch(action.type) {
        case SET_MOVIES: {
            return action.data;
        }
        case SAVE_MOVIES: {
            return state;
        }
        default: return state;
    }
}

export default movies;