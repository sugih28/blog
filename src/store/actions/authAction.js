import axios from 'axios'

export function login(user) {
    return(dispatch) => {
        const url = "https://reqres.in/api/login"
        axios.post(url,user)
            .then(res => {
                dispatch({type:"LOGIN_SUCCESS",user:res.data})
            }).catch(err => {
                dispatch({type:"LOGIN_FAILED",err})
            })
    }
}

export function checkAuth(token) {
    return {
        type: "CHECK_AUTH",
        token
    }
}

export function logout() {
    return {
        type: "LOGOUT_SUCCESS",
    }
}