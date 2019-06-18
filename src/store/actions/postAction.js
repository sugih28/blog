import axios from 'axios'

export function getPost() {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                dispatch(setPost(res.data.slice(0,5)))
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
    return {
        type: "CREATE_POST",
        post
    }
}

export function editPost(post,index) {
    return {
        type: "EDIT_POST",
        post,
        index
    }
}

export function deletePost(id) {
    return {
        type: "DELETE_POST",
        id
    }
}