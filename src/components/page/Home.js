import React, { Component } from 'react'
import ListPost from '../post/ListPost'
import SideBar from '../layout/SideBar'
import {connect} from 'react-redux'
import { getPost } from '../../store/actions/postAction';

export class Home extends Component {
    // componentDidMount() {
    //     this.props.getPost();
    // }
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ListPost posts={this.props.posts}/>
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
        posts: state.post.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: () => {dispatch(getPost())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
