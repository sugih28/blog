import React from 'react'
import {connect} from 'react-redux'
import {deletePost, getPost} from '../../store/actions/postAction'
import {Link} from 'react-router-dom'

class DetailPost extends React.Component {
    clickHandle = (e) => {
        e.preventDefault()
        if (!this.props.user) {
            this.props.history.push("/blog/signin")
        } else {
            this.props.deletePost(this.props.match.params.id)
            this.props.history.push("/blog/signin")
        }
    }

    render() {
        const {post} = this.props;

        if(post) {
                const editLink = (this.props.user) ? (<Link to={"/blog/post/"+post.id+"/edit"}>EDIT</Link>) : null
                const deleteLink =  (this.props.user) ? (<a href="#" onClick={this.clickHandle}>Delete</a>) : null
            return(
                <div className="container section project-detail">
                    <div className="card z-depth-0">
                        <div className="card-content grey darken-3">
                            <span className="card-title">{post.title}</span>
                            <p>{post.content}</p>
                            | {editLink}
                        </div>
                        <div className="card-action grey darken-3 grey-text text-darken-1">
                            <div>Posted By Me | {deleteLink}</div>
                            <div>28th June 2019</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            this.props.getPost()
            
            return (
                <div className="container center">Post Loading...</div>
            )
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.id
    let post = state.post.posts.find((post) => {
        return post.id == id
    })
    return{
        post:post,
        user:state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        getPost: () => dispatch(getPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPost)
