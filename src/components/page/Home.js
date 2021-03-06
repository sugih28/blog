import React, { Component } from 'react'
import ListPost from '../post/ListPost'
import SideBar from '../layout/SideBar'
import {connect} from 'react-redux'
import { getPost } from '../../store/actions/postAction';

export class Home extends Component {
    componentDidMount() {
        this.props.getPost()
    }
    
    render() {
        let listPost = (this.props.posts.length) ? (
            <ListPost posts={this.props.posts}/>            
        ) : (
            <div className="center"><br />Loading Post...</div>
        )

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {listPost}
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <SideBar />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: () => {dispatch(getPost())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
