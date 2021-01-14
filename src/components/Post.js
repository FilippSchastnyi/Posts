import React from 'react'

export default (props) => {

    return (
        <div className="card ">
            <div className="card-body"></div>
            <h3 className="card-title">{props.post.title}</h3>
        </div>
    )
}