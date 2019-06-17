import React from 'react'
import {Link} from 'react-router-dom'
import SummaryPost from './SummaryPost'

function ListPost() {
    return (
        <div className="post-list section">
            <Link to={'/post/3'}>
                <SummaryPost />
            </Link>
        </div>
    )
}

export default ListPost
