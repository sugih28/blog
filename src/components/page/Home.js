import React, { Component } from 'react'
import ListPost from '../post/ListPost'
import SideBar from '../layout/SideBar'

export class Home extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ListPost />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <SideBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
