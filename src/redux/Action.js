import {CREATE__POST, FETCH__POSTS} from "./types";

export function createPost(post){
     return{
         type: CREATE__POST,
         payload: post
     }
}

export function fetchPosts(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        dispatch({type: FETCH__POSTS, payload: json})
    }
}