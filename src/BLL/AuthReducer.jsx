import axios from "../DAL/axios-instatnce";
import { setLogin } from "./LoginReducer";



const SET_IS_AUTH = 'NETWORK/AUTH/SET_IS_AUTH';
const SET_MY_ID = 'NETWORK/AUTH/SET_MY_ID'

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
        case SET_MY_ID:
    //    debugger
            return {
                ...state,
                userInfo: {
                    ...state.userInfo, 
                    userId: action.userId
                }
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
            //    debugger
               dispatch(setMyId(response.data.data.id))
                dispatch(setIsAuth(true))
                dispatch(setLogin(true))
                

            }
        })
};
export const logOutThunk = () => (dispatch) => {
    axios
        .post('auth/logout')
        .then(response => {
            // debugger
            if(response.data.resultCode === 0) {
                dispatch(setIsAuth(false));
                dispatch(setLogin(false))
            }
        })
}

export const setIsAuth = (value) => ({type: SET_IS_AUTH, value})
export const setMyId = (userId) => ({type: SET_MY_ID, userId})

export default AuthReducer;