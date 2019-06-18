import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
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
                </form>
            </div>
        )
    }
}

export default SignIn
