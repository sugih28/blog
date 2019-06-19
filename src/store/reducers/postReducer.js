const initState = {
    posts:[]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_POST":
            action.post.id = Math.random() 
            let createPosts = [...state.posts, action.post]
            return {
                ...state,
                posts:createPosts
            }

        case "SET_POST":
            return {
                ...state,
                posts:action.posts
            }

        case "EDIT_POST":
            console.log('Edited : ',action.post.id)
            return {
                ...state,
            }

        case "DELETE_POST":
            console.log('Deleted : ',action.id)
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