import _ from 'lodash';
import axios from 'axios';
import { browserHistory } from 'react-router-3';
import { FETCH_VIDEOS, CREATE_VIDEO } from './types';

const ROOT_URL = 'http://localhost:3090';

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
];

const videosFiltered = [
    {
        id: 1,
        url: 'https://youtu.be/liIXpVIgh2k',
        title: 'yeah'
    },
]
const fakePayload = {
    id: 5,
    url: 'https://youtu.be/ynNKe3wPqVE',
    title: 'told'
}

export function fetchVideos() {

    return function(dispatch) {
        axios.get(`${ROOT_URL}`)
            .then(response => {
                console.log('response', response);
                dispatch({
                    type: FETCH_VIDEOS,
                    payload: response.data
                })
            })

    }
       
}

export function filterVideos(query) {

    console.log('query', query)
    
    return function(dispatch) {
        axios.get(`${ROOT_URL}/share/${query}`)
            .then(response => {
                console.log('response', response);
                dispatch({
                    type: FETCH_VIDEOS,
                    payload: response.data
                })
            })
    }
  
    
}

export function createShare(formData, cb) {
    
    return function(dispatch) {

        console.log('formdata', formData);

        axios.post(`${ROOT_URL}/share`, formData)
            .then(response => {


                dispatch({
                    type: CREATE_VIDEO,
                    payload: response.data
                })
            })
            .then( () => cb() );
    }
    
    
}

// export function createShare(formData, cb) {

//     console.log('formdata', formData);
//     console.log("in dispatch")

//     return function(dispatch) {
        
//         dispatch({
//             type: CREATE_VIDEO,
//             payload: fakePayload
//         })
//         .then( () => { cb(); });
//     }
// }
    // axios.post(`${ROOT_URL}/share`, formData)
    //     .then(response => {
    //         console.log('response in action', response)

    //         dispatch({
    //             type: CREATE_SHARE,
    //             payload: response.data
    //         })
    //     })
    //     .then( () => cb(); );
