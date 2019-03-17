import axios from "../DAL/axios-instatnce";



const SET_IS_AUTH = 'NETWORK/AUTH/SET_IS_AUTH';

let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH: 
            return {
                ...state,
                isAuth: action.value
            }
        default: {
            return state
        }
    }
};

export const me = () => (dispatch) => {
    axios
        .get('auth/me')
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setIsAuth(true))
            }
        })
};

export const setIsAuth = (value) => ({type: SET_IS_AUTH, value})

export default AuthReducer;