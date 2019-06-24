import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

export class SignIn extends Component {
    state = {
        email:'',
        password:''
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    submitHandle = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        if (this.props.auth.uid) {
            return <Redirect to="/blog/" />
        }

        const alertError = this.props.authError ? (
            <span className="alert alert-danger">
                <center>{this.props.authError}</center>
            </span>
        ) : (
            null
        )

        return (
            <div className="container">
                <form onSubmit={this.submitHandle} className="grey darken-3">
                    <h5 className="grey-text">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.changeHandle} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.changeHandle} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                    </div>
                    {alertError}
                </form>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login : (user) => {dispatch(login(user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
