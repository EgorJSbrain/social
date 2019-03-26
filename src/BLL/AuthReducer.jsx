import axios from "../DAL/axios-instatnce";
import { setLogin } from "./LoginReducer";



const SET_IS_AUTH = 'NETWORK/AUTH/SET_IS_AUTH';
// const SET_MY_ID = 'NETWORK/AUTH/SET_MY_ID'

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
        // case SET_MY_ID:
        //  debugger
        //     return {

        //         ...state,
        //         myId: action.myId
        //     }
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
                // dispatch(setMyId(response.data.data.id))

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
// export const setMyId = (myId) => ({type: SET_MY_ID, myId})

export default AuthReducer;