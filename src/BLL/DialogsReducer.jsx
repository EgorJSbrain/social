import axios from './../DAL/axios-instatnce'
import _ from 'lodash'


const ADD_MESSAGE_TEXT = 'NETWORK/DIALOGS/ADD_MESSAGE_TEXT';
const SET_DIALOGS = 'NETWORK/DIALOGS/SET_DIALOGS'
const SET_CURRENT_DIALOG_ID = 'NETWORK/DIALOGS/SET_CURRENT_DIALOG_ID'
const SET_MESSAGES= 'NETWORK/DIALOGS/MESSAGES'
const SET_NEW_MESSAGES_COUNT= 'NETWORK/DIALOGS/SET_NEW_MESSAGES_COUNT'
const APPEND_MESSAGES= 'NETWORK/DIALOGS/APPEND_MESSAGES'




let initialState = {
    messages: [],
    dialogs: [],
    currentDialogId: null,
    newMessagesCount: 0,
};

const addMessageReducer = ( state = initialState, action ) => {
    switch (action.type) {
        
        case SET_DIALOGS: 
        // debugger
            return { 
                ...state, 
                dialogs: action.dialogs 
            }
        case SET_CURRENT_DIALOG_ID: 
            return { 
                ...state, 
                currentDialogId: action.id 
            }
        case SET_MESSAGES: 
            return { 
                ...state, 
                messages: action.messages 
            }
        case SET_NEW_MESSAGES_COUNT:
            return { 
                ...state, 
                newMessagesCount: action.count 
            }
        case APPEND_MESSAGES: 
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        default:
            return state;
    }
};


export const addNewMessageActionCreator = (textMessage) => ({ type: ADD_MESSAGE_TEXT, textMessage })
export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs })
export const setCurrentDialogId = (id) => ({type: SET_CURRENT_DIALOG_ID, id})
export const setMessages = (messages) => ({type: SET_MESSAGES, messages})
export const appendMessages = (messages) => ({type: APPEND_MESSAGES, messages})
export const setNewMessagesCount = (count) => ({type: SET_NEW_MESSAGES_COUNT, count})


export const getDialogsTC = () => async (dispatch) => {
    let response = await axios.get('dialogs')
        dispatch(setDialogs(response.data))
}
export const updateDialogTC = (userId) => async (dispatch) => {
     await axios.put(`/dialogs/${userId}`)
} 
export const getMessagesTC =(userId) => async (dispatch) => {
    let response = await axios.get(`dialogs/${userId}/messages`)
        dispatch(setMessages(response.data.items))
}    
export const setMessagesOfDialogsTC = (userId) => (dispatch) => {
    dispatch(updateDialogTC(userId))
    dispatch(getDialogsTC())
    dispatch(getMessagesTC(userId))
}
export const sendMessageTC = (message) => async (dispatch, getState) => {
    let currentDialogId = getState().dialogsPage.currentDialogId
    await axios.post(`dialogs/${currentDialogId}/messages`,
        {     
          body: message
        })
        dispatch(getMessagesTC(currentDialogId))
}
export const lastMessages = (getState) => {
    return _.last(getState().dialogsPage.messages)

}

export const getMessagesNewerThenLast = () => (dispatch) => {
    debugger
    if (!!lastMessages) {
        axios.get(`dialogs/${userId}/messages/new?newerThen=${lastMessages.addedAt}`)
            .then(response => {
            this.props.appendMessages(response.data.items))
        }
    }
}
// let lastMessages = _.last(this.props.messages);
// if (!!lastMessages) {
//     axios.get(`dialogs/${userId}/messages/new?newerThen=${lastMessages.addedAt}`)
//     .then(response => {
//         this.props.appendMessages(response.data.items)
    

 



export default addMessageReducer;