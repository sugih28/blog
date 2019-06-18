import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/blog/signin'>Sign In</NavLink></li>
        </ul>
    )
}

export default SignOutLink;