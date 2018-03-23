import {
    FETCH_VIDEOS,
    CREATE_VIDEO
} from '../actions/types';

export default function( state = {}, action) {

    switch(action.type) {
        case FETCH_VIDEOS:
            return { ...state, videos: action.payload }
        case CREATE_VIDEO:
            console.log('actipn.payload', action)

            return { ...state, newVideo: action.payload }
    }

    return state;
}