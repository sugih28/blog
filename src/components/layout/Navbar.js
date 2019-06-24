import React from 'react'
import {Link} from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import {connect} from 'react-redux'
import {checkAuth} from '../../store/actions/authAction'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        props.checkAuth(sessionStorage.getItem("user_token"))
    }    

    render() {
        const authLink = (this.props.auth.uid) ? (
            <SignInLink />
        ) : (
            <SignOutLink />
        )

        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/blog/" className="brand-logo">Blog IKP</Link>
                    {authLink}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth : state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth : (token) => dispatch(checkAuth(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
