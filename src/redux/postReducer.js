import {CREATE__POST, FETCH__POSTS} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE__POST:

            return {...state, posts: state.posts.concat([action.payload])}
        case FETCH__POSTS:
            return { ...state, fetchedPosts: action.payload }
        default: return state
    }
}