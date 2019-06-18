import React from 'react'
import {Link} from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'

function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/blog/" className="brand-logo">Blog IKP</Link>
                <SignInLink />
                <SignOutLink />
            </div>
        </nav>
    )
}

export default Navbar
