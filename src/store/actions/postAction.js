import axios from 'axios'

export function getPost() {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                dispatch(setPost(res.data.slice(0,5)))
            })
    }
}

export function setPost(post) {
    return {
        type: "SET_POST",
        post
    }
}