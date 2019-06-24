const initState = {
    posts:[]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_POST":            
            console.log('Post Created')
            return {
                ...state,
            }

        case "SET_POST":
            console.log('Post Loaded')
            return {
                ...state,
                posts:action.posts
            }

        case "EDIT_POST":
            console.log('Post Edited : ',action.id)
            return {
                ...state,
            }

        case "DELETE_POST":
            console.log('Post Deleted : ',action.id)
            let deletePosts = state.posts.filter((post) => {
                return post.id != action.id
            })
            return {
                ...state,
                posts:deletePosts
            }
        default:
            return state;
    }
}

export default postReducer;