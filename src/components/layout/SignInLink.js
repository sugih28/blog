import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/project/create'>New Project</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/user' className="btn btn-floating pink">IKP</NavLink></li>
        </ul>
    )
}

export default SignInLink;