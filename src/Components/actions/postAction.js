import {FETCH_POSTS, NEW_POST } from "./type";


export const fetchPost = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => dispatch({
        type : FETCH_POSTS,
        payload : posts
    }))

}