import React from 'react'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Blog IKP</Link>
                <SignInLink />
                <SignOutLink />
            </div>
        </nav>
    )
}

export default Navbar
