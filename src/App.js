import React from 'react'
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import Post from "./components/Post";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h2>СИНХРОННЫЕ ПОСТЫ</h2>
                    <Posts />
                </div>
                <div className="col">
                    <h2>АСИНХРОННЫЕ ПОСТЫ</h2>
                    <FetchedPosts
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
