import { browserHistory } from 'react-router-3';
import { FETCH_VIDEOS } from './types';

const ROOT_URL = 'http://localhost:3000';

const videos = [
    {
        id: 1,
        url: 'https://youtu.be/liIXpVIgh2k',
        title: 'yeah'
    },
    {
        id: 2,
        url: 'https://youtu.be/74b6Whj5zNc',
        title: 'that really'
    },
    {
        id: 3,
        url: 'https://youtu.be/azwKHqEkXEY',
        title: 'happened'
    },
    {
        id: 4,
        url: 'https://youtu.be/FdSWEyl2mC4',
        title: 'or so Ive been'
    },
    {
        id: 5,
        url: 'https://youtu.be/ynNKe3wPqVE',
        title: 'told'
    }
]

export function fetchVideos() {
    return function(dispatch) {
        dispatch({
            type: FETCH_VIDEOS,
            payload: videos
        })
    }
}