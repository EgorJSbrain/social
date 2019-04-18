import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Dialogs from '../Dialogs';
import { addNewMessageActionCreator, 
         setCurrentDialogId,
         appendMessages,
         getDialogsTC,
         setMessagesOfDialogsTC,
         getMessagesTC,
         sendMessageTC} from '../../../BLL/DialogsReducer';




const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        currentDialogId: state.dialogsPage.currentDialogId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (userId) => {
            dispatch(getMessagesTC(userId))
        },
        getDialogs: (dialogs) => {
            dispatch(getDialogsTC(dialogs))
        },
        setCurrentDialogId: (id) => {
            dispatch(setCurrentDialogId(id))
        },
        appendMessages: (messages) => {
            dispatch(appendMessages(messages))
        },
        setMessagesOfDialogs: (userId) => {
            dispatch(setMessagesOfDialogsTC(userId))
        },
        sendTextOnChange: (textMessage) => { 
            dispatch(addNewMessageActionCreator(textMessage))
        },
        sendMessage: (message) => {
            dispatch(sendMessageTC(message))
        }
    }
}

const DialogsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
export default DialogsContainer;