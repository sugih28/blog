const initState = {
    authError:false,
    user:null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("Logged In : ",action.user)
            sessionStorage.setItem("user_token",action.user.token)
            return {
                ...state,
                authError:false,
                user:action.user.token
            }
        case "LOGIN_FAILED":
            console.log("Login Failed ",action.err)
            return {
                ...state,
                authError: "Login Failed" 
            }
        case "LOGOUT_SUCCESS":
            console.log("Logout Success")
            sessionStorage.removeItem("user_token")
            return {
                ...state,
                user:null   
            }
        case "CHECK_AUTH" :
            return {
                ...state,
                user:action.token
            }
        default:
            return state;
    }
}

export default authReducer