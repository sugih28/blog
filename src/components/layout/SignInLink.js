import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/blog/post/create'>New Project</NavLink></li>
            <li><NavLink to='/blog/logout'>Log Out</NavLink></li>
            <li><NavLink to='/blog/user' className="btn btn-floating pink">IKP</NavLink></li>
        </ul>
    )
}

export default SignInLink;