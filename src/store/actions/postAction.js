import {dbRef} from '../../config/firebase'

const postRef = dbRef.child('posts')

export function getPost() {
    return (dispatch) => {
        postRef.on('value', snap => {
            let posts = snap.val()
            let newState = []

            for (let post in posts) {
                newState.push({
                    id:post,
                    title: posts[post].title,
                    content: posts[post].content,
                    date: posts[post].date
                })
            }
            dispatch(setPost(newState))
        })
    }
}

export function setPost(posts) {
    return {
        type: "SET_POST",
        posts
    }
}

export function createPost(post) {
    return (dispatch) => {
        postRef.push(post)
            .then(res => {
                dispatch({type: 'CREATE_POST',post})
            }).catch(err => {
                console.log(err)
            })
    }
}

export function editPost(post,id) {
    return (dispatch) => {
        postRef.child(id).update(post)
            .then(res => {
                dispatch({type: 'EDIT_POST',post,id})
            }).catch(err => {
                console.log(err)
            })
    }
}

export function deletePost(id) {
    return (dispatch) => {
        postRef.child(id).remove()
            .then(res => {
                dispatch({type: 'DELETE_POST',id})
            }).catch(err => {
                console.log(err)
            })
    }
}