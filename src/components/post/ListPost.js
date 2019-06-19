import React from 'react'
import SummaryPost from './SummaryPost'

function ListPost({posts}) {
    return (
        <div className="post-list section">
            {
                posts && posts.map(post => {
                    return (
                        <SummaryPost post={post} key={post.id}/>
                    )
                })

            }
        </div>
    )
}

export default ListPost
