import {
    FETCH_VIDEOS
} from '../actions/types';

export default function( state = {}, action) {

    switch(action.type) {
        case FETCH_VIDEOS:
            return { ...state, videos: action.payload }
    }

    return state;
}