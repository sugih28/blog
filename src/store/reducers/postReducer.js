const initState = {
    posts:[
        {id:1, title:'Find Some Ex', content:'this is a Content of Find Some Ex Post'},
        {id:2, title:'Find Some Golf', content:'this is a Content of Find Some Ex Golf'},
        {id:3, title:'Find Some Wolf', content:'this is a Content of Find Some Ex Wolf'},
    ]
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
            let index = action.index
            state.posts[index] = action.post
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