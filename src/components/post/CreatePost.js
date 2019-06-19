import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost} from '../../store/actions/postAction'
import {Redirect} from 'react-router-dom'

export class CreatePost extends Component {
    state = {
        title:null,
        content:null
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    submitHandle = (e) => {
        e.preventDefault()
        this.props.createPost(this.state)
        this.props.history.push("/blog")
    }

    render() {
        if (!this.props.user) {
            return <Redirect to="/blog/signin"/>
        }

        return (
            <div className="container">
                <form onSubmit={this.submitHandle} className="grey darken-3">
                    <h5 className="grey-text">Create Post</h5>
                    <div className="input-field">
                        <label htmlFor="emtitleail">Title</label>
                        <input type="text" id="title" onChange={this.changeHandle} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.changeHandle} ></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts:state.post.posts,
        user:state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {dispatch(createPost(post))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
