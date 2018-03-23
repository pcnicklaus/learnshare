import { combineReducers } from 'redux';
import videoReducer from './video_reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    form,
    videos: videoReducer
});

export default rootReducer;