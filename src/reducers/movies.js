import {SET_MOVIES} from "../constants";

const movies = (state=[], action={})=> {
    switch(action.type) {
        case SET_MOVIES: {
            return action.data;
        }
        default: return state;
    }
}

export default movies;