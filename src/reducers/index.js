import { combineReducers } from 'redux';
import videoReducer from './video_reducer';

const rootReducer = combineReducers({
    videos: videoReducer
});

export default rootReducer;