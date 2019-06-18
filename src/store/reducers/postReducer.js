const initState = {
    post:[]
}

export postReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_POST":
            console.log('POST Created : ', action.post)
            return {
                ...state,
                post:action.post
            }
        default:
            return state;
    }
}

export default postReducer;