const ADD_POST = 'NETWORK/CONTENT_WALL/ADD_POST';
let initialState = {
    data: {

        familyStatus: 'Single',
        photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
        city: 'Minsk',
        birthday: '02.02.1990'

    },

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
    newPosts: {
        id: 4,
        text: '',
        photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
        likes: '',
        dislikes: ''
    }
};

const addPostReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
                    text: action.text,
                    likeCount: 0
                }
                
                state.posts.unshift(newPost);
                return state;
                
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (postMessage) => {
    return {
        type: ADD_POST,
        text: postMessage
    }
}

export default addPostReducer;