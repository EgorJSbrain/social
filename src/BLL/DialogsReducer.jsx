// const ADD_MESSAGE = 'NETWORK/DIALOGS/ADD_MESSAGE';
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
    newMessageText: ''
};

const addMessageReducer = ( state = initialState, action ) => {
    switch (action.type) {
        // case ADD_MESSAGE:
                // let newMessage = {
                //     id: 4,
                //     avatar: '',
                //     author: '',
                //     message: state.newMessageText
                // }
                
                // return {
                //     ...state, 
                //     messages: [newMessage, ...state.messages], 
                //     newMessageText: ''
                // };
            
        case ADD_MESSAGE_TEXT:
                return {
                    ...state, 
                    newMessageText: action.textMessage  
            }
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

// export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })
export const addNewMessageActionCreator = (textMessage) => ({ type: ADD_MESSAGE_TEXT, textMessage })
export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs })
export const setCurrentDialogId = (id) => ({type: SET_CURRENT_DIALOG_ID, id})
export const setMessages = (messages) => ({type: SET_MESSAGES, messages})
export const appendMessages = (messages) => ({type: APPEND_MESSAGES, messages})
export const setNewMessagesCount = (count) => ({type: SET_NEW_MESSAGES_COUNT, count})
export default addMessageReducer;