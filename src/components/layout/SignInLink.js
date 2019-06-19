import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authAction';

const SignInLink = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/blog/post/create'>New Post</NavLink></li>
            <li><a onClick={props.logout}>Log Out</a></li>
            <li><NavLink to='/blog/user' className="btn btn-floating pink">IKP</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
}

export default connect(null,mapDispatchToProps)(SignInLink);