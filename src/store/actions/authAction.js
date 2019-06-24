import axios from 'axios'
import * as firebase from 'firebase'

export function login(credential) {
    return(dispatch) => {

        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credential.password,
        ).then(res => {
            console.log(res.user)
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(err => {
            dispatch({type:"LOGIN_FAILED",err})
        })


        // const url = "https://reqres.in/api/login"
        // axios.post(url,user)
        //     .then(res => {
        //         console.log(user)
        //         dispatch({type:"LOGIN_SUCCESS",user:res.data})
        //     }).catch(err => {
        //         dispatch({type:"LOGIN_FAILED",err})
        //     })
    }
}

export function checkAuth(token) {
    return {
        type: "CHECK_AUTH",
        token
    }
}

export function logout() {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({type: 'LOGOUT_SUCCESS'})
            })
    }
}