const ADD_POST = 'NETWORK/CONTENT_WALL/ADD_POST';
const ADD_NEW_POST = 'NETWORK/CONTENT_WALL/ADD_NEW_POST'
let initialState = {
    posts: [
        {
            id: 1,
            text: 'Hello!',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            likes: '',
            dislikes: ''
        },
        {
            id: 2,
            text: 'Hello! How are you?',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            likes: '',
            dislikes: ''
        },
        {
            id: 3,
            text: 'Hello!',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            likes: '',
            dislikes: ''
        }
    ],
    newPost: {
        id: 4,
        text: '',
        photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
        likes: '',
        dislikes: ''
    },

    newPostMessage: "",
};

const addPostReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
                    text: state.newPostMessage,
                    likeCount: 0
                }
                return {
                    ...state, 
                    posts: [ newPost, ...state.posts ], 
                    newPostMessage: ""
                };
            }
        case ADD_NEW_POST:
        // console.log(action.text)

            {
                return {
                    ...state, 
                    newPostMessage: action.text
                }
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (postMessage) => ({ type: ADD_POST, postMessage })
export const addNewCommentTextareaCreator = (text) => ({ type: ADD_NEW_POST, text })

export default addPostReducer;