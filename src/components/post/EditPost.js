import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editPost} from '../../store/actions/postAction'
import {Redirect} from 'react-router-dom'

export class EditPost extends Component {
    state = {
        title:'',
        content:''
    }    

    componentDidMount() {
        this.setState({
            title:this.props.post.title,
            content:this.props.post.content
        })
    }
    

    changeHandle = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    submitHandle = (e) => {
        e.preventDefault()
        const index = this.props.posts.indexOf(this.props.post)
        this.props.editPost(this.state,this.props.match.params.id)
        this.props.history.push("/blog")
    }

    render() {
        if (!this.props.user) {
            return <Redirect to="/blog/signin"/>
        }

        return (
            <div className="container">
                <form onSubmit={this.submitHandle} className="grey darken-3">
                    <h5 className="grey-text">Edit Post</h5>
                    <div className="input-field">
                        <label htmlFor="emtitleail">Title</label>
                        <input type="text" id="title" value={this.state.title} onChange={this.changeHandle} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" value={this.state.content} id="content" onChange={this.changeHandle} ></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const posts = state.post.posts
    const post = state.post.posts.find(post => {
        return post.id == ownProps.match.params.id
    })
    return {
        post:post,
        posts:posts,
        user:state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (post,index) => {dispatch(editPost(post,index))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
