import axios from "../DAL/axios-instatnce";
import { setIsAuth } from "./AuthReducer";

const SET_STATUS = 'NETWORK/LOGIN/SET_STATUS';
const SET_MESSAGE = 'NETWORK/LOGIN/SET_MESSAGE';


export const statuses = {
    INITIALIZED: 'INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED'
};

let initialState = {
    status: statuses.INITIALIZED,
    message: ''
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        case SET_MESSAGE: 
            return {
                ...state,
                message: action.message
            }
        default: 
            return state
        
    }
}

export const loginThunk = (login, password, rememberMe, captcha) => (dispatch) => {
    // debugger
    dispatch(setStatus(statuses.INPROGRESS))
    axios
        .post('auth/login', {
            email: login,
            password: password,
            rememberMe: rememberMe
        })
        .then (result => {
            if (result.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS))
                dispatch(setIsAuth(true))
            } else {
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(result.data.messages[0]));
            }
        })
};

export const setStatus = (status) => ({type: SET_STATUS, status})
export const setMessage = (message) => ({type: SET_MESSAGE, message})


export default LoginReducer;