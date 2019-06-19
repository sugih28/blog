import React from 'react'
import {Link} from 'react-router-dom'

function SummaryPost({post}) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey grey-text darken-3">
                <Link to={'/blog/post/'+post.id}>
                    <span className="card-title">{post.title}</span>
                </Link>
                <p>Post By Me | <Link to={"/blog/post/"+post.id+"/edit"} >EDIT</Link></p>
                <p className="grey-text">28th June 2019</p>
            </div>
        </div>
    )
}

export default SummaryPost