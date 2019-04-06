import axios from "../DAL/axios-instatnce";


const SET_USERS = 'NETWORK/FRIENDS/SET_USERS';
const SET_STATUS = 'NETWORK/FRIENDS/SET_STATUS';
const UNSUBSCRIBE_FROM_USER = 'NETWORK/FRIENDS/UNSUBSCRIBE_FROM_USER'
const SUBSCRIBE_TO_USER = 'NETWORK/FRIENDS/SUBSCRIBE_TO_USER'





export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
}

let initialState = {
    status: {},
    users: []
}

const FriendsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: {...state, status: action.status}
            }
        }
        case SET_USERS: 
            return {
                ...state,
                users: action.users
            }
            
        case UNSUBSCRIBE_FROM_USER: {
            return {...state, users: state.users.map( u => u.id !== action.userId ? u : {...u, followed: false}    
            )};              
        }
        case SUBSCRIBE_TO_USER: {          
            return {...state, users: state.users.map( u => u.id !== action.userId ? u  : {...u, followed: true}    
            )};       
        }
        default: 
            return state
    }
}
export const getFriends = () =>  async (dispatch) => { 
    dispatch(setStatus(statuses.INPROGRESS))
    let result = await axios.get("/users?count=100")
            dispatch(setStatus(statuses.SUCCESS))
            dispatch(setUsers(result.data.items))
}    
export const subscribeToUser = (userId) => async (dispatch) => {
    await axios.post('/follow/' + userId)
        dispatch(subscribe(userId))  
}
export const unSubscribeToUser = (userId) => async(dispatch) => {
    await axios.delete('/follow/' + userId)
        dispatch(unsubscribe(userId))   
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE_FROM_USER, userId})
export const subscribe = (userId) => ({ type: SUBSCRIBE_TO_USER, userId})

 
export const usersSelector = (state) => {
    let users = state.friendsPage.users;
    let usersArray = Object.keys(users).map( key => users[key]);
    
        return usersArray
}

export default FriendsReducer;




// const GET_USER = 'NETWORK/FRIENDS/GET_USER'


// let users = {};
            // action.users.forEach( user => {
            //     users[user.id] = user;
            // })


// export const Friend = () => async (dispatch) => {
//         let result = await axios.get('profile/{userId}')
//         dispatch(getUser(result.data))
//}

// export const getUser= (user) => ({type: GET_USER, user})