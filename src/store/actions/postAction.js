import axios from 'axios'

const url = "https://apiblogikp.000webhostapp.com/api/post/";

export function getPost() {
    return (dispatch) => {
        axios.get(url+"read.php")
            .then((res) => {
                dispatch(setPost(res.data.posts))
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
        axios.post(url+"create.php",post)
        .then(res => {
            console.log(post)
            dispatch({type: "CREATE_POST", post})
        }).catch(err => {
            console.log(err)
        })
    }
}

export function editPost(post,id) {
    return (dispatch) => {
        axios.post(url+"edit.php?id="+id,post)
            .then(res => {
                dispatch({type:"EDIT_POST",post})
            }).catch(err => {
                console.log(err)
            })
    }
}

export function deletePost(id) {
    return (dispatch) => {
        axios.get(url+"delete.php?id="+id)
            .then(res => {
                console.log(res.data.message)
                dispatch({type:'DELETE_POST',id})
            }).catch(err => {
                console.log(err)
            })
    }
}