import React from 'react'
import {connect} from 'react-redux'
import {createPost} from "../redux/Action";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    onSubmitHandler(event) {
        event.preventDefault()
        const {title} = this.state
        if (!title.trim()){
           return
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({title: ""})
    }

    changeInputHandler(event) {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler.bind(this)}>
                <div className="form-group">
                    <label htmlFor="title"><h2>Заголовок поста</h2></label>
                    <input type="text"
                           className="form-control mt-3"
                           id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.changeInputHandler.bind(this)}
                    />
                </div>
                <button className="btn btn-success mt-3" type="submits">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null,mapDispatchToProps)(PostForm)

