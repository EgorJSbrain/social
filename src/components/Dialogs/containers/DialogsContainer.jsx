import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Dialogs from '../Dialogs';
import { addNewMessageActionCreator, 
         setDialogs,
         setCurrentDialogId,
         setMessages,
         appendMessages} from '../../../BLL/DialogsReducer';




const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        currentDialogId: state.dialogsPage.currentDialogId,
         
        // users: state.users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMessages: (messages) => {
            dispatch(setMessages(messages))
        },
        setDialogs: (dialogs) => {
            dispatch(setDialogs(dialogs))
        },
        setCurrentDialogId: (id) => {
            dispatch(setCurrentDialogId(id))
        },
        appendMessages: (messages) => {
            dispatch(appendMessages(messages))
        },
        // addMessage: (message) => {
        //     message && 
        //     dispatch(addMessageActionCreator(message))
        // },
        sendTextOnChange: (textMessage) => { 
            dispatch(addNewMessageActionCreator(textMessage))
        }
    }
}

const DialogsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
export default DialogsContainer;