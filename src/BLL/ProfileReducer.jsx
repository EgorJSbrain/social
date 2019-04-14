import axios from "../DAL/axios-instatnce";

const ADD_POST = 'NETWORK/CONTENT_WALL/ADD_POST';
const ADD_NEW_POST = 'NETWORK/CONTENT_WALL/ADD_NEW_POST'
const SET_USER_PROFILE = 'NETWORK/CONTENT_WALL/SET_USER_PROFILE'
const CHANGE_TOGGLE = 'NETWORK/CONTENT_WALL/CHANGE_TOGGLE'
// const ADD_AVATAR = 'NETWORK/CONTENT_WALL/ADD_AVATAR'


let initialState = {
    toggleFlag: false,
    profile: null,
    posts: [],
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
            {
                return {
                    ...state, 
                    newPostMessage: action.text
                }
            }
        case SET_USER_PROFILE: 
            {
                return {
                    ...state,
                    profile: action.profile
            }
        }
        case CHANGE_TOGGLE: 
            {
                return {
                    ...state,
                    toggleFlag: !state.toggleFlag
            }
        }
        // case ADD_AVATAR: {
        //     return {
        //         ...state,
        //         profile: {...state.profile}
        //     }
        //}
        default:
                return state;
    }
};

export const addPostActionCreator = (postMessage) => ({ type: ADD_POST, postMessage })
export const addNewCommentTextareaCreator = (text) => ({ type: ADD_NEW_POST, text })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const changeToggle = () => ({type:CHANGE_TOGGLE})
// export const addAvatar = (avatar) => ({type: ADD_AVATAR, avatar})

export const getUsers = (userId) => (dispatch) => {
    axios.get('profile/' + userId)
            .then( response => {
                dispatch(setUserProfile( response.data )); 
            });
}

export const setProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().profilePage.profile.userId
         await axios.put('profile', profile);
           let res = await (axios.get('profile/' + userId));
           dispatch(setUserProfile( res.data )); 
           dispatch(changeToggle())
}

export const addAvatarUser = (imagefile) => async (dispatch, getState) => {
    let userId = getState().profilePage.profile.userId
    let formData = new FormData();
        formData.append('image', imagefile.currentTarget.files[0]);
         await axios.post('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            } 
        });
        let res = await axios.get('profile/' + userId);
           dispatch(setUserProfile( res.data ));
}

export default addPostReducer;