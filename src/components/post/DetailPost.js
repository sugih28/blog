import React from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../../store/actions/postAction'
import {Link} from 'react-router-dom'

class DetailPost extends React.Component {
    clickHandle = (e) => {
        e.preventDefault()
        this.props.deletePost(this.props.match.params.id)
        this.props.history.push("/blog/")
    }

    render() {
        const {post} = this.props;
        if(post) {
            return(
                <div className="container section project-detail">
                    <div className="card z-depth-0">
                        <div className="card-content grey darken-3">
                            <span className="card-title">{post.title}</span>
                            <p>{post.content}</p>
                            | <Link to={"/blog/post/"+post.id+"/edit"}>Sunting</Link>
                        </div>
                        <div className="card-action grey darken-3 grey-text text-darken-1">
                            <div>Posted By Me | <a href="#" onClick={this.clickHandle}>Delete</a></div>
                            <div>28th June 2019</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container center">Project Loading...</div>
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
        post:post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPost)
