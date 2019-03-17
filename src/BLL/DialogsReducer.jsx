const ADD_MESSAGE = 'NETWORK/DIALOGS/ADD_MESSAGE';
const ADD_MESSAGE_TEXT = 'NETWORK/DIALOGS/ADD_MESSAGE_TEXT';
let initialState = {
    messages: [
        
    ],
    

    newMessageText: ''
};

const addMessageReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_MESSAGE:
                let newMessage = {
                    id: 4,
                    avatar: '',
                    author: '',
                    message: state.newMessageText
                }
                
                return {
                    ...state, 
                    messages: [newMessage, ...state.messages], 
                    newMessageText: ''
                };
            
        case ADD_MESSAGE_TEXT:
                return {
                    ...state, 
                    newMessageText: action.textMessage  
            }
            
        default:
            return state;
    }
};

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })
export const addNewMessageActionCreator = (textMessage) => ({ type: ADD_MESSAGE_TEXT, textMessage })

export default addMessageReducer;