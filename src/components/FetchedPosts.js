import React from 'react'
import Post from "./Post"
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from "../redux/Action";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)

    if (posts.length === 0) {
        return (
            <button className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
            >ЗАГРУЗИТЬ ПОСТЫ!</button>
        )
    }
    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post
                        key={post}
                        post={post}/>
                )
            })}
        </div>
    )
}