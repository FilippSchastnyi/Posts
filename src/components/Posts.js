import React from 'react'
import {connect} from "react-redux";
import Post from "./Post";

const Posts = props => {
    if (!props.syncPosts.length) {
        console.log(props.syncPosts)
        return (
            <p className="text-center">НЕТ ПОСТОВ!</p>
        )
    }
    return (
        <div>
            {props.syncPosts.map((post, id) => {
                return (
                    <Post
                        key={id}
                        post={post}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)