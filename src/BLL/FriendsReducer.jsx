import * as axios from 'axios';

const SET_USERS = 'NETWORK/FRIENDS/SET_USERS';
const SET_STATUS = 'NETWORK/FRIENDS/SET_STATUS';




export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
}

let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: []
}

const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default: 
            return state
    }
}
export let getFriends = () => (dispatch) => { 
    // this.props.status === statuses.NOT_INITIALIZED 
    dispatch(setStatus(statuses.INPROGRESS))
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
            dispatch(setStatus(statuses.SUCCESS))
            dispatch(setUsers(response.data.items))
        })   
}    



export const setUsers = (users) => ({ type: SET_USERS, users })
export const setStatus = (status) => ({ type: SET_STATUS, status })
    
 
export default FriendsReducer;