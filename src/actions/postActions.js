import { FETCH_POSTS, NEW_POSTS } from './types';

const fetchPosts = () => dispatch => { 
    let api = 'https://jsonplaceholder.typicode.com/posts';
    fetch(api)
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export {
    fetchPosts
}